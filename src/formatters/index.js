import stylish from './stylish.js';


const formatter = (result, formatStyle) => {
    switch (formatStyle) {
        case 'stylish':
            return stylish(result)
        case 'plain':
            return plain(result)
        case 'json':
            return JSON.stringify(result)
        default:
            throw new Error(`Incorrect fofmat: ${formatStyle}`);
    }
}

export default formatter;