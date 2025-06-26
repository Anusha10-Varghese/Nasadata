const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || {
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nasa_explorer',
  dialect: 'mysql'
});

module.exports = sequelize;