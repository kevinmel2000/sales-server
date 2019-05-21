const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const checkSession = require('../middleware/check-session');

const ProductController = require('../controllers/product');

// Auth Route
router.get('/', checkSession, checkAuth, ProductController.listProducts);


module.exports = router;