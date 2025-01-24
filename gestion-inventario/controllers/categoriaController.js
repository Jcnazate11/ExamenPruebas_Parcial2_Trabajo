const { validationResult } = require('express-validator');
const Categoria = require('../models/categoria');

// Crear una nueva categoría
exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, descripcion } = req.body;
    const categoria = await Categoria.create({ nombre, descripcion });
    res.status(201).json(categoria);
  } catch (error) {
    next(error); // Manejo global de errores
  }
};

// Obtener todas las categorías
exports.getAll = async (req, res, next) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    next(error);
  }
};

// Actualizar una categoría
exports.update = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, descripcion } = req.body;
    const categoria = await Categoria.update({ nombre, descripcion }, {
      where: { id: req.params.id }
    });

    if (categoria[0] === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json({ message: 'Categoría actualizada correctamente' });
  } catch (error) {
    next(error);
  }
};

// Eliminar una categoría
exports.delete = async (req, res, next) => {
  try {
    const categoria = await Categoria.destroy({ where: { id: req.params.id } });

    if (categoria === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }

    res.status(200).json({ message: 'Categoría eliminada correctamente' });
  } catch (error) {
    next(error);
  }
};
