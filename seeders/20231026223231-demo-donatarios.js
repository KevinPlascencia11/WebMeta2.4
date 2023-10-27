'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Donatarios', [
      {
        rfc: 'rfc1donatario',
        nombre: 'Kevin Plascencia',
        proyectoAsociado: 100,
        imagen: 'Imagen 1 Donatario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rfc: 'rfc2donatario',
        nombre: 'Sebastian Chaidez',
        proyectoAsociado: 200,
        imagen: 'Imagen 2 Donatario',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Donatarios', {},
    {});
  }
};
