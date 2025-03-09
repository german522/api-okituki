module.exports = (sequelize, DataTypes) => {
  const Respuesta = sequelize.define("Respuesta", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_pregunta: { type: DataTypes.INTEGER, allowNull: false },
    respuesta_texto: { type: DataTypes.TEXT, allowNull: false },
    valor: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    tableName: "Respuestas",
    timestamps: false
  });

  Respuesta.associate = (models) => {
    Respuesta.belongsTo(models.Pregunta, { foreignKey: "id_pregunta", onDelete: "CASCADE" });
    Respuesta.hasMany(models.RespuestaUsuario, { foreignKey: "id_respuesta", onDelete: "CASCADE" });
  };

  return Respuesta;
};