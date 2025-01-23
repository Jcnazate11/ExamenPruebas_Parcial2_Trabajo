const Cliente = require('../models/cliente');

// Crear un nuevo cliente
exports.create = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono } = req.body;
    const cliente = await Cliente.create({ nombre, apellido, email, telefono });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear cliente', error });
  }
};

// Obtener todos los clientes
exports.getAll = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener clientes', error });
  }
};

// Actualizar un cliente
exports.update = async (req, res) => {
  try {
    const { nombre, apellido, email, telefono } = req.body;
    const cliente = await Cliente.update({ nombre, apellido, email, telefono }, {
      where: { id: req.params.id }
    });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar cliente', error });
  }
};

// Eliminar un cliente
exports.delete = async (req, res) => {
  try {
    await Cliente.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar cliente', error });
  }
};
