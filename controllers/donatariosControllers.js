const { Donatarios } = require('../models');

//Consultar todos los donatarios
async function obtenerTodosLosDonatarios(req, res) {
    try {
        const todosLosDonatarios = await Donatarios.findAll();
        res.json(todosLosDonatarios);
    } catch (error) {
        console.error('Error al obtener todos los donatarios:', error);
        res.status(500).json({ error: 'Error al obtener los donatarios' });
    }
}

//Crear un nuevo donatario
const agregarDonatario = async (req, res) => {
    try {
        const { rfc, nombre, proyectoAsociado, imagen } = req.body;

        const nuevoDonatario = await Donatarios.create({
            rfc,
            nombre,
            proyectoAsociado,
            imagen,
        });

        res.status(201).json({ mensaje: 'Donatario creado con éxito', donatario: nuevoDonatario });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

//Elimina un donatario
const eliminarDonatario = async (req, res) => {
    try {
        const { rfc } = req.params;

        //Verifica si el donatario existe
        const donatarioExistente = await Donatarios.findByPk(rfc);
        if (!donatarioExistente) {
            return res.status(404).json({ mensaje: 'Donatario no encontrado' });
        }

        //Elimina el donatario
        await Donatarios.destroy({
            where: {
                rfc,
            },
        });

        res.json({ mensaje: 'Donatario eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

//Actualiza Donatario
const actualizarDonatario = async (req, res) => {
    try {
        const { rfc } = req.params;
        const { nombre, proyectoAsociado, imagen } = req.body;

        //Verifica si el donatario existe
        const donatarioExistente = await Donatarios.findByPk(rfc);
        if (!donatarioExistente) {
            return res.status(404).json({ mensaje: 'Donatario no encontrado' });
        }

        //Actualiza el donatario
        await Donatarios.update(
            { nombre, proyectoAsociado, imagen },
            {
                where: {
                    rfc,
                },
            }
        );

        res.json({ mensaje: 'Donatario actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = {
    obtenerTodosLosDonatarios,
    agregarDonatario,
    eliminarDonatario,
    actualizarDonatario
};
