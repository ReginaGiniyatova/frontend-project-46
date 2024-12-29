import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  let keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort();
  const ast = keys.map((key) => {
    if (!_.has(obj1, key)) {
      return { key, state: 'added', value: obj2[key] };
    }
    if (!_.has(obj2, key)) {
      return { key, state: 'deleted', value: obj1[key] };
    }

    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      const children = getDiff(obj1[key], obj2[key]);
      return { key, state: 'nested', children };
    }

    if (obj1[key] === obj2[key]) {
      return { key, state: 'unchanged', value: obj2[key] };
    }

    return {
      key,
      state: 'changed',
      oldValue: obj1[key],
      newValue: obj2[key],
    };
  });
  return ast;
};

export default getDiff;
