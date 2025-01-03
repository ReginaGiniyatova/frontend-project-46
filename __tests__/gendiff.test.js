import { readFileSync } from 'node:fs';

import { fileURLToPath } from 'url';
import path from 'path';
import { expect, test } from '@jest/globals';
import parser from '../src/parsers.js';
import gendiff from '../src/index.js';
import formatter from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => {
  const fixturePath = getFixturePath(filename);
  return readFileSync(fixturePath, 'utf-8');
};

test('compare Json files', () => {
  const res = readFile('expectedResult.txt').trim();

  const path1 = `${process.cwd()}/__fixtures__/file1.json`;
  const path2 = `${process.cwd()}/__fixtures__/file2.json`;

  expect(gendiff(path1, path2)).toEqual(res);
});

test('throw an error', () => {
  const res = readFile('expectedResult.txt').trim();
  expect(() => {
    parser(res, 'txt');
  }).toThrow();
});

test('throw style error', () => {
  const res = readFile('expectedResult.txt').trim();
  expect(() => {
    formatter(res, 'txt');
  }).toThrow();
});

test('compare yaml files', () => {
  const res = readFile('expectedResult.txt').trim();

  const path1 = `${process.cwd()}/__fixtures__/file1.yml`;
  const path2 = `${process.cwd()}/__fixtures__/file2.yml`;

  expect(gendiff(path1, path2)).toEqual(res);
});

test('compare plain jsonFiles', () => {
  const res = readFile('expectedResultPlain.txt').trim();

  const path1 = `${process.cwd()}/__fixtures__/file1.json`;
  const path2 = `${process.cwd()}/__fixtures__/file2.json`;

  expect(gendiff(path1, path2, 'plain')).toEqual(res);
});

test('compare plain ymlFiles', () => {
  const res = readFile('expectedResultPlain.txt').trim();

  const path1 = `${process.cwd()}/__fixtures__/file1.yml`;
  const path2 = `${process.cwd()}/__fixtures__/file2.yml`;

  expect(gendiff(path1, path2, 'plain')).toEqual(res);
});
