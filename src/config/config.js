module.exports = {
  port: process.env.PORT,  
  db: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    options: {
      dialect: 'mysql',      
      host: process.env.DB_HOST,
      operatorsAliases: false,
      logging: true,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET
  }
}
