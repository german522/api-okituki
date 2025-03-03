'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Respuestas_Usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_resultado: {
        type: Sequelize.INTEGER
      },
      id_pregunta: {
        type: Sequelize.INTEGER
      },
      id_respuesta: {
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
      tableName: "Respuestas_Usuario"
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Respuestas_Usuario');
  }
};