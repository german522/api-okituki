'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Resultados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER
      },
      id_test: {
        type: Sequelize.INTEGER
      },
      puntaje_total: {
        type: Sequelize.INTEGER
      },
      nivel_estres: {
        type: Sequelize.ENUM("Bajo", "Moderado", "Alto"),
        allowNull: false
      },
      fecha_realizacion: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      tableName: "Resultados"
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Resultados');
  }
};