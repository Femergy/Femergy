import axios from 'axios';
import { AUTH_PAGE, SERVER } from '../constants';
import { constants } from '../constants';
import storageHelper from './storageHelper';

class ReducerHelper {
  setLogoutState(state, storage) {
    storage.removeData();
    const newState = Object.assign({}, state);
    newState.isAuthenticated = false;
    newState.user = null;
    newState.token = null;
    newState.isVerified = false;
    newState.feedPosts = [];
    return newState;
  }

  setLoginState(state, storage, data) {
    storage.setData(data);
    const newState = Object.assign({}, state);
    newState.isAuthenticated = true;
    newState.user = storage.user || {};
    newState.token = storage.token || {};
    newState.isVerified = storage.isVerified || false;
    newState.referalLink = `${constants.SERVER}/${constants.AUTH_PAGE}/${storageHelper.user.id}`;
    if (newState.token) { axios.defaults.headers.common['Authorization'] = `JWT ${newState.token.access}`; }
    return newState;
  }

  newPost(postsList, newPost) {
    const posts = postsList.slice(0, postsList.length);
    posts.unshift(newPost);
    return posts;
  }

  deletePost(postsList, postId) {
    const posts = postsList.slice(0, postsList.length);
    posts.find((post, index) => {
      if (post._id === postId) {
        posts.splice(index, 1);
        return true;
      }
      return false;
    });
    return posts;
  }
}

const reducerHelper = new ReducerHelper();
export default reducerHelper;
