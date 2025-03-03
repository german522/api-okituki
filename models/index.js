require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: console.log
  }
);

module.exports = { sequelize, Sequelize };


// Importar modelos
const Persona = require("./persona")(sequelize, Sequelize.DataTypes);

const db = { sequelize, Sequelize, Persona };

module.exports = db;
