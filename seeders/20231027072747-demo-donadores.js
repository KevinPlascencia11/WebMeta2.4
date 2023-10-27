'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Donadores', [
      {
        idProyecto: 200,
        rfcDonador: 'rfc1donador',
        cantidadDonada: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idProyecto: 100,
        rfcDonador: 'rfc2donador',
        cantidadDonada: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Donadores', {},
    {});
  }
};
