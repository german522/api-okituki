'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_persona: {
        type: Sequelize.INTEGER
      },
      contrasena: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      genero: {
        type: Sequelize.STRING
      },
      discapacidad: {
        type: Sequelize.ENUM("ninguna", "fisica", "visual", "auditiva", "motriz"),
        allowNull: false
      },
      fecha_registro: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      tableName: "Usuarios"
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};