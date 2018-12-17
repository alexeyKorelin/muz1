import {types, getRoot} from 'mobx-state-tree';
import Sound from 'react-sound';
import Track from './models/track';
import Artist from './models/artist';

const PlayerStore = types
  .model('PlayerStore', {
    playStatus: types.optional(types.string, Sound.status.STOPPED),
    track: types.maybeNull(Track),
    artist: types.maybeNull(Artist)
  })
  .views(self => ({
    get onPause () {
      return self.playStatus == Sound.status.PAUSED;
    },
    get onPlaying () {
      return self.playStatus == Sound.status.PLAYING;
    }
  }))
  .actions(self => ({
    setTrack (track, artist) {
      if (!self.track) self.track = Track.create();
      self.artist = Artist.create(artist);

      self.track = {...track, url: self.track.url == 'test.mp3' ? 'test1.mp3' : 'test.mp3'}; // для теста!
      self.play();
    },
    play () {
      self.playStatus = Sound.status.PLAYING;
    },
    pause () {
      self.playStatus = Sound.status.PAUSED;
    },
    stop () {
      self.playStatus = Sound.status.STOPPED;
    }
  }));

export default PlayerStore;
