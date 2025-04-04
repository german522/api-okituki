'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Tipo_Actividades", [
      {
        id: 1,
        nombre: "Ejercicios de respiración",
        descripcion: "Existen muchos ejercicios de respiración que puede realizar como ayuda para relajarse. Es mejor comenzar por algo sencillo y fácil de manejar, si jamás ha realizado ejercicios de respiración con anterioridad, es recomendable realizar la respiración abdominal como primera técnica. Los otros ejercicios son más avanzados y son recomendados para cuando se tenga la primera técnica dominada. Todos estos ejercicios pueden ayudarle a relajarse y a aliviar el estrés."
      },
      {
        id: 2,
        nombre: "Meditación / Yoga",
        descripcion: "Al principio, intente meditar solo 10 minutos seguidos. Después puede aumentar el tiempo poco a poco. También puede intentar meditar durante 10 minutos por la mañana y 10 minutos por la noche."
      },
      {
        id: 3,
        nombre: "Ejercicios de estiramiento",
        descripcion: "Los estiramientos son ejercicios que ayudan a relajar los músculos y aliviar la tensión acumulada en el cuerpo. También pueden ayudar a reducir el estrés. Nuestra meta será aumentar tu flexibilidad, mejorar tu circulación sanguínea, aliviar el estrés y la tensión, prevenir lesiones, fortalecer los músculos, recuperar el movimiento en tus articulaciones, evitar contracturas musculares para ayudar a tu cuerpo a sentirse más relajado y disminuir sus niveles de estrés."
      },
      {
        id: 4,
        nombre: "Técnicas de concentración",
        descripcion: "Las técnicas de concentración y relajación pueden ayudar a reducir el estrés y a mejorar la capacidad de concentración, gracias a que nos enfocaremos en mejorar tus habilidades para concentrarte en distintas actividades. "
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Tipo_Actividades", null, {}); // Esto elimina los datos insertados
  }
};