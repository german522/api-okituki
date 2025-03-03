'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Descripcion_Actividad', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_actividad: {
        type: Sequelize.INTEGER
      },
      numero_pasos: {
        type: Sequelize.INTEGER
      },
      subtitulo_actividad: {
        type: Sequelize.STRING
      },
      instrucción: {
        type: Sequelize.TEXT
      },
      URL_imagen: {
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
      tableName: "Descripcion_Actividad"
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Descripcion_Actividad');
  }
};