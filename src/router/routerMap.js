const express = require('express');
const router = express.Router();
const mapController = require('../controller/mapController');

router.get('/:lat/:long/:filter', mapController.showUsers);

module.exports = router;
