const Producto = require('../models/producto');

exports.create = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.readAll = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const producto = await Producto.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Producto.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
