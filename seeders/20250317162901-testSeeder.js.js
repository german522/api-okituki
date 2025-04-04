'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Tests", [
      {
        id: 1,
        nombre: "Test inicial para la identificación del estrés.",
        descripcion: "El siguiente test nos ayudará a conocer tu estrés inicial, evaluaremos tu estrés según el último mes y basándonos en el formulario de escala de estrés percibido podremos obtener resultados claros y precisos y conocer si es que te encuentras en un estrés bajo, medio o alto."
      },
      {
        id: 2,
        nombre: "Estrés en tu estilo de vida.",
        descripcion: "Este test nos ayudará a evaluar tus niveles de estrés dependiendo de tu estilo de vida y las actividades que realizas diario."
      },
      {
        id: 3,
        nombre: "Estrés en tu ambiente.",
        descripcion: "El siguiente test evaluará tu estrés dependiendo del ambiente en el que te estés desarrollando."
      },
      {
        id: 4,
        nombre: "Estrés en tu empleo u ocupación.",
        descripcion: "¿Qué tan estresado te encuentras en tu empleo u ocupación? ¡Descúbrelo con este test!"
      },
      {
        id: 5,
        nombre: "Estrés en tus relaciones personales.",
        descripcion: "Identifica en que nivel de estrés te encuentras según las relaciones que manejas, recuerda que conocemos relaciones como amistades, parejas, familia e incluso compañeros."
      },
      {
        id: 6,
        nombre: "Estrés basado en tu personalidad.",
        descripcion: "¿El como reaccionas ante diversas situaciones es resultado de tu estrés? Identifica tu nivel de estrés con este cuestionario acerca de tus hábitos y estilo de vida."
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Tests", null, {}); // Esto elimina los datos insertados
  }
};