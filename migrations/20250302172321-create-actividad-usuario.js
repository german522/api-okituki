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
        references: {
          model: "Usuarios",
          key: "id",
          onDelete: "CASCADE"
        },
      },
      id_actividad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Actividades",
          key: "id"
        },
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