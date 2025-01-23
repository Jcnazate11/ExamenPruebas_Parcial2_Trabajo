// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestion_inventario', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
