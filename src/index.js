import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';
import parser from './parsers.js';
import getDiff from './compare.js';

const gendiff = (filepath1, filepath2) => {
  filepath1 = path.resolve(cwd(), filepath1);
  filepath2 = path.resolve(cwd(), filepath2);

  const json1 = readFileSync(filepath1, 'utf-8');
  const json2 = readFileSync(filepath2, 'utf-8');

  const firstFileFormat = path.extname(filepath1).slice(1);
  const secondFileFormat = path.extname(filepath2).slice(1);

  const obj1 = parser(json1, firstFileFormat);
  const obj2 = parser(json2, secondFileFormat);

  const intralTree = getDiff(obj1, obj2);
  return intralTree;
};

export default gendiff;
