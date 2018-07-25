const mongoose = require('mongoose')
const config = require('./config')
const debug = require('debug')('femergy:db')

let uri = 'mongodb://' + config.mongodb.uri
if (config.mongodb.options.user && config.mongodb.options.pass) {
  uri = `mongodb://${encodeURIComponent(config.mongodb.options.user)}:${encodeURIComponent(config.mongodb.options.pass)}@${config.mongodb.uri}`;
}
mongoose.connect(uri)
mongoose.Promise = require('bluebird')
if (!config.isProd) mongoose.set('debug', true)
mongoose.connection.on('connected', () => { debug(`Mongoose default connection open to ${uri}`) })
mongoose.connection.on('error', (err) => { debug(`Mongoose default connection error: ${err}`) })
mongoose.connection.on('disconnected', () => { debug('Mongoose default connection disconnected') })

module.exports = mongoose
