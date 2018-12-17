import {types, applySnapshot} from 'mobx-state-tree';
import ArtistsStore from './artists';
import AlbumsStore from './albums';
import ArtistStore from './artist';
import PlayerStore from './player';

let store = null;

const AppStore = types
  .model('AppStore', {
    artists: types.maybeNull(ArtistsStore),
    albums: types.maybeNull(AlbumsStore),
    artist: types.maybeNull(ArtistStore),
    player: types.maybeNull(PlayerStore)
  })
  .preProcessSnapshot(snapshot => {
    const newSnapshot = {...snapshot};

    if (!newSnapshot.artists) newSnapshot.artists = ArtistsStore.create();
    if (!newSnapshot.albums) newSnapshot.albums = AlbumsStore.create();
    if (!newSnapshot.artist) newSnapshot.artist = ArtistStore.create();
    if (!newSnapshot.player) newSnapshot.player = PlayerStore.create();

    return newSnapshot;
  })
  .views(self => ({
  }));

const createStore = () => {
  return AppStore.create({
    artists: ArtistsStore.create(),
    albums: AlbumsStore.create(),
    artist: ArtistStore.create(),
    player: PlayerStore.create()
  })
}

export const initStore = (isServer = false, snapshot = null, env = null) => {
  if (isServer || store === null) {
    store = createStore();
  }
  if (snapshot) {
    applySnapshot(store, snapshot);
  }
  return {...store, isServer, env};
}
