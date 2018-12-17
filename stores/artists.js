import {types} from 'mobx-state-tree';
import Artist from './models/artist';
import API from 'utils/api';

const ArtistsStore = types
  .model('ArtistsStore', {
    items: types.optional(types.array(types.late(() => Artist)), [])
  })
  .views(self => ({
    get fetched () {
      return self.items && self.items.length > 0;
    }
  }))
  .actions(self => ({
    fetch () {
      API.chart.getTopArtists()
        .then(res => self.fetchSuccess(res));    
    },
    fetchSuccess (items) {
      self.items = items;
    }
  }));

export default ArtistsStore;
