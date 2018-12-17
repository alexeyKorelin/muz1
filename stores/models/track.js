import {types, getRoot, getParent} from 'mobx-state-tree';

const Track = types
  .model('Track', {
    name: types.maybeNull(types.string),
    url:  types.maybeNull(types.string)
  })
  .views(self => ({
    get isPlaying () {
      const root = getRoot(self);
      const {artist, track} = root.player;
      
      return (
        artist && 
        track &&
        track.name == self.name && 
        artist.mbid == self.artist.mbid
      );
    },
    get artist () {
      return getParent(getParent(self));
    }
  }))
  .actions(self => ({
    toggle () {
      const root = getRoot(self);
      const {player} = root;
      
      if (self.isPlaying) {
        if (player.onPlaying) {
          player.pause();
        } else {
          player.play();
        }
      } else {
        player.setTrack(
          {name: self.name, mbid: self.mbid, url: self.url}, 
          {mbid: self.artist.mbid, name: self.artist.name}
        );
      }
    }
  }));

export default Track;
