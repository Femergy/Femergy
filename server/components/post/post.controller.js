const userService = require('./post.service');
const { MESSAGES, POPULATE } = require('../../config/constants');

module.exports = {
  getPost,
  getAuthorAndAdminPosts,
  addPost,
  deletePost,
};

function getPost(req, res, next) {
  return userService.getPost(req.query.postId)
    .then(data => res.json({ success: true, data }));
}

function getAuthorAndAdminPosts(req, res, next) {
  return userService.getAuthorAndAdminPosts(req.query.userId)
    .then(data => res.json({success: true, data}));
}

function addPost(req, res, next) {
  return userService.addPost({ body: req.body, user: req.user })
    .then(data => res.json({ success: true, data }));
}

function deletePost(req, res, next) {
  return userService.deletePost({ postId: req.query.postId, userId: req.user.id })
    .then(data => res.json({ success: true, data }));
}
