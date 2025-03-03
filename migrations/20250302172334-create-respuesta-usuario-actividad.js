'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Respuestas_Usuario_Actividades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_actividad_usuario: {
        type: Sequelize.INTEGER
      },
      respuesta_texto: {
        type: Sequelize.TEXT
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
      tableName: "Respuestas_Usuario_Actividades"
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Respuestas_Usuario_Actividades');
  }
};