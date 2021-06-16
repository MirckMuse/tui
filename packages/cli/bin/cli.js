#!/usr/bin/env node
const commander = require('commander')
const packages = require('../package.json')

commander.version(packages.version)

commander
  .command('init <name>')
  .description('init a UI project based vue and tailwindcss')
  .action(require('../lib/init'))

commander
  .command('component <name>')
  .description('create a component to packages')
  .action(require('../lib/component'))

commander.parse(process.argv)