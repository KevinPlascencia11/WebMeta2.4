'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      donadores.belongsTo(models.Persona, {
        foreignKey: 'rfcDonador',
      });
      donadores.belongsTo(models.Proyectos, {
        foreignKey: 'idProyecto',
      });
    }
  }
  donadores.init({
    idProyecto: DataTypes.INTEGER,
    rfcDonador: DataTypes.STRING,
    cantidadDonada: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'donadores',
  });
  return donadores;
};