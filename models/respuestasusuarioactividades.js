module.exports = (sequelize, DataTypes) => {
  const RespuestaUsuarioActividad = sequelize.define("RespuestaUsuarioActividad", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_actividad_usuario: { type: DataTypes.INTEGER, allowNull: false },
    respuesta_texto: {
      type: DataTypes.ENUM("Excelente", "Buena", "Regular", "No me sirvió"),
      allowNull: false
    }
  }, {
    tableName: "Respuestas_Usuario_Actividades",
    timestamps: false
  });

  RespuestaUsuarioActividad.associate = (models) => {
    RespuestaUsuarioActividad.belongsTo(models.ActividadUsuario, { foreignKey: "id_actividad_usuario", onDelete: "CASCADE" });
  };

  return RespuestaUsuarioActividad;
};
