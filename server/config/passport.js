const _ = require('lodash');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const GoogleStrategy = require('passport-google-oauth20');
const TwitterStrategy = require('passport-twitter').Strategy;
const FacebookStrategy = require('passport-facebook');
const LinkedinStrategy = require('passport-linkedin');
const authCtrl = require('../components/auth/auth.controller');
const userCtrl = require('../components/user/user.controller');
const config = require('./config');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: config.auth.secret,
};

passport.use(new JwtStrategy(opts, userCtrl.getFullUser));

passport.use(new GoogleStrategy({
  clientID: config.social.googleClientId,
  clientSecret: config.social.googleClientSecret,
  callbackURL: config.social.googleClientCallback,
}, authCtrl.loginSocial));

passport.use(new TwitterStrategy({
  consumerKey: config.isProd ? config.social.twitterClientId : config.social.twitterClientId,
  consumerSecret: config.isProd ? config.social.twitterClientSecret : config.social.twitterClientSecret,
  callbackURL: config.social.twitterClientCallback,
  includeEmail: true,
}, authCtrl.loginSocial));

passport.use(new FacebookStrategy({
  clientID: config.social.facebookClientId,
  clientSecret: config.social.facebookClientSecret,
  callbackURL: config.social.facebookClientCallback,
  profileFields: ['id', 'displayName', 'email', 'first_name', 'middle_name', 'last_name'],
}, authCtrl.loginSocial));

passport.use(new LinkedinStrategy({
  consumerKey: config.social.linkedinClientId,
  consumerSecret: config.social.linkedinClientSecret,
  callbackURL: config.social.linkedinClientCallback,
  profileFields: ['id', 'first-name', 'last-name', 'email-address']
}, authCtrl.loginSocial));

passport.serializeUser(function (user, done) { done(null, user) });
passport.deserializeUser(function (err, done) { done(err, user) });

module.exports = passport;
