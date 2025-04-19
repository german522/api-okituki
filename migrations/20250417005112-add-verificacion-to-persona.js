"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Personas", "verificado", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.addColumn("Personas", "codigo_verificacion", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("Personas", "codigo_expiracion", {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Personas", "verificado");
    await queryInterface.removeColumn("Personas", "codigo_verificacion");
    await queryInterface.removeColumn("Personas", "codigo_expiracion");
  },
};
