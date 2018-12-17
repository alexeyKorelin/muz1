import * as C from './controller';

const index = app => (req, res, next) => {
  C.handleIndex()
    .then(data => {
      app.render(req, res, '/', { initialState: data });
    })
};

const artist = app => (req, res, next) => {
  const {artist} = req.params;
  if (artist) {
    C.handleArtist(artist)
      .then(data => {
        app.render(req, res, '/artist', { initialState: data });
      })
  } else {
    next();
  }
};

const notFound = app => (req, res, next) => {
  C.handleIndex()
    .then(data => {
      app.render(req, res, '/not_found', { initialState: data });
    })
};

module.exports = {
  index,
  artist,
  notFound
};
