const mongoose = require('../../config/mongoose');

const postSchema = new mongoose.Schema({
  author: { type: Object },
  authorId: { type: String },
  role: { type: String },
  text: { type: String },
  date: { type: Date },
  likes: { type: Number, default: 0 },
  shares: { type: Number, default: 0 },
  replies: { type: Number, default: 0 },
  comments: { type: Array, default: [] },
});

/**
 * @api {get} /models Post
 * @apiVersion 1.0.0
 * @apiName Post
 * @apiGroup _Models
 *
 * @apiSuccess (Post) {String} id Id
 * @apiSuccess (Post) {String} authorId Author's Id
 * @apiSuccess (Post) {String} text Post's text
 *
 */

/**
 * @apiDefine ExampleUser
 * @apiExample {json} User Example:
 *    {
 *        "_id": "5981acd80fadca2ea412d4d6",
 *        "author": "5981acd80fadca2ea412d4d7",
 *        "text": "Hello world",
 *    }
 *
 */

/**
 * @apiDefine ExampleSuccessPost
 * @apiSuccessExample Success Example:
 *    HTTP/1.1 200 OK
 *    {
 *        "success": true,
 *        "data": Post
 *    }
 *
 */

module.exports = mongoose.model('Post', postSchema);
