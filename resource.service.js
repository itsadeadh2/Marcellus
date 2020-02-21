const { createFile, readFile, addDataBellowLine } = require('./helper.service')

const createResource = (name) => {
    createController(name);
    createRoute(name);
    updateRouter(name);
}

const createRoute = (name) => {
    const route = require('./models/route.model')(name);
    createFile(`src/routes/${name}.route.js`, route);
}

const updateRouter = (name) => {
    console.log('updating router');
    let router = readFile('src/startup/router.js');
    console.log(router);
    router = addDataBellowLine(router, `const express = require('express');`, `
const ${name} = require('../routes/${name}.route');`);
    console.log(router);
    router = addDataBellowLine(router, `app.use(express.json());`, `    app.use('/${name}', ${name});`)
    createFile('src/startup/router.js', router)
}


const createController = (name) => {
    const controller = require('./models/controller.model')(name);
    createFile(`src/controllers/${name}.controller.js`, controller);
}

module.exports = {
    createResource
}