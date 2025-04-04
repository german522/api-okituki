'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Preguntas", [
      {
        id: 1,
        id_test: 1,
        numero_pregunta: 1,
        pregunta: "En el último mes, ¿con qué frecuencia te has sentido afectado por algo que ocurrió inesperadamente?"
      },
      {
        id: 2,
        id_test: 1,
        numero_pregunta: 2,
        pregunta: "En el último mes, ¿con qué frecuencia te has sentido incapaz de controlar las cosas importantes en tu vida?"
      },
      {
        id: 3,
        id_test: 1,
        numero_pregunta: 3,
        pregunta: "En el último mes, ¿con qué frecuencia te has sentido incapaz de controlar las cosas importantes en tu vida?"
      },
      {
        id: 4,
        id_test: 1,
        numero_pregunta: 4,
        pregunta: "En el último mes, ¿con qué frecuencia has manejado con éxito los pequeños problemas irritantes de la vida?"
      },
      {
        id: 5,
        id_test: 1,
        numero_pregunta: 5,
        pregunta: "En el último mes, ¿con qué frecuencia has sentido que has afrontado efectivamente los cambios importantes que han estado ocurriendo en tu vida?"
      },
      {
        id: 6,
        id_test: 1,
        numero_pregunta: 6,
        pregunta: "En el último mes, ¿con qué frecuencia has estado seguro sobre tu capacidad para manejar tus problemas personales?"
      },
      {
        id: 7,
        id_test: 1,
        numero_pregunta: 7,
        pregunta: "En el último mes, ¿con qué frecuencia has sentido que las cosas van bien?"
      },
      {
        id: 8,
        id_test: 1,
        numero_pregunta: 8,
        pregunta: "En el último mes, ¿con qué frecuencia has sentido que no podías afrontar todas las cosas que tenías que hacer?"
      },
      {
        id: 9,
        id_test: 1,
        numero_pregunta: 9,
        pregunta: "En el último mes, ¿con qué frecuencia has podido controlar las dificultades de tu vida?"
      },
      {
        id: 10,
        id_test: 1,
        numero_pregunta: 10,
        pregunta: "En el último mes, ¿con qué frecuencia has sentido que tenías todo bajo control?"
      },
      {
        id: 11,
        id_test: 1,
        numero_pregunta: 11,
        pregunta: "En el último mes, ¿con qué frecuencia has estado enfadado porque las cosas que te han ocurrido estaban fuera de tu control?"
      },
      {
        id: 12,
        id_test: 1,
        numero_pregunta: 12,
        pregunta: "En el último mes, ¿con qué frecuencia has pensado sobre las cosas que te faltan por hacer?"
      },
      {
        id: 13,
        id_test: 1,
        numero_pregunta: 13,
        pregunta: "En el último mes, ¿con qué frecuencia has podido controlar la forma de pasar el tiempo?"
      },
      {
        id: 14,
        id_test: 1,
        numero_pregunta: 14,
        pregunta: "En el último mes, ¿con qué frecuencia has sentido que las dificultades se acumulan tanto que no puedes superarlas?"
      },

      // Segundo test: Estrés en tu estilo de vida
      {
        id: 15,
        id_test: 2,
        numero_pregunta: 1,
        pregunta: "Duermo menos de lo que mi cuerpo necesita."
      },
      {
        id: 16,
        id_test: 2,
        numero_pregunta: 2,
        pregunta: "Salto comidas o como a deshoras."
      },
      {
        id: 17,
        id_test: 2,
        numero_pregunta: 3,
        pregunta: "Tomo tranquilizantes cuando estoy nervioso."
      },
      {
        id: 18,
        id_test: 2,
        numero_pregunta: 4,
        pregunta: "Paso mucho tiempo viendo televisión o videos en mi tiempo libre."
      },
      {
        id: 19,
        id_test: 2,
        numero_pregunta: 5,
        pregunta: "No practico ejercicio físico."
      },
      {
        id: 20,
        id_test: 2,
        numero_pregunta: 6,
        pregunta: "Como con prisa o de manera ansiosa."
      },
      {
        id: 21,
        id_test: 2,
        numero_pregunta: 7,
        pregunta: "Consumo alimentos ricos en colesterol sin control."
      },
      {
        id: 22,
        id_test: 2,
        numero_pregunta: 8,
        pregunta: "Consumo pocas frutas y verduras."
      },
      {
        id: 23,
        id_test: 2,
        numero_pregunta: 9,
        pregunta: "Bebo poca agua durante el día."
      },
      {
        id: 24,
        id_test: 2,
        numero_pregunta: 10,
        pregunta: "Como snacks o alimentos poco saludables entre comidas."
      },
      {
        id: 25,
        id_test: 2,
        numero_pregunta: 11,
        pregunta: "Desayuno de manera ligera o lo salto por completo."
      },
      {
        id: 26,
        id_test: 2,
        numero_pregunta: 12,
        pregunta: "Ceno en exceso o muy tarde."
      },
      {
        id: 27,
        id_test: 2,
        numero_pregunta: 13,
        pregunta: "Fumo cigarrillos o consumo tabaco."
      },
      {
        id: 28,
        id_test: 2,
        numero_pregunta: 14,
        pregunta: "Consumo bebidas alcohólicas con frecuencia."
      },
      {
        id: 29,
        id_test: 2,
        numero_pregunta: 15,
        pregunta: "Paso poco tiempo en la naturaleza o al aire libre."
      },
      {
        id: 30,
        id_test: 2,
        numero_pregunta: 16,
        pregunta: "No practico ningún “hobby” o actividad que me relaje."
      },

      // Tercer test: Estrés en tu ambiente
      {
        id: 31,
        id_test: 3,
        numero_pregunta: 1,
        pregunta: "Mi familia suele ser bastante ruidosa."
      },
      {
        id: 32,
        id_test: 3,
        numero_pregunta: 2,
        pregunta: "Siento que necesito más espacio en mi casa."
      },
      {
        id: 33,
        id_test: 3,
        numero_pregunta: 3,
        pregunta: "Mis cosas están desordenadas o fuera de lugar."
      },
      {
        id: 34,
        id_test: 3,
        numero_pregunta: 4,
        pregunta: "No disfruto de la atmósfera hogareña."
      },
      {
        id: 35,
        id_test: 3,
        numero_pregunta: 5,
        pregunta: "Mis vecinos hacen mucho ruido."
      },
      {
        id: 36,
        id_test: 3,
        numero_pregunta: 6,
        pregunta: "Suele haber mucha gente en la zona donde vivo."
      },
      {
        id: 37,
        id_test: 3,
        numero_pregunta: 7,
        pregunta: "Mi casa está desordenada o sucia con frecuencia."
      },
      {
        id: 38,
        id_test: 3,
        numero_pregunta: 8,
        pregunta: "Me cuesta relajarme en mi casa."
      },
      {
        id: 39,
        id_test: 3,
        numero_pregunta: 9,
        pregunta: "Mi dormitorio se siente pequeño o agobiante."
      },
      {
        id: 40,
        id_test: 3,
        numero_pregunta: 10,
        pregunta: "Siento que vivimos demasiadas personas bajo el mismo techo."
      },
      {
        id: 41,
        id_test: 3,
        numero_pregunta: 11,
        pregunta: "No me siento satisfecho al contemplar la decoración de mi casa."
      },
      {
        id: 42,
        id_test: 3,
        numero_pregunta: 12,
        pregunta: "Considero que mi casa es insuficiente para nuestras necesidades."
      },
      {
        id: 43,
        id_test: 3,
        numero_pregunta: 13,
        pregunta: "En mi barrio hay olores desagradables."
      },
      {
        id: 44,
        id_test: 3,
        numero_pregunta: 14,
        pregunta: "La zona donde vivo es bastante ruidosa."
      },
      {
        id: 45,
        id_test: 3,
        numero_pregunta: 15,
        pregunta: "El aire de mi localidad está contaminado o no es puro."
      },
      {
        id: 46,
        id_test: 3,
        numero_pregunta: 16,
        pregunta: "Las calles y jardines de mi barrio están sucios o descuidados."
      },

      // Test 4: Estrés en tu empleo u ocupación
      {
        id: 47,
        id_test: 4,
        numero_pregunta: 1,
        pregunta: "Mi labor cotidiana me provoca mucha tensión."
      },
      {
        id: 48,
        id_test: 4,
        numero_pregunta: 2,
        pregunta: "En mis ratos libres pienso en los problemas del trabajo."
      },
      {
        id: 49,
        id_test: 4,
        numero_pregunta: 3,
        pregunta: "Mi horario de trabajo es irregular."
      },
      {
        id: 50,
        id_test: 4,
        numero_pregunta: 4,
        pregunta: "Mis ocupaciones no me permiten comer tranquilamente en casa."
      },
      {
        id: 51,
        id_test: 4,
        numero_pregunta: 5,
        pregunta: "Me llevo trabajo a casa para hacerlo por las noches o fines de semana."
      },
      {
        id: 52,
        id_test: 4,
        numero_pregunta: 6,
        pregunta: "Practico el pluriempleo (tengo varios empleos)."
      },
      {
        id: 53,
        id_test: 4,
        numero_pregunta: 7,
        pregunta: "Cuando trabajo, pierdo la noción del tiempo."
      },
      {
        id: 54,
        id_test: 4,
        numero_pregunta: 8,
        pregunta: "No me siento útil ni satisfecho en mis ocupaciones."
      },
      {
        id: 55,
        id_test: 4,
        numero_pregunta: 9,
        pregunta: "Tengo miedo constante a perder mi empleo."
      },
      {
        id: 56,
        id_test: 4,
        numero_pregunta: 10,
        pregunta: "Me llevo mal con mis compañeros de trabajo."
      },
      {
        id: 57,
        id_test: 4,
        numero_pregunta: 11,
        pregunta: "Mantengo malas relaciones con mi jefe."
      },
      {
        id: 58,
        id_test: 4,
        numero_pregunta: 12,
        pregunta: "Considero mi puesto laboral inestable."
      },
      {
        id: 59,
        id_test: 4,
        numero_pregunta: 13,
        pregunta: "Utilizo el automóvil como medio de trabajo de manera constante."
      },
      {
        id: 60,
        id_test: 4,
        numero_pregunta: 14,
        pregunta: "Me olvido de comer cuando estoy tratando de terminar una tarea."
      },
      {
        id: 61,
        id_test: 4,
        numero_pregunta: 15,
        pregunta: "Me siento poco capacitado para mis funciones."
      },
      {
        id: 62,
        id_test: 4,
        numero_pregunta: 16,
        pregunta: "Siento que mi jefe y/o familia no aprecian lo que hago."
      },
      {
        id: 63,
        id_test: 5,
        numero_pregunta: 1,
        pregunta: "Se me dificulta ser amable y cortés con la gente."
      },
      {
        id: 64,
        id_test: 5,
        numero_pregunta: 2,
        pregunta: "Suelo desconfiar de los demás."
      },
      {
        id: 65,
        id_test: 5,
        numero_pregunta: 3,
        pregunta: "Me molesta cuando mis planes dependen de otros."
      },
      {
        id: 66,
        id_test: 5,
        numero_pregunta: 4,
        pregunta: "Me afectan mucho las disputas o discusiones."
      },
      {
        id: 67,
        id_test: 5,
        numero_pregunta: 5,
        pregunta: "Siento que no tengo amigos dispuestos a escucharme."
      },
      {
        id: 68,
        id_test: 5,
        numero_pregunta: 6,
        pregunta: "Me siento insatisfecho con mis relaciones sexuales."
      },
      {
        id: 69,
        id_test: 5,
        numero_pregunta: 7,
        pregunta: "Me importa demasiado la opinión que otros tienen de mí."
      },
      {
        id: 70,
        id_test: 5,
        numero_pregunta: 8,
        pregunta: "Siempre deseo hacer las cosas mejor que los demás."
      },
      {
        id: 71,
        id_test: 5,
        numero_pregunta: 9,
        pregunta: "Pienso que mi pareja/amigos tienen mucho que cambiar para que la relación funcione."
      },
      {
        id: 72,
        id_test: 5,
        numero_pregunta: 10,
        pregunta: "Hablo demasiado o interrumpo a otros."
      },
      {
        id: 73,
        id_test: 5,
        numero_pregunta: 11,
        pregunta: "Al disentir con alguien, empiezo a levantar la voz sin darme cuenta."
      },
      {
        id: 74,
        id_test: 5,
        numero_pregunta: 12,
        pregunta: "Siento envidia cuando otros tienen más que yo."
      },
      {
        id: 75,
        id_test: 5,
        numero_pregunta: 13,
        pregunta: "Cuando discuto con alguien, pienso en lo que voy a decir mientras el otro habla."
      },
      {
        id: 76,
        id_test: 5,
        numero_pregunta: 14,
        pregunta: "Me pongo nervioso cuando me dan órdenes."
      },
      {
        id: 77,
        id_test: 6,
        numero_pregunta: 1,
        pregunta: "Me siento insatisfecho con mi vida."
      },
      {
        id: 78,
        id_test: 6,
        numero_pregunta: 2,
        pregunta: "Crítico con frecuencia a otras personas."
      },
      {
        id: 79,
        id_test: 6,
        numero_pregunta: 3,
        pregunta: "Me pongo nervioso cuando alguien conduce un automóvil despacio delante de mí."
      },
      {
        id: 80,
        id_test: 6,
        numero_pregunta: 4,
        pregunta: "Cuando hay cola en una ventanilla o establecimiento, me impaciento y me marcho."
      },
      {
        id: 81,
        id_test: 6,
        numero_pregunta: 5,
        pregunta: "Me exijo demasiado a la hora de cumplir fechas límite."
      },
      {
        id: 82,
        id_test: 6,
        numero_pregunta: 6,
        pregunta: "No tengo confianza en el futuro."
      },
      {
        id: 83,
        id_test: 6,
        numero_pregunta: 7,
        pregunta: "Tiendo a pensar en lo peor incluso cuando no hay razón para hacerlo."
      },
      {
        id: 84,
        id_test: 6,
        numero_pregunta: 8,
        pregunta: "Me molesta cuando no puedo hacer las cosas a mi manera."
      },
      {
        id: 85,
        id_test: 6,
        numero_pregunta: 9,
        pregunta: "No tengo buen sentido del humor."
      },
      {
        id: 86,
        id_test: 6,
        numero_pregunta: 10,
        pregunta: "No me agrada mi manera de ser."
      },
      {
        id: 87,
        id_test: 6,
        numero_pregunta: 11,
        pregunta: "Me pongo nervioso si me interrumpen cuando estoy en medio de una actividad."
      },
      {
        id: 88,
        id_test: 6,
        numero_pregunta: 12,
        pregunta: "Soy excesivamente perfeccionista."
      },
      {
        id: 89,
        id_test: 6,
        numero_pregunta: 13,
        pregunta: "Pienso con frecuencia en las personas que me deben dinero."
      },
      {
        id: 90,
        id_test: 6,
        numero_pregunta: 14,
        pregunta: "Me pongo muy nervioso cuando me meto en un atasco automovilístico."
      },
      {
        id: 91,
        id_test: 6,
        numero_pregunta: 15,
        pregunta: "Me aburro pronto de las vacaciones y quiero volver a la actividad productiva."
      },
      {
        id: 92,
        id_test: 6,
        numero_pregunta: 16,
        pregunta: "Tengo miedo constante de contraer una enfermedad fatal, como el cáncer."
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Preguntas", null, {}); // Esto elimina los datos insertados
  }
};