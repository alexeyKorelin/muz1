import {types, getRoot} from 'mobx-state-tree';
import Image from './image';
import Tag from './tag';
import Stats from './stats';
import Track from './track';
import {firstUpperCase} from 'utils/utils';

const Artist = types
  .model('Artist', {
    mbid: types.identifier,
    name: types.maybeNull(types.string),
    image: types.optional(types.array(Image), []),
    tags: types.optional(types.array(Tag), []),
    stats: types.maybeNull(Stats),
    tracks: types.optional(types.array(Track), []),
    description: types.maybeNull(types.string)
  })
  .views(self => ({
    get url () {
      return `/${self.mbid}`;
    },
    imageSize (size) {
      return self.image.find(v => v.size == size);
    },
    get getTopTags () {
      return self.tags.slice(0, 2).map(v => firstUpperCase(v.name)).join(' | ')
    },
    get isPlaying () {
      return self.tracks.find(v => v.isPlaying) !== undefined;
    }
  }))
  .actions(self => ({
    play () {
      const root = getRoot(self);
      const {player} = root;
      
      if (self.isPlaying) {
        if (player.onPlaying) {
          player.pause();
        } else {
          player.play();
        }
      } else {
        self.tracks[0].toggle();
      }
    }
  }));

export default Artist;
