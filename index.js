import arg from 'arg';
import { async } from 'rxjs/internal/scheduler/async';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '-V': Boolean,
      '--version': Boolean,
    },
    { argv: rawArgs.slice(2) },
  );

  return {
    version: args['-v'] || false,
    function: args._[0], // get specific function to run
    projectName: args._[1], // get project name and create folder with it
    stack: args._[2],
  };
}

async function promptForMissingOptions() {
  const defaultTemplate = 'default';
  const defaultStack = 'react';

  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
      stack: options.stack || defaultStack,
    };
  }

  const questions = [];

  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'stack',
      message: 'Please choose which stack to use',
      choices: ['React', 'Nextjs', 'Gatsby'],
      defaultStack: defaultStack,
    });
  }

  // add more state mangement services and move to list [redux, unstate]
  if (!options.template) {
    question.push({
      type: 'confirm',
      name: 'git',
      message: 'Do you want Mobx include ?',
      default: false,
    });
  }
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  console.log(JSON.stringify(options, null, 2));
}
