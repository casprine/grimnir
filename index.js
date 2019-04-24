#!/usr/bin/env node

const prog = require('caporal');
const createCmd = require('./lib/create');

prog
  .version('1.0.0')
  .command('new', 'create a new application')
  .argument('<name>', 'name of application')
  .argument('<template-name>', 'template to use')
  .option('--variant <variant>', 'Which <variant> of the template is going to be created')
  .action(createCmd);

prog.parse(process.argv);
