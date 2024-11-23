import _ from 'lodash';

const makeIndent = (stepNumber = 0, marker = null) => {
    const startStep = 4;
    const actualNumber = ' '.repeat(stepNumber * startStep);
    return marker === null ? actualNumber : `${actualNumber.slice(2)}${marker} `
}

const formatValue = (values, depth) => {
    if (_.isObject(values)) {
        const objectIndent = makeIndent(depth + 1);
        const objectContent = Object.entries(values)
        .map(([key, value]) => `${objectIndent}${key}: ${formatValue(value, depth + 1)}`)
        .join('\n');
        return `{\n${objectContent}\n${makeIndent(depth)}}`;
    }
    return `${values}`;
};

const renderStylish = (result) => {
    const iter = (node, depth) => {
        if(node.state === 'added') {
            const indent = makeIndent(depth, '+')
            const formattedValue = formatValue(node.value, depth)
                return `${indent}${node.key}: ${formattedValue}`
        }
        if(node.state === 'deleted') {
            const indent = makeIndent(depth, '-')
            const formattedValue = formatValue(node.value, depth)
                return `${indent}${node.key}: ${formattedValue}`
        }
        if(node.state === 'unchanged') {
            const indent = makeIndent(depth)
            const formattedValue = formatValue(node.value, depth)
                return `${indent}${node.key}: ${formattedValue}`
        }
        if(node.state === 'changed') {
            const deleteIndent = makeIndent(depth, '-');
            const addedIndent = makeIndent(depth, '+');
            const formattedNewValue = formatValue(node.newValue, depth);
            const formattedOldValue = formatValue(node.oldValue, depth);
                return [`${deleteIndent}${node.key}: ${formattedOldValue}`, `${addedIndent}${node.key}: ${formattedNewValue}`,];
        }
    const indent = makeIndent(depth);
    const innerTree = node.children.flatMap((children) => iter(children, depth + 1)).join('\n');
    return `${indent}${node.key}: {\n${innerTree}\n${indent}}`;
    }
    const flatted = result.flatMap((node) => iter(node, 1)).join('\n')
        return `{\n${flatted}\n${makeIndent()}}`

}

export default renderStylish;