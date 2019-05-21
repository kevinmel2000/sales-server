const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const ProductController = require('../controllers/product');

// Auth Route
router.get('/', checkAuth, ProductController.listProducts);


module.exports = router;