import fs from 'fs';
import colors from 'colors/safe';
import execa from 'execa';

async function copyFile(filePath, dest) {
  await fs.copyFile(filePath, dest, (error) => {
    if (error) console.log(error);
    return;
  });
}

function color(message) {
  return colors.cyan(message);
}

function deleteDir(localPath) {
  if (fs.existsSync(localPath)) {
    execa('rm', [`-rf ${localPath}`]);
  }
}

export { copyFile, color, deleteDir };
