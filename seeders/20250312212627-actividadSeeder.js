'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("actividad", [
      {
        id: 1,
        id_tipo_actividades: 1, // Asegúrate de que exista este tipo de actividad
        nombre: "Respiración abdominal",
        descripcion: "La respiracion abdominal es fácil de realizar y es muy relajante. Intenta este ejercicio básico en cualquier momento que ocupes relajarte o aliviar el estrés"
      },
      {
        id: 2,
        id_tipo_actividades: 1, // Asegúrate de que exista este tipo de actividad
        nombre: "Respiración 4-7-8",
        descripcion: "Este ejercicio también utiliza la respiración abdominal para ayudarle a relajarse. Puede realizar este ejercicio sentado o recostado."
      },
      {
        id: 3,
        id_tipo_actividades: 1, // Asegúrate de que exista este tipo de actividad
        nombre: "Respiración de león o simhasana",
        descripcion: "Este ejercicio de respiración se suele utilizar para aliviar la tensión en la cara y en el cuello, a la vez que promueve una sensación de alivio y liberación del estrés acumulado. Quienes lo practican obtienen una lista de beneficios muy amplia, incluyendo algunas mejoras en la función cardiovascular."
      },
      {
        id: 4,
        id_tipo_actividades: 1, // Asegúrate de que exista este tipo de actividad
        nombre: "Respiración tarareante",
        descripcion: "La respiración tarareada, a veces llamada Bhramari pranayama o respiración de abejorro, es una técnica de respiración de ritmo lento que se acompaña de un zumbido de abeja cuando se exhala. Este tipo de respiración influye en múltiples sistemas de su cuerpo. De hecho, puede tener un impacto positivo en su sistema respiratorio, sistema nervioso autónomo, nivel de estrés y ansiedad."
      },
      {
        id: 5,
        id_tipo_actividades: 1, // Asegúrate de que exista este tipo de actividad
        nombre: "Respiración de caja",
        descripcion: "La respiración de caja se puede implementar en una variedad de circunstancias diferentes. Tampoco requiere un ambiente tranquilo para ser efectivo, razón por la cual los militares lo utilizan a menudo."
      },
      {
        id: 6,
        id_tipo_actividades: 2, // Asegúrate de que exista este tipo de actividad
        nombre: "Meditación relajante",
        descripcion: "La meditación relajante es una práctica que ayuda a concentrar la atención y a reducir el estrés. Se puede realizar de diferentes maneras, como con posturas, respiración controlada, o simplemente prestando atención al momento presente. "
      },
      {
        id: 7,
        id_tipo_actividades: 2, // Asegúrate de que exista este tipo de actividad
        nombre: "Yoga: Postura del cachorro",
        descripcion: "La postura del cachorro es fácil de hacer y es muy relajante. Pruebe esta postura del yoga para obtener un buen estiramiento de la columna vertebral y para relajarse."
      },
      {
        id: 8,
        id_tipo_actividades: 2, // Asegúrate de que exista este tipo de actividad
        nombre: "Yoga: Postura del gato y la vaca",
        descripcion: "Con la postura del gato y de la vaca, usted se mueve de una posición a otra, usando la respiración para saber cuándo cambiar de posición. Esta postura combina la respiración y el movimiento para ayudarle a aliviar el estrés y para hacer que la columna vertebral tenga más flexibilidad. Repita la secuencia entre 10 y 20 veces. Asegúrese de hacer los movimientos a medida que inhala y exhala."
      },
      {
        id: 9,
        id_tipo_actividades: 2, // Asegúrate de que exista este tipo de actividad
        nombre: "Yoga: Postura del zapatero",
        descripcion: "Para esta postura, es posible que deba usar accesorios para obtener todos los beneficios. Un accesorio es algo que se usa para apoyar diferentes partes del cuerpo en una postura del yoga. Se pueden comprar accesorios para yoga, como bloques o cilindros (almohadas rígidas grandes). O bien puede usar elementos que tenga en el hogar, como almohadas o mantas."
      },
      {
        id: 10,
        id_tipo_actividades: 2, // Asegúrate de que exista este tipo de actividad
        nombre: "Yoga: Postura del árbol",
        descripcion: "La postura del árbol, o Vriksasana en sánscrito, es una hazaña de yoga que consiste en mantener el peso del cuerpo sobre una pierna mientras la otra se dobla. Es una de las posturas básicas y más practicadas en yoga. Lo más complicado de esta postura es mantener el equilibrio a la vez que controlas tu respiración."
      },
      {
        id: 11,
        id_tipo_actividades: 3, // Asegúrate de que exista este tipo de actividad
        nombre: "Estiramiento de cuello",
        descripcion: "El estiramiento de cuello puede referirse a un procedimiento estético o a ejercicios que se realizan para mejorar la flexibilidad y reducir el dolor."
      },
      {
        id: 12,
        id_tipo_actividades: 3, // Asegúrate de que exista este tipo de actividad
        nombre: "Flexión de la espalda baja",
        descripcion: "La flexión de la espalda baja es el movimiento de doblar o curvar la columna vertebral hacia adelante. Es un movimiento fundamental que se realiza a diario al sentarse o atarse los zapatos."
      },
      {
        id: 13,
        id_tipo_actividades: 3, // Asegúrate de que exista este tipo de actividad
        nombre: "Rotación de la columna vertebral sentado",
        descripcion: "La rotación de la columna vertebral es un movimiento que consiste en girar la columna hacia un lado, mientras se dobla. Es uno de los movimientos básicos de la columna, junto con la flexión y la extensión."
      },
      {
        id: 14,
        id_tipo_actividades: 3, // Asegúrate de que exista este tipo de actividad
        nombre: "Extensión de hombros",
        descripcion: "La extensión de hombros es un movimiento que consiste en llevar el brazo hacia atrás desde una posición neutra. Es un ejercicio que fortalece los músculos de los hombros."
      },
      {
        id: 15,
        id_tipo_actividades: 3, // Asegúrate de que exista este tipo de actividad
        nombre: "Estiramiento de los músculos isquiotibiales",
        descripcion: "Los isquiotibiales son un grupo de tres músculos que se encuentran en la parte posterior del muslo, desde la cadera hasta la zona debajo de la rodilla. Su función principal es extender la cadera y flexionar la rodilla. El estiramiento de los músculos isquiotibiales es un ejercicio que se realiza para alargar y relajar la parte posterior de los muslos. "
      },
      {
        id: 16,
        id_tipo_actividades: 4, // Asegúrate de que exista este tipo de actividad
        nombre: "Técnica de los cinco sentidos",
        descripcion: "La técnica de los cinco sentidos es ideal tanto para niños como para adultos, nos ayuda a no solo concentrarnos en nuestro cuerpo si no también en nuestro alrededor."
      },
      {
        id: 17,
        id_tipo_actividades: 4, // Asegúrate de que exista este tipo de actividad
        nombre: "Exploración de texturas",
        descripcion: "Las texturas están presentes en todo lo que nos rodea y pueden influir en nuestras emociones y percepción del entorno. Esta actividad ayuda a enfocar la atención en el sentido del tacto y a estar más presente en el momento."
      },
      {
        id: 18,
        id_tipo_actividades: 4, // Asegúrate de que exista este tipo de actividad
        nombre: "Concentración de mi alrededor",
        descripcion: "La parte más atractiva de está técnica es que existen miles de combinaciones con la que se pueden realizar los pasos propuestos, ya que se pueden cambiar las categorías a objetos que te hagan sentir más cómodo o según el entorno en el que te encuentres."
      },
      {
        id: 19,
        id_tipo_actividades: 4, // Asegúrate de que exista este tipo de actividad
        nombre: "Poner los pies sobre la tierra",
        descripcion: "Estimular los pies puede tener muchos beneficios para la salud, como mejorar la circulación, reducir el estrés, y aliviar el dolor. También puede ayudar a prevenir lesiones y mejorar el sueño. Esta actividad también puede realizarse con los brazos o manos."
      },
      {
        id: 20,
        id_tipo_actividades: 4, // Asegúrate de que exista este tipo de actividad
        nombre: "Exploración sonora",
        descripcion: "El sonido está en todas partes y puede influir en nuestro estado de ánimo y nivel de concentración. Esta actividad ayuda a desarrollar la escucha activa y a notar detalles que normalmente pasan desapercibidos."
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("actividad", null, {}); // Esto elimina los datos insertados
  }
};