const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectosControllers');

//Ruta para obtener todos los proyectos
router.get('/', proyectosController.obtenerTodosLosProyectos);
router.post('/', proyectosController.agregarProyecto);
router.delete('/:idProyecto', proyectosController.eliminarProyecto);
router.put('/:idProyecto', proyectosController.actualizarProyecto);

module.exports = router;
