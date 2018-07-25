const _ = require('lodash');
const Joi = require('joi');
const postCtrl = require('./post.controller');
const { JOI, ROLES } = require('../../config/constants');

module.exports = {
  getPost: {
    /**
     * @api {get} /api/post/:postId Get post
     * @apiVersion 1.0.0
     * @apiName GetPost
     * @apiGroup Post
     * @apiPermission all
     *
     * @apiParam {String} postId Post id
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     * @apiUse ExampleSuccessPost
     *
     */
    method: 'GET',
    path: '/',
    validate: {
      query: {
        postId: JOI.OBJECTID.required(),
      },
    },
    handler: postCtrl.getPost,
  },
  getAuthorAndAdminPosts: {
    /**
     * @api {get} /api/post/author/:userId Get author's posts
     * @apiVersion 1.0.0
     * @apiName getAuthorAndAdminPosts
     * @apiGroup Post
     * @apiPermission all
     *
     * @apiParam {String} userId Author id
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     * @apiUse ExampleSuccessPost
     *
     */
    method: 'GET',
    path: '/author',
    auth: ROLES.ANY,
    validate: {
      query: {
        userId: JOI.OBJECTID.required(),
      },
    },
    handler: postCtrl.getAuthorAndAdminPosts,
  },
  addPost: {
    /**
     * @api {get} /api/post Add post
     * @apiVersion 1.0.0
     * @apiName AddPost
     * @apiGroup Post
     * @apiPermission all
     *
     * @apiParam {String} text Post text
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     * @apiUse ExampleSuccessPost
     *
     */
    method: 'POST',
    path: '/',
    auth: ROLES.ANY,
    validate: {
      body: {
        text: Joi.string().optional(),
      },
    },
    handler: postCtrl.addPost,
  },
  deletePost: {
    /**
     * @api {delete} /api/post/:postId Delete post
     * @apiVersion 1.0.0
     * @apiName DeletePost
     * @apiGroup Post
     * @apiPermission all
     *
     * @apiParam {String} postId Post Id
     *
     * @apiSuccess {Boolean} success
     * @apiSuccess {User} data
     *
     * @apiUse ExampleSuccessPost
     *
     */
    method: 'DELETE',
    path: '/',
    auth: ROLES.ANY,
    validate: {
      query: {
        postId: JOI.OBJECTID.required(),
      },
    },
    handler: postCtrl.deletePost,
  }
};
