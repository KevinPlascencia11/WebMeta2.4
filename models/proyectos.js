'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyectos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Proyectos.hasOne(models.Donatarios, {
        foreignKey: 'proyectoAsociado',
      });
      Proyectos.belongsToMany(models.Persona, {
        through: models.donadores,
        foreignKey: 'idProyecto',
      });
    }
  }

  Proyectos.init({
    idProyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    donatario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    donadores: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cantidadDonada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Proyectos',
  });

  return Proyectos;
};