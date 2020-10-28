var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var users = require('./controllers/user');
var sedes = require('./controllers/sedes');
var ciudad = require('./controllers/ciudad');
const log4js = require('log4js');
const resource = require('./resource/resource.json');
log4js.configure(resource.configLog4js);
const log = log4js.getLogger('app');

var app = express();
app.use(express.json());
app.use(users);
app.use(sedes);
app.use(ciudad);

log.debug('api - vass iniciada');
module.exports = app;
