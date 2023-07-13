'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegisteredWallet extends Model {
    static associate(models) {
      // define association here
    }
  }
  RegisteredWallet.init({
    walletAddress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RegisteredWallet',
  });
  return RegisteredWallet;
};