'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Network extends Model {
    static associate(models) {
      // define association here
    }
  }
  Network.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'networks',
  });
  return Network;
};