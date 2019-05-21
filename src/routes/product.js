const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product');

// Auth Route
router.get('/', ProductController.listProducts);


module.exports = router;