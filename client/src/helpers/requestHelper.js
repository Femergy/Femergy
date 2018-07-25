import qs from 'qs';
import axios from 'axios';
import config from '../../config.json';
import storageHelper from './storageHelper';
import Note from '../components/note/Note';

class RequestHelper {
  successHandler(data, onSuccess) {
    if (onSuccess && typeof onSuccess.handler === 'function') {
      onSuccess.handler(data);
    }
    if (onSuccess && onSuccess.msg) {
      Note.success(onSuccess.msg);
    }
  }

  failHandler(err, onFail) {
    if (onFail && typeof onFail.handler === 'function') {
      onFail.handler(err);
    }
    if (onFail && onFail.msg) {
      Note.error(onFail.msg);

    } else {
      Note.error(err);
    }
  }

  setAsReferal({ referer, referal }, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    return axios.post(config.api.setAsReferal, qs.stringify({ referer, referal }))
      .then((res) => {
        successHandler(res.data, { handler: onSuccess, msg: 'Registered on referal link.' });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Sign Up on referal link fails.' });
      });
  }

  getBonuses({ userId }, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    return axios.post(config.api.getBonuses, { userId })
      .then((res) => {
        successHandler(res.data.bonuses, { handler: onSuccess, msg: 'Fetch FEMS success' });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Fetch bonuses fail' });
      });
  }

  updateUser(params, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    return axios.put(config.api.updateUser, qs.stringify(params))
      .then((res) => {
        successHandler(res.data.data, { handler: onSuccess, msg: 'General Info Updated.' });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Update fails.' });
      });
  }

  updatePhoto({ photo }, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    const body = new FormData();
    body.append('photo', photo);

    return axios.put(config.api.updateUserPhoto, body)
      .then((res) => {
        successHandler(res.data.data, { handler: onSuccess, msg: 'Photo Updated.' });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Update fails.' });
      });
  }

  verifyEmail(onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    return axios.post(config.api.verifyEmail, qs.stringify({ email: storageHelper.user.email }))
      .then((res) => {
        successHandler(res, { handler: onSuccess, msg: 'Verification email was sent.' });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Email sanding error.' });
      });
  }

  forgotPassword({ email }, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    return axios.post(config.api.forgotPassword, qs.stringify({ email }))
      .then((res) => {
        successHandler(res, { handler: onSuccess });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Email sending error, please check is entered email correct.' });
      });
  }

  signup({ displayName, email, password, referer }, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    const body = { displayName, email, password };
    if (referer) { body.referer = referer; }
    return axios.post(config.api.formSignup, qs.stringify(body))
      .then((res) => {
        successHandler(res.data.data, { handler: onSuccess });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Fields should not be empty!'});
      });
  }

  signin({ email, password }, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    return axios.post(config.api.formSignin, qs.stringify({ email, password }))
      .then((res) => {
        successHandler(res.data.data, { handler: onSuccess });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Fields should not be empty!'});
      });
  }

  addPost({ text }, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    return axios.post(config.api.post, qs.stringify({ text }))
      .then((res) => {
        successHandler(res.data.data, { handler: onSuccess });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Adding post error.' });
      });
  }

  getPost({ postId }, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    return axios.get(`${config.api.post}?postId=${postId}`)
      .then((res) => {
        successHandler(res.data, { handler: onSuccess });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Getting post error.' });
      });
  }

  getAuthorPosts({ authorId }, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    return axios.get(`${config.api.authorPosts}?userId=${authorId}`)
      .then((res) => {
        successHandler(res.data.data, { handler: onSuccess });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Getting posts error.' });
      });
  }

  deletePost({ postId }, onSuccess, onFail) {
    const { successHandler, failHandler } = this;
    return axios.delete(`${config.api.post}?postId=${postId}`)
      .then((res) => {
        successHandler(res.data, { handler: onSuccess });
      })
      .catch((err) => {
        failHandler(err, { handler: onFail, msg: 'Removing post error.' });
      });
  }
}

const requestHelper = new RequestHelper();

export default requestHelper;
