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
      type: DataTypes.ENUM("accepted", "rejected", "not validated"),
      allowNull: false,
      defaultValue: "not validated",
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

  return Request;
};