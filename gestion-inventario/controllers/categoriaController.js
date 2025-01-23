const Categoria = require('../models/categoria');

// Crear una nueva categoría
exports.create = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const categoria = await Categoria.create({ nombre, descripcion });
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear categoría', error });
  }
};

// Obtener todas las categorías
exports.getAll = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener categorías', error });
  }
};

// Actualizar una categoría
exports.update = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const categoria = await Categoria.update({ nombre, descripcion }, {
      where: { id: req.params.id }
    });
    res.status(200).json(categoria);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar categoría', error });
  }
};

// Eliminar una categoría
exports.delete = async (req, res) => {
  try {
    await Categoria.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Categoría eliminada' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar categoría', error });
  }
};
