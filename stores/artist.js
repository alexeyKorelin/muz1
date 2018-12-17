import {types} from 'mobx-state-tree';
import Artist from './models/artist';
import API from 'utils/api';
import {Router} from 'routes';

const ArtistStore = types
  .model('ArtistStore', {
    current: types.maybeNull(Artist)
  })
  .views(self => ({
  }))
  .actions(self => ({
    goArtist (mbid) {
      self.fetch(mbid).then(res => { Router.pushRoute(`/${mbid}`); });
    },
    fetch (mbid) {
      return API.artist.getArtist(mbid)
        .then(res => self.fetchSuccess(res));    
    },
    fetchSuccess (current) {
      self.current = current;
    }
  }))
  .actions(self => ({
  }));

export default ArtistStore;
