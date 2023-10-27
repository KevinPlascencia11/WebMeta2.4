const express = require('express');
const router = express.Router();
const donadoresController = require('../controllers/donadoresControllers');

//Ruta para obtener todos los donadores
router.get('/', donadoresController.obtenerTodosLosDonadores);
router.post('/', donadoresController.agregarDonador);
router.delete('/:idProyecto/:rfcDonador', donadoresController.eliminarDonador);
router.put('/:idProyecto/:rfcDonador', donadoresController.actualizarDonador);

module.exports = router;
