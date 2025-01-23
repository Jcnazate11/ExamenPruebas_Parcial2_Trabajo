const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/', productoController.create);
router.get('/', productoController.readAll);
router.put('/:id', productoController.update);
router.delete('/:id', productoController.delete);

module.exports = router;
