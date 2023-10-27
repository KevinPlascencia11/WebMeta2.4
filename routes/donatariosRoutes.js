const express = require('express');
const router = express.Router();
const donatariosController = require('../controllers/donatariosControllers');

//Ruta para obtener todos los donatarios
router.get('/', donatariosController.obtenerTodosLosDonatarios);
router.post('/', donatariosController.agregarDonatario);
router.delete('/:rfc', donatariosController.eliminarDonatario);
router.put('/:rfc', donatariosController.actualizarDonatario);

module.exports = router;
