import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';

const gendiff = (filepath1, filepath2) => {
    filepath1 = path.resolve(cwd(), filepath1);
    filepath2 = path.resolve(cwd(), filepath2);

    const json1 = readFileSync(filepath1, 'utf-8');
    const json2 = readFileSync(filepath2, 'utf-8');

    const obj1 = JSON.parse(json1);
    const obj2 = JSON.parse(json2);

    console.log(obj1, obj2);
};

export default gendiff;

