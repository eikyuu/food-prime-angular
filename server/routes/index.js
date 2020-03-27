const express = require('express');
const sections = require('./sections');

const router = express.Router();

router.use('/sections', sections);

module.exports = router;
