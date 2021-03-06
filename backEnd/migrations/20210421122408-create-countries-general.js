'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Countries_generals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      coastline: {
        type: Sequelize.STRING
      },
      net_migration: {
        type: Sequelize.STRING
      },
      infant_motality: {
        type: Sequelize.STRING
      },
      gdp: {
        type: Sequelize.STRING
      },
      literacy: {
        type: Sequelize.STRING
      },
      Phones: {
        type: Sequelize.STRING
      },
      arable: {
        type: Sequelize.STRING
      },
      crops: {
        type: Sequelize.STRING
      },
      others: {
        type: Sequelize.STRING
      },
      climate: {
        type: Sequelize.STRING
      },
      birthrate: {
        type: Sequelize.STRING
      },
      deathrate: {
        type: Sequelize.STRING
      },
      agriculture: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      service: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Countries_generals');
  }
};