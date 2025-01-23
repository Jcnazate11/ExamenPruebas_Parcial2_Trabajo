const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Rutas CRUD de ventas
router.post('/', ventaController.create);
router.get('/', ventaController.getAll);
router.put('/:id', ventaController.update);
router.delete('/:id', ventaController.delete);

module.exports = router;
