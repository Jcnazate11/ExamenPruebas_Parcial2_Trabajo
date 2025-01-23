const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'categorias', // Asegúrate de que este nombre coincida exactamente con el de la tabla
  timestamps: true, // Si la tabla tiene campos `createdAt` y `updatedAt`
});

module.exports = Categoria;
