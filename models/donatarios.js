'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donatarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Donatarios.belongsTo(models.Proyectos, {
        foreignKey: 'proyectoAsociado',
      });
    }
  }

  Donatarios.init({
    rfc: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    proyectoAsociado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Donatarios',
  });

  return Donatarios;
};