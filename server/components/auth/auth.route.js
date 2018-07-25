const Joi = require('joi')
const _ = require('lodash')
const authCtrl = require('./auth.controller')
const passport = require('../../config/passport')

module.exports = {
  registerUser: {
    /**
     * @api {post} /api/auth/register Register user
     * @apiVersion 1.0.0
     * @apiName Registration
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiParam {String} displayName User name
     * @apiParam {String} email Email
     * @apiParam {String} password Password
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     * @apiUse ExampleSuccessRegistration
     *
     */
    method: 'POST',
    path: '/register',
    validate: {
      body: {
        displayName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        referer: Joi.string().optional()
      },
    },
    handler: authCtrl.register,
  },
  verifyEmailSend: {
    /**
     * @api {post} /api/auth/verify Send verify email
     * @apiVersion 1.0.0
     * @apiName Verify Email
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiParam {String} email Email
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     *
     */
    method: 'POST',
    path: '/verify',
    validate: {
      body: {
        email: Joi.string().email().required(),
      },
    },
    handler: authCtrl.verify,
  },
  setReferal: {
    /**
     * @api {post} /api/auth/verify Add user as a referal
     * @apiVersion 1.0.0
     * @apiName Add as a referal
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiParam {String} referer Referer's id
     * @apiParam {String} referal Referal's id
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     *
     */
    method: 'POST',
    path: '/referer',
    validate: {
      body: {
        referer: Joi.string().required(),
        referal: Joi.string().required(),
      },
    },
    handler: authCtrl.setReferal,
  },
  activateUser: {
    /**
     * @api {get} /api/auth/activate?token=:token Activate user
     * @apiVersion 1.0.0
     * @apiName Activate
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiDescription Response data in "auth-activate" cookie, redirect to "/profile"
     *
     * @apiUse ExampleSuccessParamsUserWithTokens
     * @apiUse ExampleSuccessUserWithTokens
     *
     */
    method: 'GET',
    path: '/activate',
    validate: {
      query: {
        token: Joi.string().required(),
      },
    },
    handler: authCtrl.activateUser,
  },
  loginUser: {
    /**
     * @api {post} /api/auth/login User login
     * @apiVersion 1.0.0
     * @apiName Login
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiParam {String} email User Email
     * @apiParam {String} password Password
     *
     * @apiUse ExampleSuccessParamsUserWithTokens
     * @apiUse ExampleSuccessUserWithTokens
     *
     */
    method: 'POST',
    path: '/login',
    validate: {
      body: {
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      },
    },
    handler: authCtrl.login,
  },
  forgotPassword: {
    /**
     * @api {post} /api/auth/forgot Forgot password
     * @apiVersion 1.0.0
     * @apiName Forgot
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiParam {String} email User Email
     *
     * @apiUse ExampleSuccessParamsWithMessage
     * @apiUse ExampleSuccessWithMessage
     *
     */
    method: 'POST',
    path: '/forgot',
    validate: {
      body: {
        email: Joi.string().email().required(),
      },
    },
    handler: authCtrl.forgotPassword,
  },
  refreshToken: {
    /**
     * @api {post} /api/auth/token Refresh access token
     * @apiVersion 1.0.0
     * @apiName Token
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiParam {String} token Refresh token
     *
     * @apiUse ExampleSuccessParamsUserWithTokens
     * @apiUse ExampleSuccessUserWithTokens
     *
     */
    method: 'POST',
    path: '/token',
    validate: {
      body: {
        token: Joi.string().required(),
      },
    },
    handler: authCtrl.refreshToken,
  },
  googleLogin: {
    /**
     * @api {get} /api/auth/login/google Google login
     * @apiVersion 1.0.0
     * @apiName LoginGoogle
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiDescription Redirect to "/api/auth/login/google/callback"
     *
     * @apiSuccess {String} --- Google auth html page
     *
     */
    method: 'GET',
    path: '/login/google',
    handlerSocial: passport.authenticate('google', { scope: [ 'profile', 'email' ] }),
  },
  googleCallback: {
    /**
     * @api {get} /api/auth/login/google/callback Google callback
     * @apiVersion 1.0.0
     * @apiName LoginGoogleCallback
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiDescription Response data in "auth-social" cookie, redirect to "/"
     *
     * @apiUse ExampleSuccessParamsUserWithTokens
     * @apiUse ExampleSuccessUserWithTokens
     *
     */
    method: 'GET',
    path: '/login/google/callback',
    handlerSocial: [
      passport.authenticate('google', { failureRedirect : '/' }),
      authCtrl.loginSocialCallback,
    ],
  },
  twitterLogin: {
    /**
     * @api {get} /api/auth/login/twitter Twitter login
     * @apiVersion 1.0.0
     * @apiName LoginTwitter
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiDescription Redirect to "/api/auth/login/twitter/callback"
     *
     * @apiSuccess {String} --- Twitter auth html page
     *
     */
    method: 'GET',
    path: '/login/twitter',
    handlerSocial: passport.authenticate('twitter'),
  },
  twitterCallback: {
    /**
     * @api {get} /api/auth/login/twitter/callback Twitter callback
     * @apiVersion 1.0.0
     * @apiName LoginTwitterCallback
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiDescription Response data in "auth-social" cookie, redirect to "/"
     *
     * @apiUse ExampleSuccessParamsUserWithTokens
     * @apiUse ExampleSuccessUserWithTokens
     *
     */
    method: 'GET',
    path: '/login/twitter/callback',
    handlerSocial: [
      passport.authenticate('twitter', { failureRedirect : '/' }),
      authCtrl.loginSocialCallback,
    ],
  },
  facebookLogin: {
    /**
     * @api {get} /api/auth/login/facebook Facebook login
     * @apiVersion 1.0.0
     * @apiName LoginFacebook
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiDescription Redirect to "/api/auth/login/facebook/callback"
     *
     * @apiSuccess {String} --- Facebook auth html page
     *
     */
    method: 'GET',
    path: '/login/facebook',
    handlerSocial: passport.authenticate('facebook', { scope: ['email'] }),
  },
  facebookCallback: {
    /**
     * @api {get} /api/auth/login/facebook/callback Facebook callback
     * @apiVersion 1.0.0
     * @apiName LoginFacebookCallback
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiDescription Response data in "auth-social" cookie, redirect to "/"
     *
     * @apiUse ExampleSuccessParamsUserWithTokens
     * @apiUse ExampleSuccessUserWithTokens
     *
     */
    method: 'GET',
    path: '/login/facebook/callback',
    handlerSocial: [
      passport.authenticate('facebook', { failureRedirect: '/' }),
      authCtrl.loginSocialCallback,
    ],
  },
  linkedinLogin: {
    /**
     * @api {get} /api/auth/login/linkedin Linkedin login
     * @apiVersion 1.0.0
     * @apiName LoginLinkedin
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiDescription Redirect to "/api/auth/login/linkedin/callback"
     *
     * @apiSuccess {String} --- Linkedin auth html page
     *
     */
    method: 'GET',
    path: '/login/linkedin',
    handlerSocial: passport.authenticate('linkedin', { scope: ['r_emailaddress'] }),
  },
  linkedinCallback: {
    /**
     * @api {get} /api/auth/login/linkedin/callback Linkedin callback
     * @apiVersion 1.0.0
     * @apiName LoginLinkedinCallback
     * @apiGroup Auth
     * @apiPermission all
     *
     * @apiDescription Response data in "auth-social" cookie, redirect to "/"
     *
     * @apiUse ExampleSuccessParamsUserWithTokens
     * @apiUse ExampleSuccessUserWithTokens
     *
     */
    method: 'GET',
    path: '/login/linkedin/callback',
    handlerSocial: [
      passport.authenticate('linkedin', { failureRedirect : '/' }),
      authCtrl.loginSocialCallback,
    ],
  },
}

/**
 * @apiDefine ExampleSuccessParamsUserWithTokens
 * @apiSuccess {Boolean} success
 * @apiSuccess {String} message
 * @apiSuccess {Object} data
 * @apiSuccess {User} data.user User
 * @apiSuccess {String} data.accessToken Token for access to private methods
 * @apiSuccess {String} data.refreshToken Token to update the access token
 * @apiSuccess {String} data.expiresIn Token expiration date in seconds
 * @apiSuccess {String} data.tokenType Token type
 */

/**
 * @apiDefine ExampleSuccessUserWithTokens
 * @apiSuccessExample Success Example:
 *    HTTP/1.1 200 OK
 *    {
 *       "success": true,
 *       "message": "User successfully logged in",
 *       "data": {
 *           "user": User,
 *           "accessToken": "eyJhbGciOiJIUzI1NiIsI...",
 *           "refreshToken": "5981764d3e73971ffc1c...",
 *           "expiresIn": 1507027911,
 *           "tokenType": "JWT"
 *       }
 *    }
 */

/**
 * @apiDefine ExampleSuccessRegistration
 * @apiSuccessExample Success Example:
 *    HTTP/1.1 200 OK
 *    {
 *       "success": true,
 *       "message": "Successfully created new user",
 *       "data": User
 *
 */
