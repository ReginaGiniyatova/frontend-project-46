import yaml from 'js-yaml';

const parser = (file, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(file);
    // case 'ini':
    //  return ini.parse(file);
    case 'yml':
      return yaml.load(file);
    default:
      throw new Error(`Unknown format: '${format}'`);
  }
};

export default parser;
