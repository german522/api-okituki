'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Respuestas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pregunta: {
        type: Sequelize.INTEGER
      },
      respuesta_texto: {
        type: Sequelize.TEXT
      },
      valor: {
        type: Sequelize.INTEGER
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
      tableName: "Respuestas"
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Respuestas');
  }
};