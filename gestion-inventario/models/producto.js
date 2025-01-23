const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./categoria');

const Producto = sequelize.define('Producto', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  cantidad_stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Producto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

module.exports = Producto;
