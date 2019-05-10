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

  if (!options.projectName) {
    questions.push({
      type: 'input',
      name: 'projectName',
      message: 'Please enter a name for your project',
      defaultName: 'new-grimnir',
    });
  }

  questions.push({
    type: 'input',
    name: 'description',
    message: 'Please add a project description',
  });

  questions.push({
    type: 'input',
    name: 'author',
    message: 'Please add a project author',
  });

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

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    function: options.function || 'create',
    projectName: options.projectName || answers.projectName,
    author: options.author || answers.author,
    stack: options.stack || answers.stack,
    template: options.mobx || answers.mobx,
    description: answers.description || 'a quick starter template',
  };
}

export default createProductQuestions;
