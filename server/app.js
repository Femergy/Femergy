const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('./routes');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('./config/config');
const passport = require('./config/passport');
const log4js = require('log4js');

const { log, logErrorProd, logErrorDev } = require('./config/log');

const app = express();

app.use(log4js.connectLogger(log, { level: 'auto', format: ':method :url :status :response-time' }));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/xwww-form-urlencoded
app.use(cookieParser());
app.use(helmet()); // for additional secure headers
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true })); // for twitter
app.use(passport.initialize());
app.use(favicon(path.join(__dirname, 'public-api', 'favicon.ico')));

app.use(express.static('public')); // Allow access to a folder
app.use(express.static('public-api')); // Allow access to a folder

app.use('/', routes);
app.use('/*', express.static('public'));
app.use('/api/*', express.static('public-api'));
app.get('/*', (req, res) => res.sendFile(path.join(`${__dirname  }../public`))); // redirect for react entry point

app.use((req, res) => res.sendStatus(404));
app.use((err, req, res, next) => {
  if (config.isProd) logErrorProd.error(`${err.message}\n ${req.method}\n ${req.url}\n ${JSON.stringify(req.rawHeaders)}\n ${JSON.stringify(err.stack)}`);
  if (!config.isProd) logErrorDev.error(`${err.message}\n ${req.method}\n ${req.url}\n ${JSON.stringify(req.rawHeaders)}\n`, err);
  res.status(err.status || 500);
  res.json({
 success: false, message: err.message, name: err.name, errors: err.errors
});
});

module.exports = app;
