const express = require('express');
const router = express.Router();
const {getTours, createTour} = require('../../controller/tour/index')
router
    .route('/tours')
    .get(getTours)
router
    .route('/tours')
    .post(createTour)
module.exports = router;