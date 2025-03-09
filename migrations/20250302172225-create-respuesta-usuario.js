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
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_pregunta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_respuesta: {
        type: Sequelize.INTEGER,
        allowNull: false,
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