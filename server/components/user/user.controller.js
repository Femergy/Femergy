const userService = require('./user.service');
const { MESSAGES, POPULATE } = require('../../config/constants');
const removeExtracted = require('../../helpers/remove-extracted');

module.exports = {
  getUser,
  getFullUser,
  getCurrentUser,
  updateCurrentUser,
  changeCurrentUserPassword,
  updateCurrentUserPhoto,
  getBonuses,
  getContacts,
  sendInvitation
};

 function sendInvitation(req, res, next) {
   return userService.preparingMailForContacts({userId : req.user._id, contacts: req.body.data, host: req.headers.host ,protocol: req.headers.protocol})
     .then(() => {
       res.json({success: true})
     })
     .catch(err => {
         next(err)
     });
 }

 function getContacts(req, res, next) {
   const acceptedFiles  = req.file;
   const { _id } = req.user;
   return userService.getContacts({_id, acceptedFiles})
     .then(data => {
       removeExtracted(_id);
       res.json({success: true, data});
     })
     .catch(err => {
         removeExtracted(_id);
         next(err)});
 }


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
