#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();


program
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')
    .option('--help', 'output usage information')
    .action(() => {
    console.log('hello');
});

program.parse();