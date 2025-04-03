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
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Actividades",
          key: "id"
        },
      },
      numero_paso: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      instruccion: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      URL_imagen: {
        type: Sequelize.TEXT,
        allowNull: false,
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