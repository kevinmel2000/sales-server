const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const SalesController = require('../controllers/sales');

// Auth Route
router.post('/', checkAuth, SalesController.add);
router.get('/', SalesController.get);
router.get('/:userId', checkAuth, SalesController.get);
router.patch('/:salesId', checkAuth, SalesController.update);
router.delete('/:salesId', checkAuth, SalesController.delete);


module.exports = router;