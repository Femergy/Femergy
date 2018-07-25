const authService = require('../auth/auth.service')
const mailer = require('../mailer/mailer.service')
const config = require('../../config/config')

module.exports = {
  register,
  activateUser,
  login,
  verify,
  forgotPassword,
  refreshToken,
  loginSocial,
  loginSocialCallback,
  setReferal,
};

function register(req, res, next) {
  return authService.register(req.body, req.headers['x-forwarded-for'])
    .then((user) => {
      mailer.onRegistration(user[0].email, user[0].tokens.emailActivateToken, req.headers.host, req.protocol);
      res.json({ success: true, data: user[1] })
    })
}

function verify(req, res, next) {
  return authService.verify(req.body)
    .then((user) => {
      mailer.onRegistration(user.email, user.tokens.emailActivateToken, req.headers.host, req.protocol);
      res.json({ success: true, data: user });
    });
}

function setReferal(req, res, next) {
  return authService.setReferer(req.body)
    .then((user) => {
      res.json({ success: true, data: user });
    });
}

function activateUser(req, res, next) {
  return authService.activateUser(req.query.token)
    .then((user) => {
      mailer.onAfterRegistration(user.email);
      if (user.referer) { authService.setReferal({ referal: user.id, referer: user.referer }); }
      return user.getToken();
    })
    .then(token => {
      if (token) res.cookie('auth-activate', JSON.stringify({ success: true, data: token }), { expires: new Date(Date.now() + config.cookieAge) }).redirect('/')
    })
}

function login(req, res, next) {
  return authService.login(req.body)
    .then((data) => res.json({ success: true, data: data }))
}

function forgotPassword(req, res, next) {
  return authService.forgot(req.body.email)
    .then((newPassword) => {
      mailer.onForgotPassword(req.body.email, newPassword)
      res.json({ success: true, message: 'User successfully reset the password' })
    })
}

function refreshToken(req, res, next) {
  return authService.refresh(req.body.token)
    .then((data) => res.json({ success: true, message: 'Token successfully updated', data: data }))
}

function loginSocial(accessToken, refreshToken, profile, next) {
  return authService.loginSocial(profile)
    .then(user => next(null, user || false))
    .catch(err => next(err, false));
}

function loginSocialCallback(req, res, next) {
  return req.user.getToken()
    .then(token => {
      if (token) res.cookie('auth-social', JSON.stringify({ success: true, data: token }), { expires: new Date(Date.now() + config.cookieAge) }).redirect('/')
    })
    .catch(err => next(err));
}
