'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('savedSearches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      search: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      search_type_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'searchTypes',
          key: 'id',
        }
      },
      network_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'networks',
          key: 'id',
        }
      },
      wallet_address_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'registeredWallets',
          key: 'id',
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('savedSearches');
  }
};