module.exports = (sequelize, DataTypes) => {
  const RespuestaUsuario = sequelize.define("RespuestaUsuario", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_resultado: { type: DataTypes.INTEGER, allowNull: false, references: { model: "Resultados", key: "id" } },
    id_pregunta: { type: DataTypes.INTEGER, allowNull: false, references: { model: "Preguntas", key: "id" } },
    id_respuesta: { type: DataTypes.INTEGER, allowNull: false, references: { model: "Respuestas", key: "id" } },
  }, {
    tableName: "Respuestas_Usuario",
    timestamps: false
  });

  RespuestaUsuario.associate = (models) => {
    RespuestaUsuario.belongsTo(models.Resultado, { foreignKey: "id_resultado", onDelete: "CASCADE" });
    RespuestaUsuario.belongsTo(models.Pregunta, { foreignKey: "id_pregunta", onDelete: "CASCADE" });
    RespuestaUsuario.belongsTo(models.Respuesta, { foreignKey: "id_respuesta", onDelete: "CASCADE" });
  };

  return RespuestaUsuario;
};
