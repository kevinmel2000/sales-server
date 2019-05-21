const { Sales, sequelize } = require('../models');

module.exports = {
  async add (req, res) {
    try {
      const sales = await Sales.create(req.body);
      if (sales) {
        res.status(200).send({
          message: 'Sales add successfully'
        });
      } else {
        res.status(500).send({
          error: 'Failed to add sales'
        });
      }
    } catch (err) {
      let error = null
      if (err.name === "SequelizeUniqueConstraintError") {
        error = `Duplicate entry`
      } else {
        error = `There was a problem while adding the Bunker Tanker`
      }
      res.status(500).send({
        error
      })
    }
  },
  async list (req, res) {
    try {
      const { 
        userId           
      } = req.params;

      const {          
        productId,
        dateEntry,
        dateStart,
        dateEnd,
        rowStart,
        rowCount        
      } = req.body;

      let andWhere = '';
      if (userId) {
        andWhere+=` and s.user_id = ${userId} `;
      }

      if (productId) {
        andWhere+=` and s.product_id = ${productId} `;
      }

      if(dateEntry) {
        andWhere+=` and s.createdAt = '${dateEntry}' `;
      }

      if(dateStart && dateEnd) {
        andWhere+=` and s.createdAt between '${dateStart}' and '${dateEnd}' `;
      }

      let limit = '';
      if(rowStart && rowCount){
        limit+=` limit ${rowStart},${rowCount} `;
      }

      const query = `select s.id, u.name as sales_name, p.name as product_name, p.price, s.quantity, (p.price * s.quantity) as ammount, s.createdAt
      from Sales s, Users u, Products p 
      where s.user_id = u.id and s.product_id = p.id 
      ${andWhere}
      order by s.createdAt desc
      ${limit}
      `;

      const sales = await sequelize.query(
        query,
        { type: sequelize.QueryTypes.SELECT }
      );

      if (sales.length > 0){
        res.status(200).send({
          count: sales.length,
          rows: sales
        })
      } else {
        res.status(500).send({
          error: 'Sales not found'
        })
      }
    } catch (err) {
      res.status(500).send({
        error: 'There was a problem while searching for the sales'
      });
    }
  }
}