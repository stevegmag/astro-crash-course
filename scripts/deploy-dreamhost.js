import { exec } from 'child_process';
import { promisify } from 'util';
import deployConfig from '../deploy.config.js';

const execAsync = promisify(exec);

const { host, user, path } = deployConfig.dreamhost.ssh;
const localPath = './dist/';
const remotePath = `${user}@${host}:${path}`;

async function deploy() {
  try {
    console.log('Starting deployment to Dreamhost via SSH...');
    
    const rsyncCommand = [
      'rsync',
      '-avz',           // archive mode, verbose, compress
      '--delete',       // delete extraneous files on receiver
      '-e ssh',         // use ssh for transfer
      localPath,        // source
      remotePath        // destination
    ].join(' ');

    const { stdout, stderr } = await execAsync(rsyncCommand);
    
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
    
    console.log('Deployment completed successfully!');
  } catch (error) {
    console.error('Deployment failed:', error);
    process.exit(1);
  }
}

deploy();
