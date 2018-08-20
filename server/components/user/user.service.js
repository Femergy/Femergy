const _ = require('lodash');
const mailer = require('../mailer/mailer.service');
const Promise = require('bluebird');
const helper = require('../../helpers/helper');
const User = require('./user.model');
const path = require('path');
const fs = require('fs-extra');
const csvToJson = require('convert-csv-to-json');
const decompress = require('decompress');

const {POPULATE, EXCLUDE, ERRORS} = require('../../config/constants');

module.exports = {
  getUser,
  getFullUser,
  updateCurrentUser,
  changeCurrentUserPassword,
  getContacts,
  preparingMailForContacts
};

function preparingMailForContacts({userId, contacts, host, protocol}) {
  return User.findOne({_id: userId})
    .then((user) => {
      contacts.forEach((item) => {
        mailer.sendInvitation({userId, userEmail: user.email, contactEmail: item.EmailAddress, host, protocol});
      });

    })
}

function getContacts({_id, acceptedFiles}) {
  return new Promise((res, rej) => {
    const userFolder = `./extracted/${_id}`;
    const connectionsFile = `./extracted/${_id}/Connections.csv`;
    const zipFile = `./extracted/acceptedFiles-${_id}.zip`;

    if (!acceptedFiles.mimetype) {
      helper.fileIsNotValid(ERRORS.FILE_IS_NOT_VALID);
    }

    if (!acceptedFiles.size / 1000 > 500) {
      helper.fileIsNotValid(ERRORS.FILE_IS_TOO_BIG);
    }

    if (fs.existsSync(userFolder)) {
      fs.removeSync(userFolder);
    }

    fs.mkdirSync(userFolder);

    decompress(zipFile, userFolder)
      .then(() => {
        if (fs.existsSync(connectionsFile)) {
          const connections = csvToJson.fieldDelimiter(',').getJsonFromCsv(connectionsFile);
          User.find({email: {$in: connections.map(item => item.EmailAddress)}})
            .then((existUsers) => {
              const uniqueConnections = connections.filter((item) =>
                !(existUsers.find(existUser => existUser.email === item.EmailAddress)));
              res(uniqueConnections);
            });
        } else {
          rej(new Error('Connections.csv doesn`t exist'));
        }
      });
  });
}

function getUser(userId) {
  return User.findOne({_id: userId}).populate(POPULATE.USER).select(EXCLUDE.USER)
    .then(user => user || helper.errorNotFound(ERRORS.NOT_FOUND_USER))
}

function getFullUser(userId) {
  return User.findOne({_id: userId}).populate(POPULATE.USER)
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
