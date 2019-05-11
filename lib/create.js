import execa from 'execa';
import fs from 'fs';
import colors from 'colors/safe';
import { promisify } from 'util';
import shell from 'shelljs';

async function createDir(options) {
  const stack = options.stack || 'react';
  const variant = options.template;
  const projectName = options.projectName;
  const localPath = `${process.cwd()}/${projectName.toLowerCase()}`;
  const templatePath = `${__dirname}/../templates/${stack}/${variant ? 'default' : 'mobx'}`;

  /*
   * check if folder name already exist
   * else create a new one
   */
  if (fs.existsSync(localPath)) {
    console.log(`Sorry but ${colors.green(projectName)} is already a directory name ☹️\n`);
    console.log(`Either try using a new directory name, or remove the directory.`);
    process.exit(1);
  } else {
    execa('mkdir', [localPath]);
    execa('cd', [localPath]);
  }

  return {
    templatePath,
    localPath,
  };
}

async function copyTemplates({ templatePath, localPath }) {
  if (fs.existsSync(templatePath)) {
    shell.cp('-R', `${templatePath}/*`, localPath);
  } else {
    console.log(`The requested template for ${templatePath} wasn’t found.`);
    process.exit(1);
  }
}

function copyConfigFiles(options, { localPath }) {
  // copy config files from config dir to newly created project
  shell.cp('-R', `${__dirname}/../templates/config/`, localPath);
}

async function createNewProject(options) {
  const dirDetails = await createDir(options);
  await copyTemplates(dirDetails);
  await copyConfigFiles(options, dirDetails);
  // console.log(cloneStatus, 'shit came out');
}

export default createNewProject;

// // Ask for variable values
// prompt.start().get(variables, (err, result) => {
//   // Remove MIT License file if another is selected
//   // if (result.license !== 'MIT') {
//   //   shell.rm(`${localPath}/LICENSE`);
//   // }

//   // Replace variable values in all files
//   shell.ls('-Rl', '.').forEach(entry => {
//     if (entry.isFile()) {
//       // Replace '[VARIABLE]` with the corresponding variable value from the prompt
//       variables.forEach(variable => {
//         shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, result[variable], entry.name);
//       });

//       // Insert current year in files
//       shell.sed('-i', '\\[YEAR\\]', new Date().getFullYear(), entry.name);
//     }
//   });

//   logger.info(`Project ${args.name} created successfully 😃`);
// });
