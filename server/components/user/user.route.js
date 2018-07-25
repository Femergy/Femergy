const _ = require('lodash')
const Joi = require('joi')
const userCtrl = require('./user.controller')
const { JOI, ROLES } = require('../../config/constants')

module.exports = {
  getUser: {
    /**
     * @api {get} /api/user?userId=:userId Get user
     * @apiVersion 1.0.0
     * @apiName GetUser
     * @apiGroup User
     * @apiPermission all
     *
     * @apiParam {String} userId User id
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     * @apiUse ExampleSuccessUser
     *
     */
    method: 'GET',
    path: '/',
    validate: {
      query: {
        userId: JOI.OBJECTID.required(),
      },
    },
    handler: userCtrl.getUser,
  },
  getCurrentUser: {
    /**
     * @api {get} /api/user/current Get current user
     * @apiVersion 1.0.0
     * @apiName GetCurrentUser
     * @apiGroup User
     * @apiPermission user
     *
     * @apiUse ExampleHeader
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     * @apiUse ExampleSuccessUser
     *
     * @apiUse ExampleErrorTokenExpired
     * @apiUse ExampleErrorPermissions
     *
     */
    method: 'GET',
    path: '/current',
    auth: ROLES.ANY,
    handler: userCtrl.getCurrentUser,
  },
  updateCurrentUser: {
    /**
     * @api {put} /api/user Update current user
     * @apiVersion 1.0.0
     * @apiName PutCurrentUser
     * @apiGroup User
     * @apiPermission user
     *
     * @apiUse ExampleHeader
     *
     * @apiParam {String} [displayName] Display name
     * @apiParam {String} [email] Email
     * @apiParam {String} [newPassword] New password
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     * @apiUse ExampleSuccessUser
     *
     * @apiUse ExampleErrorTokenExpired
     * @apiUse ExampleErrorPermissions
     *
     */
    method: 'PUT',
    path: '/',
    auth: ROLES.ANY,
    validate: {
      body: Joi.object().keys({
        displayName: Joi.string(),
        username: Joi.string(),
        bio: Joi.string(),
        location: Joi.string(),
        email: Joi.string().email(),
        newPassword: Joi.string(),
        // oldPassword: Joi.string(),
        // }).and('newPassword', 'oldPassword').min(1),
      }).min(1),
    },
    handler: userCtrl.updateCurrentUser,
  },
  updateCurrentUserPhoto: {
    /**
     * @api {put} /api/user/photo Update current user photo
     * @apiVersion 1.0.0
     * @apiName PutCurrentUserPhoto
     * @apiGroup User
     * @apiPermission user
     *
     * @apiUse ExampleHeader
     *
     * @apiParam {File} photo User photo
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     * @apiUse ExampleSuccessUser
     *
     * @apiUse ExampleErrorTokenExpired
     * @apiUse ExampleErrorPermissions
     *
     */
    method: 'PUT',
    path: '/photo',
    auth: ROLES.ANY,
    handler: userCtrl.updateCurrentUserPhoto,
  },
  changeCurrentUserPassword: {
    /**
     * @api {post} /api/user/password Change current user password
     * @apiVersion 1.0.0
     * @apiName PostPassword
     * @apiGroup User
     * @apiPermission user
     *
     * @apiUse ExampleHeader
     *
     * @apiParam {String} oldPassword Old password of the User
     * @apiParam {String} newPassword New password for the User
     *
     * @apiUse ExampleSuccessParamsWithMessage
     * @apiUse ExampleSuccessWithMessage
     *
     * @apiUse ExampleErrorTokenExpired
     * @apiUse ExampleErrorPermissions
     *
     */
    method: 'POST',
    path: '/password',
    auth: ROLES.ANY,
    validate: {
      body: {
        oldPassword: Joi.string().required(),
        newPassword: Joi.string().required(),
      },
    },
    handler: userCtrl.changeCurrentUserPassword,
  },
  getUserBonuses: {
    /**
     * @api {post} /api/user/bonuses Receive user referals bonuses
     * @apiVersion 1.0.0
     * @apiName PostBonuses
     * @apiGroup User
     * @apiPermission user
     *
     *
     *
     * @apiUse ExampleErrorTokenExpired
     * @apiUse ExampleErrorPermissions
     *
     */
    method: 'POST',
    path: '/bonuses',
    auth: ROLES.ANY,
    validate: {
      body: {
        userId: Joi.string().required(),
      },
    },
    handler: userCtrl.getBonuses,
  },
};
