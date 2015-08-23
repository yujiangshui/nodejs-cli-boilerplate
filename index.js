#!/usr/bin/env node

var program = require('commander');
var pkg = require('./package.json');
var foo = require('./actions/foo');


program
  .version(pkg.version)
  .option('-b, --bar [num]', 'Bar num')
  .parse(process.argv);


if (program.bar) {
  console.log('Bar num is ', program.bar);
}


program
  .command('foo <num>')
  .description('Foo num')
  .action(foo);


program.parse(process.argv);