#! /usr/bin/env node

const program  = require('commander');
const { join } = require('path');
const package = require('./package.json');
const scaffold = require('./scaffold.service');
const resource = require('./resource.service');

const inquirer = require('inquirer');
const chalk  = require('chalk');
const figlet = require('figlet');

program.version(package.version);
console.log(chalk.redBright(figlet.textSync('Marcellus')));

program
    .command('create')
    .description('Cria um novo projeto')
    .option('-n, --name [name]', 'nome do projeto')
    .option('-d --description [description]', 'descricao do projeto')
    .action( async (options) => {
        const { name, description} = options;
        scaffold.createApp(name, description);        
    } )

program
    .command('add [name]')
    .description('Cria um novo resource')
    .action( async (name) => {
        resource.createResource(name);
    } )    

program.parse(process.argv);