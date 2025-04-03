'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Psicologos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_persona: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Personas",
          key: "id"
        },
      },
      especialidad: {
        type: Sequelize.STRING(255)
      },
      experiencia: {
        type: Sequelize.INTEGER
      },
      horario_disponible: {
        type: Sequelize.TEXT
      }
    },
      {
        tableName: "Psicologos"
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Psicologos');
  }
};