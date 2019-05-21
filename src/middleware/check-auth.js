const jwt = require('jsonwebtoken');

/**
 * Add token validation from header
 */
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userToken = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token is missing or wrong or already expired. Please log in again'
    });
  }    
};