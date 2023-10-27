const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaControllers');

//Ruta para obtener todas las personas
router.get('/', personaController.obtenerTodasLasPersonas);
router.post('/', personaController.agregarPersona);
router.delete('/:rfc', personaController.eliminarPersona);
router.put('/:rfc', personaController.actualizarPersona);

module.exports = router;
