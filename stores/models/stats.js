import {types} from 'mobx-state-tree';

const Stats = types
  .model('Stats', {
    listeners: types.maybeNull(types.string),
    playcount: types.maybeNull(types.string)
  })
  .views(self => ({
    get getStats () {
      return `${self.listeners} listeners` + (self.playcount ? ` • ${self.playcount} plays` : '');
    }
  }))
  .actions(self => ({
  }));

export default Stats;
