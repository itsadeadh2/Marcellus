module.exports = () => {
    return `
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

require('./startup/router')(app);

module.exports = app;
    `
}