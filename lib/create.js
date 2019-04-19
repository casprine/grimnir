const prompt = require('prompt');
const shell = require('shelljs');
const fs = require('fs');
const colors = require('colors/safe');

prompt.message = colors.green('Replace');

module.exports = (args, options, logger) => {
  console.log({
    args: args,
    options: options,
  });
};
