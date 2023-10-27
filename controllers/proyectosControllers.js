const { Proyectos } = require('../models');

//Consultar todos los proyectos
async function obtenerTodosLosProyectos(req, res) {
    try {
        const todosLosProyectos = await Proyectos.findAll();
        res.json(todosLosProyectos);
    } catch (error) {
        console.error('Error al obtener todos los proyectos:', error);
        res.status(500).json({ error: 'Error al obtener los proyectos' });
    }
}

//Crear un nuevo proyecto
const agregarProyecto = async (req, res) => {
    try {
        const { idProyecto, nombre, descripcion, imagen, donatario, donadores, cantidadDonada } = req.body;

        const nuevoProyecto = await Proyectos.create({
            idProyecto,
            nombre,
            descripcion,
            imagen,
            donatario,
            donadores,
            cantidadDonada,
        });

        res.status(201).json({ mensaje: 'Proyecto creado con éxito', proyecto: nuevoProyecto });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

//Eliminar proyecto
const eliminarProyecto = async (req, res) => {
    try {
        const { idProyecto } = req.params;

        //Verifica si el proyecto existe
        const proyectoExistente = await Proyectos.findByPk(idProyecto);
        if (!proyectoExistente) {
            return res.status(404).json({ mensaje: 'Proyecto no encontrado' });
        }

        //Elimina el proyecto
        await Proyectos.destroy({
            where: {
                idProyecto,
            },
        });

        res.json({ mensaje: 'Proyecto eliminado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

//Actualizar proyectos
const actualizarProyecto = async (req, res) => {
    try {
        const { idProyecto } = req.params;
        const { nombre, descripcion, imagen, donatario, donadores, cantidadDonada } = req.body;

        //Verifica si el proyecto existe
        const proyectoExistente = await Proyectos.findByPk(idProyecto);
        if (!proyectoExistente) {
            return res.status(404).json({ mensaje: 'Proyecto no encontrado' });
        }

        //Actualiza el proyecto
        await Proyectos.update(
            { nombre, descripcion, imagen, donatario, donadores, cantidadDonada },
            {
                where: {
                    idProyecto,
                },
            }
        );

        res.json({ mensaje: 'Proyecto actualizado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = {
    obtenerTodosLosProyectos,
    agregarProyecto,
    eliminarProyecto,
    actualizarProyecto
};

