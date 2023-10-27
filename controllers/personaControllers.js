const { Persona } = require('../models');

//Consultar todas las personas
async function obtenerTodasLasPersonas(req, res) {
    try {
        const todasLasPersonas = await Persona.findAll();
        res.json(todasLasPersonas);
    } catch (error) {
        console.error('Error al obtener todas las personas:', error);
        res.status(500).json({ error: 'Error al obtener las personas' });
    }
}

//Agregar persona
const agregarPersona = async (req, res) => {
    try {
        const { rfc, nombre, proyectosAsociados, imagen, cantidadDonada } = req.body;

        const nuevaPersona = await Persona.create({
            rfc,
            nombre,
            proyectosAsociados,
            imagen,
            cantidadDonada,
        });

        res.status(201).json({ mensaje: 'Persona creada con éxito', persona: nuevaPersona });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

//Eliminar persona
const eliminarPersona = async (req, res) => {
    try {
        const { rfc } = req.params;

        // Verifica si la persona existe
        const personaExistente = await Persona.findByPk(rfc);
        if (!personaExistente) {
            return res.status(404).json({ mensaje: 'Persona no encontrada' });
        }

        // Elimina la persona
        await Persona.destroy({
            where: {
                rfc,
            },
        });

        res.json({ mensaje: 'Persona eliminada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

//Actualiza persona
const actualizarPersona = async (req, res) => {
    try {
        const { rfc } = req.params;
        const { nombre, proyectosAsociados, imagen, cantidadDonada } = req.body;

        //Verifica si la persona existe
        const personaExistente = await Persona.findByPk(rfc);
        if (!personaExistente) {
            return res.status(404).json({ mensaje: 'Persona no encontrada' });
        }

        //Actualiza la persona
        await Persona.update(
            { nombre, proyectosAsociados, imagen, cantidadDonada },
            {
                where: {
                    rfc,
                },
            }
        );

        res.json({ mensaje: 'Persona actualizada con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = {
    obtenerTodasLasPersonas,
    agregarPersona,
    eliminarPersona,
    actualizarPersona
};
