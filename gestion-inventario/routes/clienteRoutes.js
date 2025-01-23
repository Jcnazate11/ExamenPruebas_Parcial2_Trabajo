const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rutas CRUD de clientes
router.post('/', clienteController.create);
router.get('/', clienteController.getAll);
router.put('/:id', clienteController.update);
router.delete('/:id', clienteController.delete);

module.exports = router;
