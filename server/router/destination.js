const express = require('express');
const router = express.Router();
const { getDestinations } = require('../controller/destinationController');

router.get('/', getDestinations);
module.exports = router;
