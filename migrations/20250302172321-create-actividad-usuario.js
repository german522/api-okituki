'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Actividades_Usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_actividad: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fecha_realizacion: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.ENUM("Activa", "Pendiente", "Completada", "Terminada"),
        allowNull: false
      }
    },
      {
        tableName: "Actividades_Usuario"
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Actividades_Usuario');
  }
};