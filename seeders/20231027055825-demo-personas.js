'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Personas', [
      {
        rfc: 'rfc1donador',
        nombre: 'Josue Peñuelas',
        proyectosAsociados: 200,
        imagen: 'Imagen 1 Donador',
        cantidadDonada: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rfc: 'rfc2donador',
        nombre: 'Joahan Mariscal',
        proyectosAsociados: 100,
        imagen: 'Imagen 2 Donador',
        cantidadDonada: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Personas', {},
    {});
  }
};
