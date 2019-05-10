import shell from 'shelljs';
import execa from 'execa';
import fs from 'fs';
import colors from 'colors/safe';
import ncp from 'ncp';
import { promisify } from 'util';

const copy = promisify(ncp);

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
    return copy(templatePath, localPath, {
      clobber: false,
    });
  } else {
    console.log(`The requested template for ${templatePath} wasn’t found.`);
    process.exit(1);
  }
}

function copyConfigFiles(options, { localPath }) {
  // copy config files from config dir to newly created project
  copy(`${__dirname}/../templates/config/.*`, localPath, {
    clobber: false,
  });

  const licenseType = options.license;
  shell.cp('-R', `${__dirname}/../templates/license/${licenseType}`, localPath);
  // replace all variables
  console.log(options);
}

async function createNewProject(options) {
  const dirDetails = await createDir(options);
  await copyTemplates(dirDetails);
  await copyConfigFiles(options, dirDetails);
  // console.log(cloneStatus, 'shit came out');
}

export default createNewProject;
