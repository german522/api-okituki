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

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Persona = require("./persona")(sequelize, Sequelize.DataTypes);
db.Usuario = require("./usuario")(sequelize, Sequelize.DataTypes);
db.Psicologo = require("./psicologo")(sequelize, Sequelize.DataTypes);
db.Test = require("./test")(sequelize, Sequelize.DataTypes);
db.Pregunta = require("./pregunta")(sequelize, Sequelize.DataTypes);
db.Respuesta = require("./respuesta")(sequelize, Sequelize.DataTypes);
db.Resultado = require("./resultado")(sequelize, Sequelize.DataTypes);
db.RespuestaUsuario = require("./respuestausuario")(sequelize, Sequelize.DataTypes);
db.RespuestaUsuarioActividad = require("./respuestasusuarioactividades")(sequelize, Sequelize.DataTypes);
db.TipoActividad = require("./tipoactividad")(sequelize, Sequelize.DataTypes);
db.Actividad = require("./actividad")(sequelize, Sequelize.DataTypes);
db.ActividadUsuario = require("./actividadusuario")(sequelize, Sequelize.DataTypes);
db.DescripcionActividad = require("./descripcionactividad")(sequelize, Sequelize.DataTypes);
db.RefreshToken = require("./refreshToken")(sequelize, Sequelize.DataTypes);

// Asociaciones
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;

