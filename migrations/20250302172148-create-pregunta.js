'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Preguntas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_test: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pregunta: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    },
      {
        tableName: "Preguntas"
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Preguntas');
  }
};