import inquirer from 'inquirer';

async function createProductQuestions(options) {
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

  if (!options.stack) {
    questions.push({
      type: 'list',
      name: 'stack',
      message: 'Please choose which stack to use?',
      choices: ['react', 'nextjs', 'gatsby'],
      defaultStack: defaultStack,
    });
  }

  // add more state mangement services and move to list [redux, unstate]
  if (!options.template) {
    questions.push({
      type: 'confirm',
      name: 'mobx',
      message: 'Do you want Mobx included?',
      defaultStack: false,
    });
  }

  questions.push({
    type: 'input',
    name: 'description',
    message: 'Add a project description',
  });

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    stack: options.stack || answers.stack,
    template: options.mobx || answers.mobx,
    description: answers.description || 'a quick starter template',
  };
}

export default createProductQuestions;
