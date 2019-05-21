const { Product } = require('../models');

module.exports = {
  async listProducts (req, res) {
    try {
      let products = await Product.findAndCountAll();

      if(products.count >0){
        res.send({
          products
        });
      } else {
        res.status(500).send({
          error: 'Products not found'
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'There was a problem while searching for the products'
      });
    }
  }
}