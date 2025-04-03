'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Respuestas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pregunta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Preguntas", key: "id" },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      respuesta_texto: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      valor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: "Respuestas"
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Respuestas');
  }
};