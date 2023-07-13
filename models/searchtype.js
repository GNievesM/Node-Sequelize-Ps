'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SearchType extends Model {
    static associate(models) {
      // define association here
    }
  }
  SearchType.init({
   type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'searchType',
  });
  return SearchType;
};