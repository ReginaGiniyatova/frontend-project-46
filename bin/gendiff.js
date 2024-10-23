#!/usr/bin/env node
import commander from 'commander';

commander
    .version('0.0.1')
    .option('-f, --format [type]', 'output format')
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')

commander.parse(process.argv);