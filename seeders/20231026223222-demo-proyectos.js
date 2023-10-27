'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Proyectos', [
      {
        idProyecto: 100,
        nombre: 'Proyecto 1',
        descripcion: 'El 1',
        imagen: 'Imagen 1',
        donatario: 'rfc1donatario',
        donadores: 'rfc2donador',
        cantidadDonada: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idProyecto: 200,
        nombre: 'Proyecto 2',
        descripcion: 'El 2',
        imagen: 'Imagen 2',
        donatario: 'rfc2donatario',
        donadores: 'rfc1donador',
        cantidadDonada: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Proyectos', {},
    {});
  }
};
