const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

// Auth Route
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/logout', UserController.logout);

module.exports = router;