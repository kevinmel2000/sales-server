const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();
      req.session.user = user.id;
      res.status(200).send({
        user_id: user.id,
        name: user.name,
        email: user.email,        
        token: jwtSignUser(userJson)
      });
    } catch (err) {      
      res.status(500).send({
        error: 'The email account is already in use'
      });
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        return res.status(400).send({
          error: 'The login information was incorrect'
        });
      }

      const isPasswordValid = await user.comparePassword(password);      
      if (!isPasswordValid) {
        return res.status(400).send({
          error: 'The login information was incorrect'
        });
      }

      const userJson = user.toJSON();
      req.session.user = user.id;      
      res.status(200).send({
        user_id: user.id,
        name: user.name,
        email: user.email,
        token: jwtSignUser(userJson)
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occured trying to log in'
      });
    }
  },
  async logout (req, res) {    
    res.clearCookie('user_sid');
    req.session.destroy((err) => {
      if(err) {
          return console.log(err);
      }      
    });

    res.status(200).send({
      message: 'log out success'
    });
  }
}
