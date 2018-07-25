const express = require('express');
const mapRoute = require('./helpers/map-route');

const router = express.Router();

router.use('/api/auth', mapRoute(require('./components/auth/auth.route')));
router.use('/api/user', mapRoute(require('./components/user/user.route')));
router.use('/api/post', mapRoute(require('./components/post/post.route')));

/**
 * @apiDefine ExampleErrorTokenExpired
 * @apiErrorExample {json} Token expired error Example:
 *    HTTP/1.1 401 Unauthorized
 *    {
 *        "success": false,
 *        "message": "Unauthorized"
 *    }
 */

/**
 * @apiDefine ExampleErrorPermissions
 * @apiErrorExample {json} Wrong permissions Example:
 *    HTTP/1.1 401 Unauthorized
 *    {
 *        "success": false,
 *        "message": "You do not have permissions"
 *    }
 */

/**
 * @apiDefine ExampleHeader
 * @apiHeaderExample {json} Header Example:
 * {
 *    "Authorization": "JWT eyJhbGciOiJIUzI1..."
 * }
 *
 */

/**
 * @apiDefine ExampleSuccessWithMessage
 * @apiSuccessExample Success Example:
 *    HTTP/1.1 200 OK
 *    {
 *        "success": true,
 *        "message": ...
 *    }
 *
 */

/**
 * @apiDefine ExampleSuccessParamsWithMessage
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {String} message
 *
 */

module.exports = router;
