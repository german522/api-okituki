'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Actividades', { // ✅ Asegúrate de que el nombre sea correcto
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tipo_actividades: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Tipo_Actividades", // Corrige el nombre del modelo
          key: "id"
        },
        onDelete: "CASCADE" // ✅ Asegura que se borren en cascada si el tipo se elimina
      },
      nombre: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
    },
      {
        tableName: "Actividades" // ✅ Asegura que el nombre sea correcto
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Actividades');
  }
};
