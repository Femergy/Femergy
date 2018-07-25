const userService = require('./user.service')
const { MESSAGES, POPULATE } = require('../../config/constants')

module.exports = {
  getUser,
  getFullUser,
  getCurrentUser,
  updateCurrentUser,
  changeCurrentUserPassword,
  updateCurrentUserPhoto,
  getBonuses
};

function getUser(req, res, next) {
  return userService.getUser(req.query.userId)
    .then(data => res.json({ success: true, data }))
    .catch(err => next(err))
}

function getBonuses(req, res, next) {
  return userService.getUser(req.body.userId)
    .then(user => res.json({ success: true, bonuses: user.bonuses }))
    .catch(err => next(err))
}

function getFullUser(jwtPayload, next) {
  return userService.getFullUser(jwtPayload.id)
    .then(user => next(null, user))
    .catch(err => next(err))
}

function getCurrentUser(req, res, next) {
  return req.user.populate(POPULATE.USER).execPopulate()
    .then(data => res.json({ success: true, data: data.safe() }))
    .catch(err => next(err))
}

function updateCurrentUser(req, res, next) {
  const query = { ...req.body, currentUser: req.user };

  return userService.updateCurrentUser(query)
    .then(data => res.json({ success: true, data }))
    .catch(err => next(err))
}

function updateCurrentUserPhoto(req, res, next) {
  const query = { photo: req.file, currentUser: req.user };

  return userService.updateCurrentUser(query)
    .then(data => res.json({ success: true, data }))
    .catch(err => next(err))
}

function changeCurrentUserPassword(req, res, next) {
  const query = { ...req.body, currentUser: req.user }

  return userService.changeCurrentUserPassword(query)
    .then(data => res.json({ success: true, message: MESSAGES.PASSWORD_CHANGED, data }))
    .catch(err => next(err))
}
