'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personas', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: Sequelize.STRING(255)
      },
      apellido: {
        type: Sequelize.STRING(255)
      },
      telefono: {
        type: Sequelize.STRING(20)
      },
      correo: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      tipo: {
        type: Sequelize.ENUM("usuario", "psicologo"),
        allowNull: false
      },
      URL_imagen: {
        type: Sequelize.TEXT
      }
    }, {
      // Aquí puedes asegurarte de que la tabla no sea pluralizada
      tableName: "Personas"  // Especifica exactamente el nombre de la tabla
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Personas');
  }
};