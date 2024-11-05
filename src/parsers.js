
const parser = (file, format) => {
    switch (format) {
        case 'json': 
            return JSON.parse(file)
        case 'ini':
            return ini.parse(file)
        case 'yml':
            return yml.safeLoad(file)
        default:
            throw new Error(`Unknown format: '${format}'`);
    } 
}

export default parser;

