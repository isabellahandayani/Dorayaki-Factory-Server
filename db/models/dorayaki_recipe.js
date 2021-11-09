'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DorayakiRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DorayakiRecipe.init({
    id_bahan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_dorayaki: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    }
  }, {
    sequelize,
    modelName: 'DorayakiRecipe',
    tableName: 'dorayaki_recipe',
  });

  DorayakiRecipe.belongsTo(
    sequelize.models.Dorayaki, 
    {
      foreignKey: 'id', 
      through: 'id_dorayaki'
    });

  DorayakiRecipe.belongsTo(
    sequelize.models.BahanBaku, 
    {
      foreignKey: 'id', 
      through: 'id_bahan'
    });
    
  return DorayakiRecipe;
};