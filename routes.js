const routes = module.exports = require('next-routes')();

routes
  .add('/', 'index')
  .add('/:artist', 'artist')
