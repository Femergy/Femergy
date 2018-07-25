const _ = require('lodash')
const { ERRORS } = require('../config/constants')

module.exports = {
  errorBadRequest,
  errorUnauthorized,
  errorForbidden,
  errorNotFound,
  errorInternalServerError,
  getRandomString,
  getSkipLimit,
  getPriceSumDecimal,
}

function errorBadRequest(msg) {
  const err = new Error(msg || ERRORS.ALREADY_EXISTS)
  err.status = 400
  throw err
}

function errorUnauthorized(msg) {
  const err = new Error(msg || ERRORS.UNAUTHORIZED)
  err.status = 401
  throw err
}

function errorForbidden(msg) {
  const err = new Error(msg || ERRORS.FORBIDDEN)
  err.status = 403
  throw err
}

function errorNotFound(msg) {
  const err = new Error(msg || ERRORS.NOT_FOUND)
  err.status = 404
  throw err
}

function errorInternalServerError(msg) {
  const err = new Error(msg || ERRORS.INTERNAL_SERVER_ERROR)
  err.status = 500
  throw err
}

function getRandomString(n) {
  return [...Array(n)].map(() => Math.random().toString(36)[3]).join('')
}

function getSkipLimit(data) {
  const limit = +data.limit
  return [+data.skip || 0, limit > 0 && limit < 10 ? limit : 10]
}

function getPriceSumDecimal(data) {
 return  _.sumBy(data, item => item.deletedAt ? 0 : +item.price.toString()).toString()
}
