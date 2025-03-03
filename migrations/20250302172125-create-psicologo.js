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
        type: Sequelize.INTEGER
      },
      especialidad: {
        type: Sequelize.STRING
      },
      experiencia: {
        type: Sequelize.INTEGER
      },
      horario_disponible: {
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
      tableName: "Psicologos"
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Psicologos');
  }
};