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
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Personas",
          key: "id"
        },
        onDelete: "SET NULL"
      },
      contrasena: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
      },
      genero: {
        type: Sequelize.STRING(50)
      },
      discapacidad: {
        type: Sequelize.ENUM("ninguna", "fisica", "visual", "auditiva", "motriz"),
        allowNull: false
      },
      fecha_registro: {
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
