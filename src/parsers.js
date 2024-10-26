
const parser = (file, format) => {
    switch (format) {
        case 'json': 
            return JSON.parse(file)
            break;
        case 'ini':
            return init.parse(file)
            break;
        case 'yml':
            return yml.safeLoad(file)
            break;
    } 
}

export default parser;

