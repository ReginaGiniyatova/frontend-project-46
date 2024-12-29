import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';
import parser from './parsers.js';
import getDiff from './compare.js';
import format from './formatters/index.js';

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const path1 = path.resolve(cwd(), filepath1);
  const path2 = path.resolve(cwd(), filepath2);

  const json1 = readFileSync(path1, 'utf-8');
  const json2 = readFileSync(path2, 'utf-8');

  const firstFileFormat = path.extname(path1).slice(1);
  const secondFileFormat = path.extname(path2).slice(1);

  const obj1 = parser(json1, firstFileFormat);
  const obj2 = parser(json2, secondFileFormat);

  const intralTree = getDiff(obj1, obj2);
  const result = format(intralTree, formatName);
  return result;
};

export default gendiff;
