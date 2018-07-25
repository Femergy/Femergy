const mongoose = require('../../config/mongoose')
const bcrypt = require('bcryptjs') //if npm errors, can be replaced by bcrypt.js, it has same api but a bit slower
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const config = require('../../config/config')
const { ROLES, ERRORS } = require('../../config/constants')
const helper = require('../../helpers/helper')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    trim: true,
    validate: {
      validator: value => /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/.test(value),
      message: 'Invalid email address',
    }
  },
  google: { type: String },
  twitter: { type: String },
  facebook: { type: String },
  linkedin: { type: String },
  password: { type: String },
  passwordResetExpired: { type: Date },
  referer: { type: String },
  referals: { type: Array, default: [] },
  bonuses: {type: Number, default: 0},
  displayName: { type: String, required: true },
  username: { type: String },
  bio: { type: String },
  location: { type: String },
  photo: { type: String },
  role: { type: String, enum: _.values(ROLES) },
  isNewUser: { type: Boolean, default: true },
  tokens: { emailActivateToken: String, refreshToken: String },
}, { timestamps: true })

userSchema.pre('save', function (next) {
  if (this.isNew) this.tokens.emailActivateToken = crypto.randomBytes(40).toString('hex');
  if ((this.isNew && this.password) || this.isModified('password')) this.password = bcrypt.hashSync(this.password, 10);

  next();
});

userSchema.path('email').validate({
  isAsync: true,
  validator: function (value, respond) {
    const query = { email: value }
    if (this._id) query._id = { $ne: this._id }
    this.model('User').count(query)
      .then((count) => respond(count === 0))
  },
  message: 'The email address `{VALUE}` is already in use',
  type: 'duplicate',
})

userSchema.methods.comparePassword = function (oldPassword) {
  const isExpired = this.passwordReset && Date.now() > this.passwordReset
  if (isExpired) helper.errorForbidden(ERRORS.EXPIRED_PASSWORD)

  return bcrypt.compare(oldPassword, this.password)
}

userSchema.methods.addReferal = function (referalId) {
  if (!this.referals.find(referal => referal === referalId)) {
    this.referals.push(referalId);
  }
};

userSchema.methods.setReferer = function (refererId) {
  this.referer = refererId;
};

/**
 * @api {get} /models User
 * @apiVersion 1.0.0
 * @apiName User
 * @apiGroup _Models
 *
 * @apiSuccess (User) {String} id Id
 * @apiSuccess (User) {String} displayName Name
 * @apiSuccess (User) {String} email Email
 * @apiSuccess (User) {String} username User name
 * @apiSuccess (User) {String} bio Biography
 * @apiSuccess (User) {String} location Location
 * @apiSuccess (User) {String} referer's id
 * @apiSuccess (User) {String} referals Array of referals id
 * @apiSuccess (User) {String} google Google id
 * @apiSuccess (User) {String} twitter Twitter id
 * @apiSuccess (User) {String} facebook Facebook id
 * @apiSuccess (User) {String} linkedin Linkedin id
 *
 */

/**
 * @apiDefine ExampleUser
 * @apiExample {json} User Example:
 *    {
 *        "_id": "5981acd80fadca2ea412d4d6",
 *        "displayName": "Woody Woodpecker",
 *        "email": "woody@mail.com",
 *        "google": "104086434331416838950",
 *        "twitter": "251499959",
 *        "facebook": "10213582595871532",
 *        "linkedin": "61D9Tnh33U",
 *    }
 *
 */

/**
 * @apiDefine ExampleSuccessUser
 * @apiSuccessExample Success Example:
 *    HTTP/1.1 200 OK
 *    {
 *        "success": true,
 *        "data": User
 *    }
 *
 */

/**
 * @apiDefine ExampleSuccessUsers
 * @apiSuccessExample Success Example:
 *    HTTP/1.1 200 OK
 *    {
 *        "success": true,
 *        "data": [User]
 *    }
 *
 */

userSchema.methods.safe = function () {
  const { password, tokens, passwordReset, createdAt, updatedAt, __v, ...safe } = this._doc
  return safe
}

userSchema.methods.getToken = function () {
  const user = { id: this._id };
  if (this.displayName) user.displayName = this.displayName;
  if (this.role) user.role = this.role;
  if (this.email) user.email = this.email;
  if (this.username) user.username = this.username;
  if (this.bio) user.bio = this.bio;
  if (this.location) user.location = this.location;
  if (this.photo) user.photo = this.photo;
  if (this.google) user.google = this.google;
  if (this.twitter) user.twitter = this.twitter;
  if (this.facebook) user.facebook = this.facebook;
  if (this.linkedin) user.linkedin = this.linkedin;
  if (this.isNewUser) user.isNewUser = this.isNewUser;

  const accessToken = jwt.sign(user, config.auth.secret, { expiresIn: config.auth.tokenAge });
  this.tokens.refreshToken = `${this._id.toString()}.${crypto.randomBytes(40).toString('hex')}`;
  const decodedToken = jwt.decode(accessToken);
  const isVerified = !this.tokens.emailActivateToken;

  return this.save()
    .then(data => {
      return {
        user,
        accessToken,
        expiresIn: decodedToken.exp,
        refreshToken: data.tokens.refreshToken,
        tokenType: 'JWT',
        isVerified,
      }
    })
};

module.exports = mongoose.model('User', userSchema);
