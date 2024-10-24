#!/usr/bin/env node
import commander from 'commander';
import gendiff from '../index.js';
import { readFileSync } from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';

commander
    .version('0.0.1')
    .option('-f, --format [type]', 'output format')
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .action((filepath1, filepath2) => {
        const difference = gendiff(filepath1, filepath2)
        filepath1 = path.resolve(cwd(), filepath1);
        filepath2 = path.resolve(cwd(), filepath2);

        const json1 = readFileSync(filepath1);
        const json2 = readFileSync(filepath2);

        console.log(`${json1}, ${json2}`);
    })

commander.parse(process.argv);