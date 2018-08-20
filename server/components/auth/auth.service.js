const _ = require('lodash')
const Promise = require('bluebird')
const crypto = require('crypto')
const User = require('../user/user.model')
const helper = require('../../helpers/helper')
const { ERRORS, POPULATE, ROLES } = require('../../config/constants')

module.exports = {
  register,
  verify,
  activateUser,
  login,
  refresh,
  forgot,
  loginSocial,
  registerSocial,
  setReferal,
  setReferer,
};

function register(data, ip) {

  const user = new User({
    role: ROLES.USER,
    displayName: data.displayName,
    email: data.email,
    password: data.password,
  });

  return user.save()
    .then((user) => {
      User.findOne({ "_id": data.referer}, function(err, user) {
        if (err || !user || !ip) {
          return null;
        }
        if (user.referals.find(item => item === ip)) {
          return null;
        } else {
          user.referals.push(ip);
          user.bonuses += 1;
        }
        user.save();
      });

      return Promise.all([
        user.populate(POPULATE.USER).execPopulate(),
        user.getToken(),
      ]);
    });
}

function verify(data) {
  return User.findOne({ email: data.email })
    .then((user) => {
      if (!user) {
        helper.errorUnauthorized(ERRORS.INVALID_EMAIL_OR_PASSWORD);
      }
      return user;
    });
}

function setReferal(data) {
  return User.findById(data.referer)
    .then((user) => {
      if (!user) {
        helper.errorUnauthorized(ERRORS.INVALID_EMAIL_OR_PASSWORD);
      }
      user.addReferal(data.referal);
      return user.save();
    });
}

function setReferer(data) {
  return User.findById(data.referal)
    .then((user) => {
      if (!user) {
        helper.errorUnauthorized(ERRORS.INVALID_EMAIL_OR_PASSWORD);
      }
      user.setReferer(data.referer);
      return user.save();
    });
}

function activateUser(token) {
  if (!token) helper.errorNotFound(ERRORS.NOT_FOUND)

  return User.findOneAndUpdate({ 'tokens.emailActivateToken': token || '' }, { $unset: { 'tokens.emailActivateToken': 1 } }, { new: true })
    .then((user) => {
      return user || helper.errorNotFound(ERRORS.INVALID_TOKEN)
    })
}

function login(data) {
  return User.findOne({ email: data.email })
    .then((user) => {
      if (!user) {
        helper.errorUnauthorized(ERRORS.INVALID_EMAIL_OR_PASSWORD);
      }
      if (user.isNewUser) { user.isNewUser = false; }
      return Promise.all([
        user,
        user.comparePassword(data.password),
      ])
    })
    .spread((user, isMatch) => {
      if (!isMatch) helper.errorUnauthorized(ERRORS.INVALID_EMAIL_OR_PASSWORD)

      return user.getToken()
    })
}

function refresh(token) {

  return User.findOne({ 'tokens.refreshToken': token })
    .then((user) => {
      if (!user) helper.errorNotFound(ERRORS.NOT_FOUND_USER)

      return user.getToken()
    })
}

function forgot(email) {
  return User.findOne({ email: email })
    .then((user) => {
      if (!user) helper.errorNotFound(ERRORS.INVALID_EMAIL)
      const newPassword = crypto.randomBytes(4).toString('hex')
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      user.password = newPassword
      user.passwordResetExpired = tomorrow

      return Promise.all([
        user.save(),
        newPassword,
      ])
    })
    .spread((user, newPassword) => newPassword)
}

function loginSocial(data) {
  const updateQuery = {
    [data.provider]: data.id,
    displayName: data.displayName,
    role: ROLES.USER,
  }

  // if (_.has(data, 'photos')) updateQuery[updateQueryKey].avatar = data.photos[0].value
  // if (data.emails && data.emails[0]) updateQuery.email = data.emails[0]
  // if (data.name && data.name.givenName) updateQuery.firstName = data.name.givenName
  // if (data.name && data.name.familyName) updateQuery.lastName = data.name.familyName

  return User.findOne({ [data.provider]: data.id })
    .then((user) => {
      // if (!user[PROFILES.HIRER] || !user[PROFILES.SPECIALIST]) return registerSocial({ currentUser: user }) //TODO temp, will be replaced by post social auth api
      if (!user) {
        const user = new User({
          [data.provider]: data.id,
          displayName: data.displayName,
          role: ROLES.USER,
          email: data.emails[0].value
        });
        return registerSocial(user);
      }
      if (user.isNewUser) { user.isNewUser = false; }
      return user;
    });
}

function registerSocial(currentUser) {
  const user = currentUser;

  return user.save()
    .then(user => user.populate(POPULATE.USER).execPopulate());
}
