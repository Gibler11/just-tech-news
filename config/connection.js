const Sequelize = require('sequelize');
const mysql2 = require('mysql2');
require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectModule: mysql2,
      port: 3306
    });

module.exports = sequelize;
