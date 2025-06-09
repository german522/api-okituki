'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Descripcion_Actividad", [
      {
        id: 1,
        id_actividad: 1, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Siéntese o acuéstese en una posición cómoda.",
        URL_imagen: "/uploads/1.jpg"
      },
      {
        id: 2,
        id_actividad: 1, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Coloque una mano sobre el abdomen justo debajo de las costillas y la otra mano sobre el pecho.",
        URL_imagen: "/uploads/2.jpg"
      },
      {
        id: 3,
        id_actividad: 1, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Respire hondo por la nariz y deje que el abdomen le empuje la mano. El pecho no debería moverse.",
        URL_imagen: "/uploads/3.jpg"
      },
      {
        id: 4,
        id_actividad: 1, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Exhale a través de los labios fruncidos como si estuviese silbando. Sienta cómo se hunde la mano sobre su abdomen y utilícela para expulsar todo el aire hacia afuera.",
        URL_imagen: "/uploads/4.jpg"
      },
      {
        id: 5,
        id_actividad: 1, // Asegúrate de que exista este tipo de actividad
        numero_paso: 5,
        instruccion: "Realice este ejercicio de respiración entre 3 y 10 veces. Tómese su tiempo con cada respiración.",
        URL_imagen: "/uploads/5.jpg"
      },
      {
        id: 6,
        id_actividad: 2, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Para comenzar, coloque una mano sobre el abdomen y la otra sobre el pecho, al igual que en el ejercicio de respiración abdominal.",
        URL_imagen: "/uploads/6.jpg"
      },
      {
        id: 7,
        id_actividad: 2, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Respire profunda y lentamente desde el abdomen y cuente en silencio hasta 4 a medida que inhala.",
        URL_imagen: "/uploads/7.jpg"
      },
      {
        id: 8,
        id_actividad: 2, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Contenga la respiración y cuente en silencio del 1 al 7.",
        URL_imagen: "/uploads/8.jpg"
      },
      {
        id: 9,
        id_actividad: 2, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Exhale por completo a medida que cuenta en silencio del 1 al 8. Intente sacar todo el aire de los pulmones para cuando llegue a 8.",
        URL_imagen: "/uploads/9.jpg"
      },
      {
        id: 10,
        id_actividad: 2, // Asegúrate de que exista este tipo de actividad
        numero_paso: 5,
        instruccion: "Repítalo entre 3 y 7 veces o hasta que se sienta tranquilo.",
        URL_imagen: "/uploads/10.jpg"
      },
      {
        id: 11,
        id_actividad: 3, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "El ejercicio se lleva a cabo en la postura de yoga simhasana, bien sea sentado o de rodillas.",
        URL_imagen: "/uploads/ 11.jpg"
      },
      {
        id: 12,
        id_actividad: 3, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "La idea es abrir la boca lo más grande que se pueda y sacar la lengua mientras se inhala por la nariz; y exhalar con fuerza a la vez que se emite un fuerte rugido, como el de un león.",
        URL_imagen: "/uploads/12.jpg"
      },
      {
        id: 13,
        id_actividad: 3, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Después de esto, se debe respirar con normalidad, hasta que se reinicie el ejercicio nuevamente. Se pueden realizar al menos siete repeticiones",
        URL_imagen: "/uploads/13.jpg"
      },
      {
        id: 14,
        id_actividad: 4, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Ponerse en una posición cómoda, como sentarse en el suelo con las piernas cruzadas.",
        URL_imagen: "/uploads/14.jpg"
      },
      {
        id: 15,
        id_actividad: 4, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Inhalar y exhalar por la nariz, relajando la cara y la mandíbula.",
        URL_imagen: "/uploads/15.jpg"
      },
      {
        id: 16,
        id_actividad: 4, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Colocar los dedos índices sobre el cartílago de las orejas, bloqueando cualquier ruido o sonido.",
        URL_imagen: "/uploads/16.jpg"
      },
      {
        id: 17,
        id_actividad: 4, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Respirar profundamente por la nariz y exhalar por la nariz, emitiendo un zumbido o zumbido al exhalar. (Mantener los oídos tapados).",
        URL_imagen: "/uploads/17.jpg"
      },
      {
        id: 18,
        id_actividad: 4, // Asegúrate de que exista este tipo de actividad
        numero_paso: 5,
        instruccion: "Continuar este proceso durante al menos 6 ciclos de respiración.",
        URL_imagen: "/uploads/18.jpg"
      },
      {
        id: 19,
        id_actividad: 5, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Inhalar por la nariz mientras se cuenta hasta cuatro.",
        URL_imagen: "/uploads/19.jpg"
      },
      {
        id: 20,
        id_actividad: 5, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Contener la respiración mientras se cuenta hasta cuatro.",
        URL_imagen: "/uploads/20.jpg"
      },
      {
        id: 21,
        id_actividad: 5, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Exhalar mientras se cuenta hasta cuatro.",
        URL_imagen: "/uploads/21.jpg"
      },
      {
        id: 22,
        id_actividad: 5, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Contener la respiración mientras se cuenta hasta cuatro.",
        URL_imagen: "/uploads/22.jpg"
      },
      {
        id: 23,
        id_actividad: 5, // Asegúrate de que exista este tipo de actividad
        numero_paso: 5,
        instruccion: "Es recomendable repetir de 4 a 6 veces o hasta que se sienta una mejora",
        URL_imagen: "/uploads/23.jpg"
      },
      {
        id: 24,
        id_actividad: 6, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Siéntese en una postura cómoda, ya sea en una silla o en el suelo. O túmbese, si le resulta más cómodo. Puede cerrar los ojos o mirar hacia abajo, manteniendo la mirada unos centímetros por delante de usted en el suelo.",
        URL_imagen: "/uploads/24.jpg"
      },
      {
        id: 25,
        id_actividad: 6, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Recuérdese a sí mismo lo que está haciendo. Antes de empezar, dígase a sí mismo que está ahí para centrarse en el momento presente. Esto puede ayudarle a evitar que su mente divague. Su rutina diaria y otras distracciones le estarán esperando después de la sesión de meditación.",
        URL_imagen: "/uploads/25.jpg"
      },
      {
        id: 26,
        id_actividad: 6, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Empiece a prestar atención a su respiración. Es una buena forma de centrar su atención en lo que está sucediendo en este momento. No intente cambiar la respiración. Solo note cómo se siente en los pulmones y en el pecho.",
        URL_imagen: "/uploads/26.jpg"
      },
      {
        id: 27,
        id_actividad: 6, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Fíjese en sus pensamientos y olvídelos. Por ejemplo, si piensa: 'Me pregunto qué tendré que hacer en la reunión de trabajo de las 10 de la mañana', reconozca el pensamiento, pero olvídelo. A continuación, vuelva a centrarse en el momento presente y en su respiración. Puede que haga esto una y otra vez durante una sesión de meditación. No pasa nada.",
        URL_imagen: "/uploads/27.jpg"
      },
      {
        id: 28,
        id_actividad: 6, // Asegúrate de que exista este tipo de actividad
        numero_paso: 5,
        instruccion: "Fíjese en sus sentimientos, como la ira, la impaciencia, la tristeza o la felicidad. No intente aferrarse o desprenderse de estos sentimientos. Forman parte de su experiencia del momento presente. Vea si puede centrarse en la sensación de impaciencia en lugar de en los pensamientos sobre temas inquietantes ¿Dónde siente la impaciencia en su cuerpo? ¿La siente tensa? ¿Afecta a su respiración?",
        URL_imagen: " /uploads/28.jpg"
      },
      {
        id: 29,
        id_actividad: 6, // Asegúrate de que exista este tipo de actividad
        numero_paso: 6,
        instruccion: "Mantener la atención en su respiración le ayudará a mantenerse centrado y a no perderse en los pensamientos que puedan desencadenar sus sentimientos. Tome su tiempo antes de terminar la actividad, no sienta prisa.",
        URL_imagen: "/uploads/29.jpg"
      },
      {
        id: 30,
        id_actividad: 7, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Comience apoyando las manos y las rodillas en una colchoneta o en una alfombra. Alinee su cuerpo, de manera que los hombros estén directamente sobre las muñecas y las caderas sigan la línea de las rodillas. Inhale.",
        URL_imagen: "/uploads/30.jpg"
      },
      {
        id: 31,
        id_actividad: 7, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Exhale y, luego, mueva las manos algunas pulgadas hacia el frente y baje las nalgas hacia los talones, solo hasta la mitad. Los brazos deben presionar hacia adelante, y solo las manos deben tocar el piso.",
        URL_imagen: "/uploads/31.jpg"
      },
      {
        id: 32,
        id_actividad: 7, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Después, baje la frente hasta la colchoneta o la alfombra y relaje el cuello. Presione las manos hacia abajo y hacia adelante sobre el piso, y sienta cómo se estiran los brazos. Al mismo tiempo, mueva las caderas hacia atrás en dirección a los talones. Al mover los brazos y las caderas en direcciones opuestas, puede estirar bien la columna vertebral. En esta posición, respire normalmente y sienta cómo se estira la columna vertebral. Mantenga esta postura entre 30 segundos y 1 minuto.",
        URL_imagen: "/uploads/32.jpg"
      },
      {
        id: 33,
        id_actividad: 7, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Apoye las nalgas sobre los talones. Relájese.",
        URL_imagen: "/uploads/33.jpg"
      },
      {
        id: 34,
        id_actividad: 8, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Comience apoyando las manos y las rodillas en una colchoneta o en una alfombra, con el cuerpo alineado, de manera que los hombros estén directamente sobre las muñecas y las caderas sigan la línea de las rodillas. La espalda debe estar derecha, y el cuello debe extenderse en forma recta desde la columna vertebral. Debe mirar hacia el piso.",
        URL_imagen: "/uploads/yoga 3.1.png"
      },
      {
        id: 35,
        id_actividad: 8, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "La próxima vez que exhale, encorve la columna vertebral hacia arriba, como un gato. Sin mover las rodillas y los hombros, arquee la cabeza hacia el piso. Intente no tocar el pecho con la barbilla.",
        URL_imagen: "/uploadas/yoga 3.2.png"
      },
      {
        id: 36,
        id_actividad: 8, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Mientras inhala, arquee la espalda y levante el pecho y los isquiones (los huesos de las nalgas que puede sentir cuando se sienta en una silla dura) hacia arriba. Al hacer esto, el abdomen se moverá naturalmente hacia el piso. Se levanta la cabeza, manteniendo la vista recta hacia el frente (no mirando hacia arriba).",
        URL_imagen: "/uploads/yoga 3.3.png"
      },
      {
        id: 37,
        id_actividad: 8, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Repita la secuencia entre 10 y 20 veces. Asegúrese de hacer los movimientos a medida que inhala y exhala.",
        URL_imagen: "/uploads/yoga 3.4.png"
      },
      {
        id: 38,
        id_actividad: 9, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Es recomendable usar uno o más de los siguientes accesorios: Una o más mantas rígidas y dobladas, para apoyar la espalda. Una manta enrollada, almohadas rígidas o bloques para yoga, para apoyar las rodillas. Un cojín, para apoyar el cuello.",
        URL_imagen: "/uploads/yoga 4.1.png"
      },
      {
        id: 39,
        id_actividad: 9, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Siéntese en el piso presionando las plantas de los pies juntas. Las rodillas deben estar flexionadas, y los pies deben estar lo más cerca posible del cuerpo sin esforzarse, de manera que se sienta cómodo.",
        URL_imagen: "/uploads/yoga 4.2.png"
      },
      {
        id: 40,
        id_actividad: 9, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Si piensa usar accesorios, coloque los bloques de yoga debajo de las rodillas o use una manta (vea el paso 4 para obtener instrucciones sobre cómo posicionar la manta). Debe brindar apoyo a las rodillas al nivel que le resulte cómodo cuando se recline. Use más de una almohada si es necesario. No debe esforzarse por tener las rodillas lo más cerca posible del piso.",
        URL_imagen: "/uploads/yoga 4.3.png"
      },
      {
        id: 41,
        id_actividad: 9, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Si usa una manta para sostener las rodillas, envuélvala a su alrededor por debajo de las rodillas.",
        URL_imagen: "/uploads/yoga 4.4.png"
      },
      {
        id: 42,
        id_actividad: 9, // Asegúrate de que exista este tipo de actividad
        numero_paso: 5,
        instruccion: "Para sostener la espalda, tome una o más mantas firmes y colóquelas extendiéndolas a lo largo de toda la espalda, para que el torso y la cabeza se apoyen cuando se recueste. Asegúrese de que las mantas sean lo suficientemente anchas para que también puedan sostener los hombros. Es recomendable que coloque las mantas de manera que se adapten a la curvatura de la columna vertebral cuando se recueste, como se muestra en la imagen. También puede usar una manta como almohada para sostener la cabeza.",
        URL_imagen: "/uploads/yoga 4.5.png"
      },
      {
        id: 43,
        id_actividad: 9, // Asegúrate de que exista este tipo de actividad
        numero_paso: 6,
        instruccion: "Debería sentarse justo delante de las mantas; de esta manera, cuando se recueste, el torso y la cabeza podrán apoyarse. Es posible que tenga que probar para ver cuántas mantas debe usar.",
        URL_imagen: "/uploads/yoga 4.6.png"
      },
      {
        id: 44,
        id_actividad: 9, // Asegúrate de que exista este tipo de actividad
        numero_paso: 7,
        instruccion: "Recuéstese suavemente sobre el piso.",
        URL_imagen: "/uploads/yoga 4.7.png"
      },
      {
        id: 45,
        id_actividad: 9, // Asegúrate de que exista este tipo de actividad
        numero_paso: 8,
        instruccion: "Coloque los brazos a los costados en un ángulo de 45 grados, aproximadamente, con las palmas hacia arriba. Cierre los ojos y respire normalmente. Relájese.",
        URL_imagen: "/uploads/yoga 4.8.png"
      },
      {
        id: 46,
        id_actividad: 9, // Asegúrate de que exista este tipo de actividad
        numero_paso: 9,
        instruccion: "Al principio, mantenga esta postura durante un 1 minuto, como máximo. Después, puede mantener la postura durante períodos más largos de hasta 10 minutos.",
        URL_imagen: "/uploads/yoga 4.9.png"
      },
      {
        id: 47,
        id_actividad: 10, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Colócate en una posición vertical, es decir, de pie. Colócate sobre tus dos pies juntos, recta como un palo, pero sin forzar la curvatura natural de la espalda baja.",
        URL_imagen: "/uploads/47.jpg"
      },
      {
        id: 48,
        id_actividad: 10, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "En esta posición erguida, eleva uno de tus pies y déjalo descansar sobre tu pantorrilla o gemelo (no rodilla), donde más cómodo te sea.",
        URL_imagen: "/uploads/48.jpg"
      },
      {
        id: 49,
        id_actividad: 10, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Ahora, manteniendo el equilibrio, sube tus brazos y junta las palmas de tus manos sobre tu cabeza o delante de tu pecho. ",
        URL_imagen: "/uploads/49.jpg"
      },
      {
        id: 50,
        id_actividad: 10, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Inténtalo las veces que quieras hasta que te sientas a gusto con ella, en ambos lados del cuerpo por varios segundos.",
        URL_imagen: "/uploads/50.jpg"
      },
      {
        id: 51,
        id_actividad: 11, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Inclina el mentón hacia abajo en dirección al pecho para estirar la parte posterior del cuello.",
        URL_imagen: ""
      },
      {
        id: 52,
        id_actividad: 11, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Con cada inhalación, mueve lentamente el mentón de un hombro al otro.",
        URL_imagen: ""
      },
      {
        id: 53,
        id_actividad: 11, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Debes sentir un agradable estiramiento a ambos lados del cuello.",
        URL_imagen: ""
      },
      {
        id: 54,
        id_actividad: 12, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Simplemente coloca las palmas de las manos en la zona lumbar de la espalda e inclínate suavemente hacia atrás mirando hacia arriba.",
        URL_imagen: "/uploads/Estiramiento 2.1.png"
      },
      {
        id: 55,
        id_actividad: 12, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Mantente en esa posición durante 10 segundos.",
        URL_imagen: "/uploads/Estiramiento 2.2.png"
      },
      {
        id: 56,
        id_actividad: 12, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Inhala y exhala lentamente, estirándote cada vez más mientras exhalas. Solo asegúrate de no estirarte tanto que sientas dolor",
        URL_imagen: "/uploads/Estiramiento 2.3.png"
      },
      {
        id: 57,
        id_actividad: 13, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Mientras estés sentado, cruza los brazos sobre el pecho y coloca las manos en los hombros opuestos.",
        URL_imagen: "/uploads/Estiramiento 3.1.png"
      },
      {
        id: 58,
        id_actividad: 13, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Ahora mantén las caderas mirando hacia adelante y rota la parte superior del cuerpo, girando los hombros hacia un lado.",
        URL_imagen: "/uploads/Estiramiento 3.2.png"
      },
      {
        id: 59,
        id_actividad: 13, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Mantente en esta posición durante cinco segundos y respira profundamente.",
        URL_imagen: "/uploads/Estiramiento 3.3.png"
      },
      {
        id: 60,
        id_actividad: 13, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "En la próxima inhalación, regresa al centro y luego cambia de lado.",
        URL_imagen: "/uploads/Estiramiento 3.4.png"
      },
      {
        id: 61,
        id_actividad: 14, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Colócate de pie y entrelaza las manos detrás de la espalda.",
        URL_imagen: "/uploads/Estiramiento 4.1.png"
      },
      {
        id: 62,
        id_actividad: 14, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Después, levanta suavemente los brazos alejándolos del cuerpo hasta que sientas que se estiran los hombros.",
        URL_imagen: "/uploads/Estiramiento 4.2.png"
      },
      {
        id: 63,
        id_actividad: 14, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "No te preocupes si no se tocan las manos. Simplemente trata de llegar lo más lejos posible que puedas hacia atrás y levanta los brazos lentamente.",
        URL_imagen: "/uploads/Estiramiento 4.3.png"
      },
      {
        id: 64,
        id_actividad: 15, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Mientras estás sentado, estira la pierna derecha hacia adelante y coloca la planta del pie izquierdo en la parte interna del muslo derecho.",
        URL_imagen: "/uploads/Estiramiento 5.1.png"
      },
      {
        id: 65,
        id_actividad: 15, // Asegúrate de que exista este tipo de actividad
        numero_paso: 2,
        instruccion: "Asegúrate de que las caderas estén mirando hacia adelante.",
        URL_imagen: "/uploads/Estiramiento 5.2.png"
      },
      {
        id: 66,
        id_actividad: 15, // Asegúrate de que exista este tipo de actividad
        numero_paso: 3,
        instruccion: "Ahora inclina la parte superior del cuerpo tan lejos como puedas sobre la pierna derecha de manera que sientas un estiramiento en la parte trasera de la pierna.",
        URL_imagen: "/uploads/Estiramiento 5.3.png"
      },
      {
        id: 67,
        id_actividad: 15, // Asegúrate de que exista este tipo de actividad
        numero_paso: 4,
        instruccion: "Mantente en esta posición durante 10 segundos y respira profundamente.",
        URL_imagen: "/uploads/Estiramiento 5.4.png"
      },
      {
        id: 68,
        id_actividad: 15, // Asegúrate de que exista este tipo de actividad
        numero_paso: 5,
        instruccion: "Con cada exhalación deja que la parte superior del cuerpo caiga un poquito más con el estiramiento. Luego, cambia de pierna.",
        URL_imagen: "/uploads/Estiramiento 5.5.png"
      },
      {
        id: 69,
        id_actividad: 16, // Asegúrate de que exista este tipo de actividad
        numero_paso: 1,
        instruccion: "Cinco cosas que puedas VER. Busca cinco objetos que puedas ver y describe mentalmente, uno por uno, sus características visuales: el color, el espacio que ocupa, los detalles, etc.",
        URL_imagen: "/uploads/69.jpg"
      },
      {
    id: 70,
    id_actividad: 16,// Asegúrate de que exista este tipo de actividad
    numero_paso: 2,
    instruccion: "Cuatro cosas que puedas OÍR...",
    URL_imagen: "/uploads/70.jpg"
  },
  {
    id: 71,
    id_actividad: 16,// Asegúrate de que exista este tipo de actividad
    numero_paso: 3,
    instruccion: "Tres cosas que puedas SENTIR...",
    URL_imagen: "/uploads/71.jpg"
  },
  {
    id: 72,
    id_actividad: 16,// Asegúrate de que exista este tipo de actividad
    numero_paso: 4,
    instruccion: "Dos cosas que puedas OLER...",
    URL_imagen: "/uploads/72.jpg"
  },
  {
    id: 73,
    id_actividad: 16,// Asegúrate de que exista este tipo de actividad
    numero_paso: 5,
    instruccion: "Una cosa que puedas SABOREAR...",
    URL_imagen: "/uploads/73.jpg"
  },
  {
    id: 74,
    id_actividad: 17,// Asegúrate de que exista este tipo de actividad
    numero_paso: 1,
    instruccion: "Busca cinco objetos con texturas diferentes...",
    URL_imagen: "/uploads/74.jpg"
  },
  {
    id: 75,
    id_actividad: 17,// Asegúrate de que exista este tipo de actividad
    numero_paso: 2,
    instruccion: "Toca cada objeto y concéntrate...",
    URL_imagen: "/uploads/75.jpg"
  },
  {
    id: 76,
    id_actividad: 17,// Asegúrate de que exista este tipo de actividad
    numero_paso: 3,
    instruccion: "Describa cómo se siente...",
    URL_imagen: "/uploads/76.jpg"
  },
  {
    id: 77,
    id_actividad: 17,// Asegúrate de que exista este tipo de actividad
    numero_paso: 4,
    instruccion: "Intenta encontrar texturas más complejas...",
    URL_imagen: "/uploads/77.jpg"
  },
  {
    id: 78,
    id_actividad: 18,// Asegúrate de que exista este tipo de actividad
    numero_paso: 1,
    instruccion: "Mire a su alrededor y señale 5 cosas que sean azules.",
    URL_imagen: "/uploads/78.jpg"
  },
  {
    id: 79,
    id_actividad: 18,// Asegúrate de que exista este tipo de actividad
    numero_paso: 2,
    instruccion: "Ahora cinco cosas que sean círculos.",
    URL_imagen: "/uploads/79.jpg"
  },
  {
    id: 80,
    id_actividad: 18,// Asegúrate de que exista este tipo de actividad
    numero_paso: 3,
    instruccion: "Ahora cinco cosas que sean suaves.",
    URL_imagen: "/uploads/80.jpg"
  },
  {
    id: 81,
    id_actividad: 18,// Asegúrate de que exista este tipo de actividad
    numero_paso: 4,
    instruccion: "Ahora cinco cosas que quepan en su mano.",
    URL_imagen: "/uploads/81.jpg"
  },
  {
    id: 82,
    id_actividad: 18,// Asegúrate de que exista este tipo de actividad
    numero_paso: 5,
    instruccion: "Por último cinco cosas que lo hagan sentir seguro.",
    URL_imagen: "/uploads/82.jpg"
  },
  {
    id: 83,
    id_actividad: 18,// Asegúrate de que exista este tipo de actividad
    numero_paso: 6,
    instruccion: "Recuerda que puedes repetir las veces que sean necesarias...",
    URL_imagen: "/uploads/83.jpg"
  },
  {
    id: 84,
    id_actividad: 19,// Asegúrate de que exista este tipo de actividad
    numero_paso: 1,
    instruccion: "Quítate los zapatos y busca una superficie con tierra...",
    URL_imagen: "/uploads/84.jpg"
  },
  {
    id: 85,
    id_actividad: 19,// Asegúrate de que exista este tipo de actividad
    numero_paso: 2,
    instruccion: "Camina sin detenerte durante diez minutos...",
    URL_imagen: "/uploads/85.jpg"
  },
  {
    id: 86,
    id_actividad: 19,// Asegúrate de que exista este tipo de actividad
    numero_paso: 3,
    instruccion: "Concéntrate en lo que tus pies están sintiendo...",
    URL_imagen: "/uploads/86.jpg"
  },
  {
    id: 87,
    id_actividad: 19,// Asegúrate de que exista este tipo de actividad
    numero_paso: 4,
    instruccion: "Respira pausadamente hasta que se vuelva natural.",
    URL_imagen: "/uploads/87.jpg"
  },
  {
    id: 88,
    id_actividad: 20,// Asegúrate de que exista este tipo de actividad
    numero_paso: 1,
    instruccion: "Encuentra un lugar tranquilo y elige un sonido...",
    URL_imagen: "/uploads/88.jpg"
  },
  {
    id: 89,
    id_actividad: 20,// Asegúrate de que exista este tipo de actividad
    numero_paso: 2,
    instruccion: "Concéntrate únicamente en ese sonido.",
    URL_imagen: "/uploads/89.jpg"
  },
  {
    id: 90,
    id_actividad: 20,// Asegúrate de que exista este tipo de actividad
    numero_paso: 3,
    instruccion: "Describe sus características...",
    URL_imagen: "/uploads/90.jpg"
  },
  {
    id: 91,
    id_actividad: 20,// Asegúrate de que exista este tipo de actividad
    numero_paso: 4,
    instruccion: "Intenta percibir variaciones en el sonido...",
    URL_imagen: "/uploads/91.jpg"
  }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Descripcion_Actividad", null, {}); // Esto elimina los datos insertados
  }
};