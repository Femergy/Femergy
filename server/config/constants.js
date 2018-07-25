const Joi = require('joi');

module.exports.ERRORS = {
  SOMETHING_WRONG: 'Something wrong',
  ALREADY_EXISTS: 'Already exists',
  FORBIDDEN: 'Forbidden',
  NOT_FOUND: 'Not found',
  UNAUTHORIZED: 'Unauthorized',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  NO_PERMISSIONS: 'You do not have permissions',
  NOT_FOUND_USER: 'User not found',
  NOT_CONFIRM_EMAIL: 'User didn\'t confirm email',
  INVALID_EMAIL: 'Invalid email',
  INVALID_TOKEN: 'Invalid token',
  INVALID_PASSWORD: 'Invalid password',
  INVALID_OLD_PASSWORD: 'Invalid old password',
  INVALID_EMAIL_OR_PASSWORD: 'Invalid email or password',
  EXPIRED_PASSWORD: 'Temporary password timeout expired',
};

module.exports.MESSAGES = {
  PASSWORD_CHANGED: 'Password successfully changed',
};

module.exports.ACCOUNT_TYPES = {
  EMAIL: 'email',
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  TWITTER: 'twitter',
  LINKEDIN: 'linkedin',
};

module.exports.ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  ANY : ['user', 'admin']
};

module.exports.BSON_TYPES = { // https://docs.mongodb.com/manual/reference/operator/query/type/
  DOUBLE: 1,
  STRING: 2,
  OBJECT: 3,
  ARRAY: 4,
  BINDATA: 5,
  UNDEFINED: 6,
  OBJECTID: 7,
  BOOL: 8,
  DATE: 9,
  NULL: 10,
  REGEX: 11,
  DBPOINTER: 12,
  JAVASCRIPT: 13,
  SYMBOL: 14,
  JAVASCRIPTWITHSCOPE: 15,
  INT: 16,
  TIMESTAMP: 17,
  LONG: 18,
  DECIMAL: 19,
  MINKEY: -1,
  MAXKEY: 127,
};

const EXCLUDE = {
  USER: '-password -tokens -passwordReset -createdAt -updatedAt -__v',
};
module.exports.EXCLUDE = EXCLUDE;

module.exports.POPULATE = {
  USER: [
    { path: 'hirer' },
    { path: 'specialist' },
  ],
};

module.exports.VALUES = {
  DISTANCE_M: 5000,
  DISTANCE_EATH_M: 12742000,
  HOUR_S: 86400000,
  MB: 1048576,
};

module.exports.JOI = {
  FILE: Joi.any().forbidden().error(err => 'expected file'),
  OBJECTID: Joi.string().regex(/^[0-9a-fA-F]{24}$/, 'expected objectId'),
  PAGINATION: Joi.number().min(1).max(100),
};

module.exports.SLUG_LENGTH = 5;
