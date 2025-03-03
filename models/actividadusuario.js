module.exports = (sequelize, DataTypes) => {
  const ActividadUsuario = sequelize.define("ActividadUsuario", {
    id_actividad_usuario: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_usuario: { type: DataTypes.INTEGER, allowNull: false },
    id_actividad: { type: DataTypes.INTEGER, allowNull: false },
    fecha_realizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    estado: { type: DataTypes.ENUM("Activa", "Pendiente", "Completada", "Terminada") }
  }, {
    tableName: "Actividades_Usuario",
    timestamps: false
  });

  ActividadUsuario.associate = (models) => {
    ActividadUsuario.belongsTo(models.Usuario, { foreignKey: "id_usuario", onDelete: "CASCADE" });
    ActividadUsuario.belongsTo(models.Actividad, { foreignKey: "id_actividad", onDelete: "CASCADE" });
    ActividadUsuario.hasMany(models.RespuestaUsuarioActividad, { foreignKey: "id_actividad_usuario", onDelete: "CASCADE" });
  };

  return ActividadUsuario;
};
