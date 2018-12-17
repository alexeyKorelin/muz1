import {types} from 'mobx-state-tree';

const Image = types
  .model('Image', {
    url: types.maybeNull(types.string),
    size: types.maybeNull(types.string)
  })
  .views(self => ({
  }))
  .actions(self => ({
  }));

export default Image;
