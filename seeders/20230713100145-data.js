'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'networks',
      [
        {
          id: 1,
          network: 'BITCOIN',
        },
        {
          id: 2,
          network: 'ETHEREUM',
        },
        {
          id: 3,
          network: 'POLYGON',
        },
        {
          id: 4,
          network: 'ARBITRUM',
        },
        {
          id: 5,
          network: 'OPTIMISM',
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'searchTypes',
      [
        {
          id: 1,
          type: 'searchType1',
        },
        {
          id: 2,
          type: 'searchType2',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
