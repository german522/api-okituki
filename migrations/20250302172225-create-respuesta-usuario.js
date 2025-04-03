'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Respuestas_Usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_resultado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Resultados", // ✅ Debe coincidir con la migración de Resultados
          key: "id"
        },
        onDelete: "CASCADE"
      },
      id_pregunta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Preguntas", // ✅ Debe coincidir con la migración de Preguntas
          key: "id"
        },
        onDelete: "CASCADE"
      },
      id_respuesta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Respuestas", // ✅ Debe coincidir con la migración de Respuestas
          key: "id"
        },
        onDelete: "CASCADE"
      }
    },
      {
        tableName: "Respuestas_Usuario"
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Respuestas_Usuario');
  }
};
