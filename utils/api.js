import req from './request';
import Settings from 'config';
import queryString from 'query-string';
import {catchErrors} from 'utils/utils';

const params = {
  api_key: Settings.api.api_key, 
  format: 'json'
};

const API = {
  artist: {
    getArtist (mbid) {
      return Promise.all(
        [API.artist.getInfo(mbid), API.artist.getTopTracks(mbid)]
          .map(catchErrors)
      ).then(values => (values[0] && values[1]) ? {...values[0], ...values[1]} : null);
    },
    getInfo (mbid, options = {}) {
      return req(
        `${Settings.api.path}?${queryString.stringify({...params, method: 'artist.getinfo', mbid: mbid})}`, 
        options
      ).then(res => (
        res.artist ? 
          {
            mbid: res.artist.mbid,
            name: res.artist.name,
            image: res.artist.image.map(v => ({
              url: v['#text'],
              size: v.size
            })),
            tags: res.artist.tags.tag.map(v => ({name: v.name})),
            stats: {
              listeners: res.artist.stats.listeners,
              playcount: res.artist.stats.playcount
            },
            description: res.artist.bio.summary
          }
        : null
      ));
    },
    getTopTracks (mbid, options = {}) {
      return req(
        `${Settings.api.path}?${queryString.stringify({...params, method: 'artist.gettoptracks', limit: 10, mbid: mbid})}`, 
        options
      ).then(res => (res.toptracks && res.toptracks.track) ? {tracks: res.toptracks.track} : null);
    }
  },
  chart: { 
    getTopArtists (page = 1, limit = 5, options = {}) {
      return req(
        `${Settings.api.path}?${queryString.stringify({...params, method: 'chart.gettopartists', page: page, limit: limit})}`, 
        options
      ).then(res => {
        return Promise.all(
          res.artists.artist
            .map(v => API.artist.getArtist(v.mbid))
            .map(catchErrors)
        )        
      }).then(res => res.filter(v => v));
    },    
    getAlbums (options = {}) {
      return API.chart.getTopArtists(3, 5).then(res => res.slice(-10));
    }
  }
}

export default API;
