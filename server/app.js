const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const compression = require('compression');

const express = require('express');

const sessionOptions = {
  // TODO: get this from env at production mode
  secret: 'password',
  cookie: {
    // 24 h
    maxAge: 3600 * 1000 * 24,
  },
  // The default value for resave is true, but it may create race conditions
  // where a client makes two parallel requests to your server and changes
  // made to the session in one request may get overwritten when the other
  // request ends, even if it made no changes
  resave: false,
  saveUninitialized: true,
  unset: 'destroy',
};

const app = express();

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// morgan
app.use(morgan('tiny'));
// cookie-parser
app.use(cookieParser());
// use the session middleware
app.use(session(sessionOptions));
// compress responses
app.use(compression());


module.exports = app;
