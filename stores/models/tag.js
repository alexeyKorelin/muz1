import {types} from 'mobx-state-tree';

const Tag = types
  .model('Tag', {
    name: types.maybeNull(types.string)
  })
  .views(self => ({
  }))
  .actions(self => ({
  }));

export default Tag;
