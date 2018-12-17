
import Settings from '../config';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const next = require('next');
const nextRoutes = require('../routes');
const port = parseInt(process.env.PORT, 10) || 3000;
const http2port = 3001;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handler = nextRoutes.getRequestHandler(nextApp);
const mobxReact = require('mobx-react');
const spdy = require('spdy');
const Router = require('./router.js');

nextApp.prepare()
  .then(() => {
    const server = express();
    mobxReact.useStaticRendering(true);
    
    server.use(cookieParser());
    server.get('/', Router.index(nextApp));
    server.get('/:artist', Router.artist(nextApp));
    server.get('*', Router.notFound(nextApp));
    server.use(express.static('public'));

    server.use(handler).listen(port, (err) => {
      if (err) throw err
    });
  });
