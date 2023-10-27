const { donadores } = require('../models');

//Consultar todos los donadores
async function obtenerTodosLosDonadores(req, res) {
    try {
        const todosLosDonadores = await donadores.findAll();
        res.json(todosLosDonadores);
    } catch (error) {
        console.error('Error al obtener todos los donadores:', error);
        res.status(500).json({ error: 'Error al obtener los donadores' });
    }
}

//Agregar donador
const agregarDonador = async (req, res) => {
    try {
        const { idProyecto, rfcDonador, cantidadDonada } = req.body;

        const nuevoDonador = await donadores.create({
            idProyecto,
            rfcDonador,
            cantidadDonada,
        });

        res.status(201).json({ mensaje: 'Donador creado con éxito', donador: nuevoDonador });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

//Elimina un donador
const eliminarDonador = async (req, res) => {
    try {
        const { idProyecto, rfcDonador } = req.params;

        //Verifica si el donador existe
        const donadorExistente = await donadores.findOne({
            where: {
                idProyecto,
                rfcDonador,
            },
        });

        if (!donadorExistente) {
            return res.status(404).json({ mensaje: 'Donador no encontrado' });
        }

        //Elimina el donador
        await donadores.destroy({
            where: {
                idProyecto,
                rfcDonador,
            },
        });

        res.json({ mensaje: 'Donador eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

//Actualizar donador
const actualizarDonador = async (req, res) => {
    try {
        const { idProyecto, rfcDonador } = req.params;
        const { cantidadDonada } = req.body;

        //Verifica si el donador existe
        const donadorExistente = await donadores.findOne({
            where: {
                idProyecto,
                rfcDonador,
            },
        });

        if (!donadorExistente) {
            return res.status(404).json({ mensaje: 'Donador no encontrado' });
        }

        //Actualiza el donador
        await donadores.update(
            { cantidadDonada },
            {
                where: {
                    idProyecto,
                    rfcDonador,
                },
            }
        );

        res.json({ mensaje: 'Donador actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = {
    obtenerTodosLosDonadores,
    agregarDonador,
    eliminarDonador,
    actualizarDonador
};
