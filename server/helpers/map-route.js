const Map = require('lodash').map;
const IsArray = require('lodash').isArray;
const Includes = require('lodash').includes;
const Compact = require('lodash').compact;
const validator = require('./req-validator');
const passport = require('../config/passport');
const auth = passport.authenticate('jwt', { session: false, failWithError: true });
const { ERRORS } = require('../config/constants');
const helper = require('./helper');
const catcher = fn => (req, res, next) => fn ? fn(req, res, next).catch(next) : next();
const uploadPhoto = require('../config/multer-images');
const uploadZip = require('../config/multer-zip');

module.exports = config => {
  const router = require('express').Router(); //should be here, above overwrites routes
  const isNotValid = (userRole, authRoute) => {
    if ( IsArray(authRoute)) {
      return !!!Includes(authRoute, userRole);
    } else {
      return  userRole !== authRoute;
    }
  };

  const fileParser = (uploadFile) => {
    if (uploadFile === 'photo') {
      return uploadPhoto.single('photo');
    }
    if (uploadFile === 'zip') {
      return uploadZip.single('acceptedFiles');
    }
  };

  Map(config, route => {

    const authRoute = route.auth;
    let authenticator = null;
    let accessor = null;

    if (authRoute) {
      authenticator = auth;
      accessor = (req, res, next) => {
        const userRole = req.user.role;
        if (isNotValid(userRole, authRoute)) {
          helper.errorForbidden(ERRORS.NO_PERMISSIONS);
        }
        next();
      }
    }
    const args = Compact([route.path, authenticator, accessor, route.files, fileParser(route.upload),validator(route.validate), catcher(route.handler), route.handlerSocial]);
    router[route.method.toLowerCase()](...args);
  });
  return router
};
