'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personas', {  // Asegúrate de que el nombre de la tabla esté aquí
      id_persona: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
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
      fotoperfilURL: {
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
    }, {
      // Aquí puedes asegurarte de que la tabla no sea pluralizada
      tableName: "Personas"  // Especifica exactamente el nombre de la tabla
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Personas');
  }
};