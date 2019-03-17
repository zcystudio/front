const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // morgan
  server.use(morgan('tiny'));
  // cookie-parser
  server.use(cookieParser());
  // use the session middleware
  server.use(session({ secret: 'password', cookie: { masAge: 60000 } }));
  // compress responses
  server.use(compression());
  server.get('*', (req, res) => {
    handle(req, res);
  });
  server.listen(3000, (err) => {
    if (err) {
      throw err;
    }
  });
});
