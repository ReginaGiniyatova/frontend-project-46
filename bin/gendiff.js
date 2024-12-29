#!/usr/bin/env node
import commander from 'commander';
import gendiff from '../index.js';

commander
  .version('0.0.1')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .action((filepath1, filepath2) => {
    const difference = gendiff(filepath1, filepath2, commander.format);
    console.log(difference);
  });

commander.parse(process.argv);
