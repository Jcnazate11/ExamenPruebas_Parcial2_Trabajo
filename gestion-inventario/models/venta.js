const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Venta = sequelize.define('Venta', {
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_venta: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  producto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'productos', // Asegúrate de que el nombre de la tabla de productos esté correcto
      key: 'id',
    },
    allowNull: false,
  },
}, {
  tableName: 'ventas', // Asegúrate de que el nombre coincida exactamente con la tabla de la base de datos
  timestamps: true, // Si deseas utilizar createdAt y updatedAt
});

module.exports = Venta;
