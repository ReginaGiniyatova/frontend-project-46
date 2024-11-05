import { readFileSync } from 'node:fs';
import parser from '../src/parsers.js';
import getDiff from '../src/compare.js';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => {
    const fixturePath = getFixturePath(filename);
    return readFileSync(fixturePath, 'utf-8');
    }


test('compare Json files', () => {
    const res = readFile('expectedResult.txt').trim();
    const json1 = readFile('file1.json').trim();
    const json2 = readFile('file2.json').trim();

    const obj1 = parser(json1, 'json');
    const obj2 = parser(json2, 'json');

    const intralTree = getDiff(obj1, obj2);
    expect(intralTree).toEqual(res);
})