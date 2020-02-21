module.exports = () => {
    return `
const variables = require('./variables');
const http = require('http');    

const app = require('../src/app');

const port = variables.port || 3000;    

const server = http.createServer(app).listen(port, () => {
    console.log('API running on port ' + port);
});

module.exports = server;
    `
}