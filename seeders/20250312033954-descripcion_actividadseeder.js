'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("descripcion_actividad", [
      {
        id_actividad: 1,
        numero_paso: 1,
        instruccion: "Levanta las pesas y empieza a chambear",
        URL_imagen: "/uploads/duolingo_pose3.png" // Ruta de la imagen
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("descripcion_actividad", null, {});
  }
};
