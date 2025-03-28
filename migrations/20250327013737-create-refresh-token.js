'use strict';
/** @type {import('sequelize-cli').Migration}*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RefreshTokens", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      token: { type: Sequelize.STRING(500), allowNull: false, unique: true },
      usuarioId: { type: Sequelize.INTEGER, allowNull: false, references: { model: "Usuarios", key: "id" }, onDelete: "CASCADE" }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("RefreshTokens");
  }
};
