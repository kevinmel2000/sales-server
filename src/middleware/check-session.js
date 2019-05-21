module.exports = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    next();
  } else {      
      return res.status(401).json({
        message: 'Please log in'
      });
  }  
};