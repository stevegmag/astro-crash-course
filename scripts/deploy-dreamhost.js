import { exec } from 'child_process';
import { promisify } from 'util';
import deployConfig from '../deploy.config.js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory path of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env file
dotenv.config({ path: join(dirname(__dirname), '.env') });

const execAsync = promisify(exec);

const { host, path } = deployConfig.dreamhost.ssh;
const sshUser = process.env.DREAMHOST_SSH_USER;

if (!sshUser) {
  console.error('Error: DREAMHOST_SSH_USER environment variable is not set');
  process.exit(1);
}

const localPath = './dist/';
const remotePath = `${sshUser}@${host}:${path}/`;

async function deploy() {
  try {
    console.log('Starting deployment to Dreamhost via SSH...');
    console.log(`Deploying from ${localPath} to ${remotePath}`);
    
    const rsyncCommand = [
      'rsync',
      '-avz',           // archive mode, verbose, compress
      '--delete',       // delete extraneous files on receiver
      '-e ssh',         // use ssh for transfer
      localPath,        // source
      remotePath        // destination
    ].join(' ');

    console.log(`Executing command: ${rsyncCommand}`);
    const { stdout, stderr } = await execAsync(rsyncCommand);
    
    if (stdout) console.log('Output:', stdout);
    if (stderr) console.error('Errors:', stderr);
    
    console.log('Deployment completed successfully!');
  } catch (error) {
    console.error('Deployment failed:', error);
    process.exit(1);
  }
}

deploy();
