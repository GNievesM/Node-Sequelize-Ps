'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedSearch extends Model {
    static associate(models) {
    }
  }
  SavedSearch.init({
    search: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'savedSearch',
  });
  return SavedSearch;
};