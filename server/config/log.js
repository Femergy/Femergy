const log4js = require('log4js')
const { VALUES } = require('./constants')

log4js.configure({
  appenders: {
    console: { type: 'stdout', layout: { type: 'colored' } },
    file: { type: 'file', filename: 'server.log', maxLogSize: VALUES.MB, backups: 3, compress: true }
  },
  categories: {
    default: { appenders: ['console'], level: 'all' },
    errorProd: { appenders: ['file'], level: 'error' },
    errorDev: { appenders: ['console'], level: 'error' },
  },
  replaceConsole: false
})

module.exports = {
  log: log4js.getLogger(),
  logErrorProd: log4js.getLogger('errorProd'),
  logErrorDev: log4js.getLogger('errorDev'),
}
