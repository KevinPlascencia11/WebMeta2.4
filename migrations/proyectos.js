'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Proyectos', {
      idProyecto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imagen: {
        type: Sequelize.STRING,
        allowNull: false
      },
      donatario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      donadores: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cantidadDonada: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Proyectos');
  }
};
