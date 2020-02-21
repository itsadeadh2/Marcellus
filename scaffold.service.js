const shell = require('shelljs');
const chalk = require('chalk');
const { createFile } = require('./helper.service');
const { createResource } = require('./resource.service');

const createApp = async (name, description) => {       
    await createPackageJson(name, description);
    await createDirectories();
    await createServer();
    await createVariables();
    await createRouter();
    await createAppJs();    
    await installModules();
}



module.exports = {
    createApp
}


// helper functions

const createDirectories = () => {
    console.log(chalk.yellow('Creating directories'));
    shell.mkdir('-p', ['bin', 'src', 'test']);
    shell.mkdir('-p', ['src/controllers', 'src/routes', 'src/services', 'src/startup']);
}

const createPackageJson = (name, description) => {    
    const packagejson = require('./models/package-json.model')(name, description);
    createFile('package.json', packagejson);    
}

const createServer = () => {    
    const serverjs = require('./models/server.model')();
    createFile('bin/server.js', serverjs);    
}

const createVariables = () => {    
    const variables = require('./models/variables.model')();
    createFile('bin/variables.js', variables);    
}

const createAppJs = () => {
    const app = require('./models/app.model')();
    createFile('src/app.js', app);
}

const createRouter = () => {
    const router = require('./models/router.model')();
    createFile('src/startup/router.js', router);
}

const installModules = async () => {
    console.log(chalk.yellow(`Installing NPM Modules`));
    const res = await shell.exec('npm install', { silent: true, async: true });    
}
