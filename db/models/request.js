'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Request.init({
    id_dorayaki: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stok_added: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE, 
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Request',
    tableName: 'requests',
  });

  Request.belongsTo(
    sequelize.models.Dorayaki, 
    {
      foreignKey: 'fk_request_dorayaki',
      targetKey: 'id',
      through: 'id_dorayaki',
    }
  );

  return Request;
};