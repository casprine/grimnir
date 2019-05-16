import execa from 'execa';
import fs from 'fs';
import { promisify } from 'util';
import ncp from 'ncp';
import shell from 'shelljs';
import Listr from 'listr';
import { projectInstall } from 'pkg-install';
import { copyFile, color } from '../util';

const copy = promisify(ncp);

/*
  Note: Probably refactor
  currently inplementation uses both shelljs and execa for terminal stuff
  shell for copying and execa for dir creating and renaming 
*/

async function createDir(options) {
  const stack = options.stack || 'react';
  const variant = options.template;
  const projectName = options.projectName;
  const localPath = `${process.cwd()}/${projectName.toLowerCase()}`;
  const templatePath = `${__dirname}/../templates/${stack}/${variant ? 'mobx' : 'default'}`;

  /*
   * check if folder name already exist
   * else create a new one
   */
  if (fs.existsSync(localPath)) {
    console.error(`Sorry but ${color(projectName)} is already a directory name ☹️\n`);
    console.error(`Either try using a new directory name, or remove the directory.`);
    process.exit(1);
  } else {
    execa('mkdir', [localPath]);
    execa('cd', [localPath]);
  }

  return {
    templatePath,
    localPath,
    projectName
  };
}

async function copyTemplates({ templatePath, localPath }) {
  if (fs.existsSync(templatePath)) {
    return copy(templatePath, localPath, {
      clobber: false
    });
  } else {
    console.error(`The requested template for ${templatePath} wasn’t found.`);
    process.exit(1);
  }
}

async function copyConfigFiles(options, { localPath }) {
  // copy config files from config dir to newly created project
  const configDir = `${__dirname}/../templates/config/`;
  const licenseDir = `${__dirname}/../templates/license/${options.license}`;

  // copy config files using ncp
  await copy(configDir, localPath, {
    clobber: false
  });

  // copy and rename license using node.fs
  copyFile(licenseDir, `${localPath}/LICENSE`, (error) => {
    if (error) console.log(error);
    return;
  });

  // Remove variables file from the current directory
  if (fs.existsSync(`${localPath}/_variables.js`)) {
    execa('rm', [`${localPath}/_variables.js`]);
  }

  // use shelljs to loop over every file and rename with variables
  const variables = require(`${configDir}/_variables.js`);
  const result = {
    name: options.projectName,
    version: '1.0.0',
    description: options.description,
    author: options.author,
    license: options.license
  };

  shell.cd(localPath);
  shell.ls('-Rl', '.').forEach((entry) => {
    if (entry.isFile()) {
      // Replace '[VARIABLE]` with the corresponding variable value from the prompt
      variables.forEach((variable) => {
        shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, result[variable], entry.name);
      });

      // Insert current year in files
      shell.sed('-i', '\\[YEAR\\]', new Date().getFullYear(), entry.name);
    }
  });
}

async function initGit({ localPath }) {
  const result = await execa('git', ['init'], {
    cwd: localPath
  });
  if (result.failed) {
    return Promise.reject(new Error('Failed to initialize git'));
  }
  return;
}

async function createNewProject(options) {
  const dirDetails = await createDir(options);

  const tasks = new Listr([
    {
      title: 'Creating project files',
      task: () => copyTemplates(dirDetails)
    },
    {
      title: 'Creating config files',
      task: () => copyConfigFiles(options, dirDetails)
    },
    {
      title: 'Initialize git',
      task: () => initGit(options)
    },
    {
      title: 'Installing dependencies ',
      task: () =>
        projectInstall({
          prefer: 'yarn',
          cwd: dirDetails.localPath
        })
    }
  ]);

  await tasks.run();
  console.log(`
Success! Created testing at ${dirDetails.localPath}
Inside that directory, you can run several commands:

${color('yarn start')}
    Starts the development server.

  
${color('yarn build')}
    Bundles the app into static files for production.

  ${color('yarn test')}
    Starts the test runner.

I suggest that you begin by typing:

  ${color('cd')} ${dirDetails.projectName}
  ${color('yarn start')}

🔥 Happy hacking!
  `);
  return true;
}

export default createNewProject;
