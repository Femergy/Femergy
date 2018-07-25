const _ = require('lodash')
const Promise = require('bluebird')
const helper = require('../../helpers/helper')
const User = require('./user.model')
const path = require('path');
const fs = require('fs');
const { POPULATE, EXCLUDE, ERRORS } = require('../../config/constants')

module.exports = {
  getUser,
  getFullUser,
  updateCurrentUser,
  changeCurrentUserPassword,
}

function getUser(userId) {
  return User.findOne({ _id: userId }).populate(POPULATE.USER).select(EXCLUDE.USER)
    .then(user => user || helper.errorNotFound(ERRORS.NOT_FOUND_USER))
}

function getFullUser(userId) {
  return User.findOne({ _id: userId }).populate(POPULATE.USER)
    .then(user => user || helper.errorNotFound(ERRORS.NOT_FOUND_USER))
}

function updateCurrentUser(data) {
  const user = data.currentUser;

  if (_.has(data, 'displayName')) {
    user.displayName = data.displayName;
  }

  if (_.has(data, 'email')) {
    user.email = data.email;
  }

  if (_.has(data, 'username')) {
    user.username = data.username;
  }

  if (_.has(data, 'bio')) {
    user.bio = data.bio;
  }

  if (_.has(data, 'location')) {
    user.location = data.location;
  }

  if (_.has(data, 'photo')) {
    if (user.photo) {
      fs.unlink(path.join(__dirname, '../../public/uploads', user.photo));
    }
    user.photo = data.photo.filename;
  }

  return Promise.resolve(true)
    .then((isMatch) => {
      if (_.has(data, 'newPassword')) {
        if (!isMatch) helper.errorForbidden(ERRORS.INVALID_OLD_PASSWORD)
        user.password = data.newPassword
      }

      return user.save()
    })
    .then(user => user.populate(POPULATE.USER).execPopulate())
    .then(user => user.safe())
}

function changeCurrentUserPassword(data) {
  const user = data.currentUser

  return user.comparePassword(data.oldPassword)
    .then((isMatch) => {
      if (!isMatch) helper.errorForbidden(ERRORS.INVALID_OLD_PASSWORD)
      user.password = data.newPassword
      user.passwordResetExpired = null

      return user.save()
    })
    .then(user => user.getToken())
}
