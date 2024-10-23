#!/usr/bin/env node
import commander from 'commander';

commander
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1');

commander.parse(process.argv);