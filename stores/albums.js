import {types} from 'mobx-state-tree';
import Artist from './models/artist';
import API from 'utils/api';

const AlbumsStore = types
  .model('AlbumsStore', {
    items: types.optional(types.array(types.late(() => Artist)), [])
  })
  .views(self => ({
    get fetched () {
      return self.items && self.items.length > 0;
    }
  }))
  .actions(self => ({
    fetch () {
      API.chart.getAlbums()
        .then(res => self.fetchSuccess(res));    
    },
    fetchSuccess (items) {
      self.items = items;
    }
  }));

export default AlbumsStore;
