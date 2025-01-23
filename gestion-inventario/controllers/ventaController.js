const Venta = require('../models/venta');

// Crear una nueva venta
exports.create = async (req, res) => {
  try {
    const { producto_id, cantidad, fecha_venta, total } = req.body;
    const venta = await Venta.create({ producto_id, cantidad, fecha_venta, total });
    res.status(201).json(venta);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear venta', error });
  }
};

// Obtener todas las ventas
exports.getAll = async (req, res) => {
  try {
    const ventas = await Venta.findAll();
    res.status(200).json(ventas);
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener ventas', error });
  }
};

// Actualizar una venta
exports.update = async (req, res) => {
  try {
    const { producto_id, cantidad, fecha_venta, total } = req.body;
    const venta = await Venta.update({ producto_id, cantidad, fecha_venta, total }, {
      where: { id: req.params.id }
    });
    res.status(200).json(venta);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar venta', error });
  }
};

// Eliminar una venta
exports.delete = async (req, res) => {
  try {
    await Venta.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Venta eliminada' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar venta', error });
  }
};
