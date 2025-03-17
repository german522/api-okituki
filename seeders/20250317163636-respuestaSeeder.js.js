'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("respuestas", [
      {
        id: 1,
        id_pregunta: 1,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 2,
        id_pregunta: 1,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 3,
        id_pregunta: 1,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 4,
        id_pregunta: 1,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 5,
        id_pregunta: 1,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 6,
        id_pregunta: 2,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 7,
        id_pregunta: 2,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 8,
        id_pregunta: 2,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 9,
        id_pregunta: 2,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 10,
        id_pregunta: 2,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 11,
        id_pregunta: 3,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 12,
        id_pregunta: 3,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 13,
        id_pregunta: 3,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 14,
        id_pregunta: 3,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 15,
        id_pregunta: 3,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 16,
        id_pregunta: 4,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 17,
        id_pregunta: 4,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 18,
        id_pregunta: 4,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 19,
        id_pregunta: 4,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 20,
        id_pregunta: 4,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 21,
        id_pregunta: 5,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 22,
        id_pregunta: 5,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 23,
        id_pregunta: 5,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 24,
        id_pregunta: 5,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 25,
        id_pregunta: 5,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 26,
        id_pregunta: 6,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 27,
        id_pregunta: 6,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 28,
        id_pregunta: 6,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 29,
        id_pregunta: 6,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 30,
        id_pregunta: 6,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 31,
        id_pregunta: 7,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 32,
        id_pregunta: 7,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 33,
        id_pregunta: 7,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 34,
        id_pregunta: 7,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 35,
        id_pregunta: 7,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 36,
        id_pregunta: 8,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 37,
        id_pregunta: 8,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 38,
        id_pregunta: 8,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 39,
        id_pregunta: 8,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 40,
        id_pregunta: 8,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 41,
        id_pregunta: 9,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 42,
        id_pregunta: 9,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 43,
        id_pregunta: 9,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 44,
        id_pregunta: 9,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 45,
        id_pregunta: 9,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 46,
        id_pregunta: 10,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 47,
        id_pregunta: 10,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 48,
        id_pregunta: 10,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 49,
        id_pregunta: 10,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 50,
        id_pregunta: 10,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 51,
        id_pregunta: 11,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 52,
        id_pregunta: 11,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 53,
        id_pregunta: 11,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 54,
        id_pregunta: 11,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 55,
        id_pregunta: 11,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 56,
        id_pregunta: 12,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 57,
        id_pregunta: 12,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 58,
        id_pregunta: 12,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 59,
        id_pregunta: 12,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 60,
        id_pregunta: 12,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 61,
        id_pregunta: 13,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 62,
        id_pregunta: 13,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 63,
        id_pregunta: 13,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 64,
        id_pregunta: 13,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 65,
        id_pregunta: 13,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      {
        id: 66,
        id_pregunta: 14,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 67,
        id_pregunta: 14,
        respuesta_texto: "Casi nunca.",
        valor: 1
      },
      {
        id: 68,
        id_pregunta: 14,
        respuesta_texto: "De vez en cuando",
        valor: 2
      },
      {
        id: 69,
        id_pregunta: 14,
        respuesta_texto: "A menudo",
        valor: 3
      },
      {
        id: 70,
        id_pregunta: 14,
        respuesta_texto: "Muy a menudo.",
        valor: 4
      },
      // Aquí abajo comienzan las respuestas del test 2
      {
        id: 71,
        id_pregunta: 15,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 72,
        id_pregunta: 15,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 73,
        id_pregunta: 15,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 74,
        id_pregunta: 15,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 75,
        id_pregunta: 16,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 76,
        id_pregunta: 16,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 77,
        id_pregunta: 16,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 78,
        id_pregunta: 16,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 79,
        id_pregunta: 17,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 80,
        id_pregunta: 17,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 81,
        id_pregunta: 17,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 82,
        id_pregunta: 17,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 83,
        id_pregunta: 18,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 84,
        id_pregunta: 18,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 85,
        id_pregunta: 18,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 86,
        id_pregunta: 18,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 87,
        id_pregunta: 19,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 88,
        id_pregunta: 19,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 89,
        id_pregunta: 19,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 90,
        id_pregunta: 19,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 91,
        id_pregunta: 20,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 92,
        id_pregunta: 20,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 93,
        id_pregunta: 20,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 94,
        id_pregunta: 20,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 95,
        id_pregunta: 21,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 96,
        id_pregunta: 21,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 97,
        id_pregunta: 21,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 98,
        id_pregunta: 21,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 99,
        id_pregunta: 22,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 100,
        id_pregunta: 22,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 101,
        id_pregunta: 22,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 102,
        id_pregunta: 22,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 103,
        id_pregunta: 23,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 104,
        id_pregunta: 23,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 105,
        id_pregunta: 23,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 106,
        id_pregunta: 23,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 107,
        id_pregunta: 24,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 108,
        id_pregunta: 24,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 109,
        id_pregunta: 24,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 110,
        id_pregunta: 24,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 111,
        id_pregunta: 25,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 112,
        id_pregunta: 25,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 113,
        id_pregunta: 25,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 114,
        id_pregunta: 25,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 115,
        id_pregunta: 26,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 116,
        id_pregunta: 26,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 117,
        id_pregunta: 26,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 118,
        id_pregunta: 26,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 119,
        id_pregunta: 27,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 120,
        id_pregunta: 27,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 121,
        id_pregunta: 27,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 122,
        id_pregunta: 27,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 123,
        id_pregunta: 28,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 124,
        id_pregunta: 28,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 125,
        id_pregunta: 28,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 126,
        id_pregunta: 28,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 127,
        id_pregunta: 29,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 128,
        id_pregunta: 29,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 129,
        id_pregunta: 29,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 130,
        id_pregunta: 29,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 131,
        id_pregunta: 30,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 132,
        id_pregunta: 30,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 133,
        id_pregunta: 30,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 134,
        id_pregunta: 30,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },

      // aquí abajo comienzan las respuestas para el test 3
      {
        id: 135,
        id_pregunta: 31,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 136,
        id_pregunta: 31,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 137,
        id_pregunta: 31,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 138,
        id_pregunta: 31,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 139,
        id_pregunta: 32,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 140,
        id_pregunta: 32,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 141,
        id_pregunta: 32,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 142,
        id_pregunta: 32,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 143,
        id_pregunta: 33,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 144,
        id_pregunta: 33,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 145,
        id_pregunta: 33,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 146,
        id_pregunta: 33,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 147,
        id_pregunta: 34,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 148,
        id_pregunta: 34,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 149,
        id_pregunta: 34,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 150,
        id_pregunta: 34,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 151,
        id_pregunta: 35,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 152,
        id_pregunta: 35,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 153,
        id_pregunta: 35,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 154,
        id_pregunta: 35,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 155,
        id_pregunta: 36,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 156,
        id_pregunta: 36,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 157,
        id_pregunta: 36,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 158,
        id_pregunta: 36,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 159,
        id_pregunta: 37,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 160,
        id_pregunta: 37,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 161,
        id_pregunta: 37,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 162,
        id_pregunta: 37,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 163,
        id_pregunta: 38,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 164,
        id_pregunta: 38,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 165,
        id_pregunta: 38,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 166,
        id_pregunta: 38,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 167,
        id_pregunta: 39,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 168,
        id_pregunta: 39,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 169,
        id_pregunta: 39,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 170,
        id_pregunta: 39,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 171,
        id_pregunta: 40,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 172,
        id_pregunta: 40,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 173,
        id_pregunta: 40,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 174,
        id_pregunta: 40,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 175,
        id_pregunta: 41,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 176,
        id_pregunta: 41,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 177,
        id_pregunta: 41,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 178,
        id_pregunta: 41,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 179,
        id_pregunta: 42,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 180,
        id_pregunta: 42,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 181,
        id_pregunta: 42,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 182,
        id_pregunta: 42,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 183,
        id_pregunta: 43,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 184,
        id_pregunta: 43,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 185,
        id_pregunta: 43,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 186,
        id_pregunta: 43,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 187,
        id_pregunta: 44,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 188,
        id_pregunta: 44,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 189,
        id_pregunta: 44,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 190,
        id_pregunta: 44,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 191,
        id_pregunta: 45,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 192,
        id_pregunta: 45,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 193,
        id_pregunta: 45,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 194,
        id_pregunta: 45,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 195,
        id_pregunta: 46,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 196,
        id_pregunta: 46,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 197,
        id_pregunta: 46,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 198,
        id_pregunta: 46,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },

      // Aquí abajo van las respuestas del test 4
      {
        id: 199,
        id_pregunta: 47,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 200,
        id_pregunta: 47,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 201,
        id_pregunta: 47,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 202,
        id_pregunta: 47,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 203,
        id_pregunta: 48,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 204,
        id_pregunta: 48,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 205,
        id_pregunta: 48,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 206,
        id_pregunta: 48,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 207,
        id_pregunta: 49,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 208,
        id_pregunta: 49,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 209,
        id_pregunta: 49,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 210,
        id_pregunta: 49,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 211,
        id_pregunta: 50,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 212,
        id_pregunta: 50,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 213,
        id_pregunta: 50,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 214,
        id_pregunta: 50,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 215,
        id_pregunta: 51,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 216,
        id_pregunta: 51,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 217,
        id_pregunta: 51,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 218,
        id_pregunta: 51,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 219,
        id_pregunta: 52,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 220,
        id_pregunta: 52,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 221,
        id_pregunta: 52,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 222,
        id_pregunta: 52,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 223,
        id_pregunta: 53,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 224,
        id_pregunta: 53,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 225,
        id_pregunta: 53,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 226,
        id_pregunta: 53,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 227,
        id_pregunta: 54,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 228,
        id_pregunta: 54,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 229,
        id_pregunta: 54,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 230,
        id_pregunta: 54,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 231,
        id_pregunta: 55,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 232,
        id_pregunta: 55,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 233,
        id_pregunta: 55,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 234,
        id_pregunta: 55,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 235,
        id_pregunta: 56,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 236,
        id_pregunta: 56,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 237,
        id_pregunta: 56,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 238,
        id_pregunta: 56,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 239,
        id_pregunta: 57,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 240,
        id_pregunta: 57,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 241,
        id_pregunta: 57,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 242,
        id_pregunta: 57,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 243,
        id_pregunta: 58,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 244,
        id_pregunta: 58,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 245,
        id_pregunta: 58,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 246,
        id_pregunta: 58,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 247,
        id_pregunta: 59,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 248,
        id_pregunta: 59,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 249,
        id_pregunta: 59,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 250,
        id_pregunta: 59,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 251,
        id_pregunta: 60,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 252,
        id_pregunta: 60,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 253,
        id_pregunta: 60,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 254,
        id_pregunta: 60,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 255,
        id_pregunta: 61,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 256,
        id_pregunta: 61,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 257,
        id_pregunta: 61,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 258,
        id_pregunta: 61,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 259,
        id_pregunta: 62,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 260,
        id_pregunta: 62,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 261,
        id_pregunta: 62,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 262,
        id_pregunta: 62,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      // Aquí abajo se encuentran las respuestas para el test 5
      {
        id: 263,
        id_pregunta: 63,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 264,
        id_pregunta: 63,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 265,
        id_pregunta: 63,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 266,
        id_pregunta: 63,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 267,
        id_pregunta: 64,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 268,
        id_pregunta: 64,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 269,
        id_pregunta: 64,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 270,
        id_pregunta: 64,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 271,
        id_pregunta: 65,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 272,
        id_pregunta: 65,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 273,
        id_pregunta: 65,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 274,
        id_pregunta: 65,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 275,
        id_pregunta: 66,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 276,
        id_pregunta: 66,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 277,
        id_pregunta: 66,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 278,
        id_pregunta: 66,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 279,
        id_pregunta: 67,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 280,
        id_pregunta: 67,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 281,
        id_pregunta: 67,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 282,
        id_pregunta: 67,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 283,
        id_pregunta: 68,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 284,
        id_pregunta: 68,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 285,
        id_pregunta: 68,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 286,
        id_pregunta: 68,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 287,
        id_pregunta: 69,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 288,
        id_pregunta: 69,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 289,
        id_pregunta: 69,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 290,
        id_pregunta: 69,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 291,
        id_pregunta: 70,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 292,
        id_pregunta: 70,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 293,
        id_pregunta: 70,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 294,
        id_pregunta: 70,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 295,
        id_pregunta: 71,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 296,
        id_pregunta: 71,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 297,
        id_pregunta: 71,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 298,
        id_pregunta: 71,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 299,
        id_pregunta: 72,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 300,
        id_pregunta: 72,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 301,
        id_pregunta: 72,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 302,
        id_pregunta: 72,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 303,
        id_pregunta: 73,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 304,
        id_pregunta: 73,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 305,
        id_pregunta: 73,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 306,
        id_pregunta: 73,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 307,
        id_pregunta: 74,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 308,
        id_pregunta: 74,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 309,
        id_pregunta: 74,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 310,
        id_pregunta: 74,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 311,
        id_pregunta: 75,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 312,
        id_pregunta: 75,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 313,
        id_pregunta: 75,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 314,
        id_pregunta: 75,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 315,
        id_pregunta: 76,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 316,
        id_pregunta: 76,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 317,
        id_pregunta: 76,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 318,
        id_pregunta: 76,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      // aquí abajo se encuentran las respuestas para el test 6
      {
        id: 319,
        id_pregunta: 77,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 320,
        id_pregunta: 77,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 321,
        id_pregunta: 77,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 322,
        id_pregunta: 77,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 323,
        id_pregunta: 78,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 324,
        id_pregunta: 78,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 325,
        id_pregunta: 78,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 326,
        id_pregunta: 78,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 327,
        id_pregunta: 79,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 328,
        id_pregunta: 79,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 329,
        id_pregunta: 79,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 330,
        id_pregunta: 79,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 331,
        id_pregunta: 80,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 332,
        id_pregunta: 80,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 333,
        id_pregunta: 80,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 334,
        id_pregunta: 80,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 335,
        id_pregunta: 81,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 336,
        id_pregunta: 81,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 337,
        id_pregunta: 81,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 338,
        id_pregunta: 81,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 339,
        id_pregunta: 82,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 340,
        id_pregunta: 82,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 341,
        id_pregunta: 82,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 342,
        id_pregunta: 82,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 343,
        id_pregunta: 83,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 344,
        id_pregunta: 83,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 345,
        id_pregunta: 83,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 346,
        id_pregunta: 83,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 347,
        id_pregunta: 84,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 348,
        id_pregunta: 84,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 349,
        id_pregunta: 84,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 350,
        id_pregunta: 84,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 351,
        id_pregunta: 85,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 352,
        id_pregunta: 85,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 353,
        id_pregunta: 85,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 354,
        id_pregunta: 85,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 355,
        id_pregunta: 86,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 356,
        id_pregunta: 86,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 357,
        id_pregunta: 86,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 358,
        id_pregunta: 86,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 359,
        id_pregunta: 87,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 360,
        id_pregunta: 87,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 361,
        id_pregunta: 87,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 362,
        id_pregunta: 87,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 363,
        id_pregunta: 88,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 364,
        id_pregunta: 88,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 365,
        id_pregunta: 88,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 366,
        id_pregunta: 88,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 367,
        id_pregunta: 89,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 368,
        id_pregunta: 89,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 369,
        id_pregunta: 89,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 370,
        id_pregunta: 89,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 371,
        id_pregunta: 90,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 372,
        id_pregunta: 90,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 373,
        id_pregunta: 90,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 374,
        id_pregunta: 90,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 375,
        id_pregunta: 91,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 376,
        id_pregunta: 91,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 377,
        id_pregunta: 91,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 378,
        id_pregunta: 91,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      },
      {
        id: 379,
        id_pregunta: 92,
        respuesta_texto: "Nunca.",
        valor: 0
      },
      {
        id: 380,
        id_pregunta: 92,
        respuesta_texto: "Casi Nunca.",
        valor: 1
      },
      {
        id: 381,
        id_pregunta: 92,
        respuesta_texto: "A Veces.",
        valor: 2
      },
      {
        id: 382,
        id_pregunta: 92,
        respuesta_texto: "Frecuentemente.",
        valor: 3
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("respuestas", null, {}); // Esto elimina los datos insertados
  }
};