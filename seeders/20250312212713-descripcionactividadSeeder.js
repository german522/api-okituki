'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("descripcion_actividad", [
      {
        id: 1,
        id_actividad: 1, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Siéntese o acuéstese en una posición cómoda.",
        URL_imagen: ""
      },
      {
        id: 2,
        id_actividad: 1, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Coloque una mano sobre el abdomen justo debajo de las costillas y la otra mano sobre el pecho.",
        URL_imagen: ""
      },
      {
        id: 3,
        id_actividad: 1, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Respire hondo por la nariz y deje que el abdomen le empuje la mano. El pecho no debería moverse.",
        URL_imagen: ""
      },
      {
        id: 4,
        id_actividad: 1, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Exhale a través de los labios fruncidos como si estuviese silbando. Sienta cómo se hunde la mano sobre su abdomen y utilícela para expulsar todo el aire hacia afuera.",
        URL_imagen: ""
      },
      {
        id: 5,
        id_actividad: 1, // Asegúrate de que exista este tipo de actividad
        numero_paso: 5,
        instruccion: "Realice este ejercicio de respiración entre 3 y 10 veces. Tómese su tiempo con cada respiración.",
        URL_imagen: ""
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("descripcion_actividad", null, {}); // Esto elimina los datos insertados
  }
};
