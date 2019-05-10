import arg from 'arg';
import createProductQuestions from './lib/questions';
import createNewProject from './lib/create';

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

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await createProductQuestions(options);
  await createNewProject(options);
  console.log(JSON.stringify(options, null, 2));
}
