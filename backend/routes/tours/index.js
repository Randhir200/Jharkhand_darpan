const express = require('express');
const router = express.Router();
const {tourController} = require('../../controller/tour/index')
router
    .route('/tours')
    .get(tourController)

module.exports = router;