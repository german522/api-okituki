module.exports = (sequelize, DataTypes) => {
  const Pregunta = sequelize.define("Pregunta", {
    id_pregunta: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_test: { type: DataTypes.INTEGER, allowNull: false },
    pregunta: { type: DataTypes.TEXT, allowNull: false }
  }, {
    tableName: "Preguntas",
    timestamps: false
  });

  Pregunta.associate = (models) => {
    Pregunta.belongsTo(models.Test, { foreignKey: "id_test", onDelete: "CASCADE" });
    Pregunta.hasMany(models.Respuesta, { foreignKey: "id_pregunta", onDelete: "CASCADE" });
    Pregunta.hasMany(models.RespuestaUsuario, { foreignKey: "id_pregunta", onDelete: "CASCADE" });
  };

  return Pregunta;
};
