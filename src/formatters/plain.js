import _ from 'lodash';

const getVarFormat = (value) => {
  if (_.isObject(value)) return '[complex value]';
  if (_.isString(value)) return `'${value}'`;

  return value;
};

const formatText = (state, path, values) => {
  const [oldValue, newValue] = values;
  const oldValue1 = getVarFormat(oldValue);
  const newValue2 = getVarFormat(newValue);

  switch (state) {
    case 'added':
      return `Property '${path}' was added with value: ${oldValue1}`;
    case 'deleted':
      return `Property '${path}' was removed`;
    case 'changed':
      return `Property '${path}' was updated. From ${oldValue1} to ${newValue2}`;
    default: return '';
  }
};

const formatValue = (state, values, depth) => {
  const path = depth.join('.');

  return formatText(state, path, values);
};

const plain = (result) => {
  const iter = (node, depth = []) => {
    const path = depth.concat(node.key);
    const values = node.state === 'changed' ? [node.oldValue, node.newValue] : [node.value];

    if (node.state !== 'nested') return formatValue(node.state, values, path);

    const innerTree = node.children.filter((none) => none.state !== 'unchanged').flatMap((children) => iter(children, path));
    return `${innerTree.join('\n')}`;
  };

  const flatted = result.filter((none) => none.state !== 'unchanged').flatMap((node) => iter(node));
  return `${flatted.join('\n')}`;
};

export default plain;
