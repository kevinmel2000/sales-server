const express = require('express');
const router = express.Router();

const SalesController = require('../controllers/sales');

// Auth Route
router.post('/', SalesController.add);
router.get('/', SalesController.list);
router.get('/:userId', SalesController.list);


module.exports = router;