const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Rutas CRUD de categorías
router.post('/', categoriaController.create);
router.get('/', categoriaController.getAll);
router.put('/:id', categoriaController.update);
router.delete('/:id', categoriaController.delete);

module.exports = router;
