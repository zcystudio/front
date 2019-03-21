const next = require('next');
const app = require('./server/app');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare()
  .then(() => {
    app.get('*', (req, res) => {
      handle(req, res);
    });
    app.listen(port, (err) => {
      if (err) {
        throw err;
      }
    });
  });
