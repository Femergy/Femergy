const Post = require('./post.model');
const path = require('path');
const fs = require('fs');
const helper = require('../../helpers/helper');
const { POPULATE, EXCLUDE, ERRORS } = require('../../config/constants');
const User = require('../user/user.model');

module.exports = {
  getPost,
  getAuthorAndAdminPosts,
  addPost,
  deletePost,
};

function getPost(postId) {
  return Post.findById(postId)
    .then(post => post || helper.errorNotFound(ERRORS.NOT_FOUND));
}

async function getAuthorAndAdminPosts(userId) {
  return Post.find({ $or: [{ authorId : userId }, { role: 'admin' }] })
    .then(postList => postList.reverse() || helper.errorNotFound(ERRORS.NOT_FOUND));
}

function addPost(data) {
  return User.findById(data.user._id)
    .then((user) => {
      if (!user) { return helper.errorNotFound(ERRORS.NOT_FOUND); }
        return new Post({
          authorId: user._id,
          role: user.role,
          author: user,
          text: data.body.text,
          date: new Date(),
        }).save();
    });
}

function deletePost(data) {
  return Post.findById(data.postId)
    .then((post) => {
      if (!post) { return helper.errorNotFound(ERRORS.NOT_FOUND); }
      if (post.authorId === data.userId) {
        return post.remove() || helper.errorNotFound(ERRORS.NOT_FOUND);
      }
      return helper.errorUnauthorized(ERRORS.UNAUTHORIZED);
    });
}
