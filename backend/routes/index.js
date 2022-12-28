const express = require('express');
const masterRouter = express.Router();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config/properties.json'));
const tourRouter = require('./tours/index')
masterRouter.use(`${config.basePath}`, tourRouter);
module.exports = masterRouter;

