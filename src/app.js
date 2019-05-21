require('dotenv').config()
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const config = require('./config/config');

/**
 * Connect application to MySQL
 */
sequelize
  .authenticate()
  .then(() => {
    sequelize.sync().then(() => {      
      console.log(`Server started on port ${config.port}`)
    })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  });

/**
 * set up morgan to log the incoming request
 */
app.use(morgan('dev'));

/**
 * setup body parser
 */
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/**
 * setup CORS
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Accept, Authorization'
  );
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

/**
 * Import routes
 */
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const salesRoute = require('./routes/sales');

/**
 * Application Routes
 */
app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/sales', salesRoute);

// If no routes are found
app.use((req, res, next) => {
  const error = new Error('Endpoint Not found');
  error.status = 404;
  next(error);  
});

// To catch and sends error message
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      error: {
        message: error.message
      }
  });
  next();
});

module.exports = app;