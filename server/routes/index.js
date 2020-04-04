const express = require('express');
const sections = require('./sections');
const users = require('./users');

const router = express.Router();

router.use('/sections', sections);
router.use('/users', users);

module.exports = router;
