module.exports = (name) => {
    return `
const controller = require('../controllers/${name}.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.get);

router.post('/', controller.post);

module.exports = router;
    `
}