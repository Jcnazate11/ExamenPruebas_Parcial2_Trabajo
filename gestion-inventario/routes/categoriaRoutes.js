const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Validaciones
const categoriaValidations = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('descripcion').optional().isString().withMessage('La descripción debe ser un texto válido'),
];

const idValidation = [
  param('id').isInt().withMessage('El ID debe ser un número entero válido'),
];

// Rutas CRUD de categorías
router.post('/', categoriaValidations, categoriaController.create);
router.get('/', categoriaController.getAll);
router.put('/:id', [...idValidation, ...categoriaValidations], categoriaController.update);
router.delete('/:id', idValidation, categoriaController.delete);

module.exports = router;
