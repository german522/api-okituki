module.exports = (sequelize, DataTypes) => {
  const Actividad = sequelize.define("Actividad", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_tipo_actividades: { type: DataTypes.INTEGER, allowNull: false },
    nombre: { type: DataTypes.STRING(255), allowNull: false }
  }, {
    tableName: "Actividad",
    timestamps: false
  });

  Actividad.associate = (models) => {
    Actividad.belongsTo(models.TipoActividad, { foreignKey: "id_tipo_actividades" });
    Actividad.hasMany(models.DescripcionActividad, { foreignKey: "id_actividad" });
    Actividad.hasMany(models.ActividadUsuario, { foreignKey: "id_actividad" });
  };

  return Actividad;
};
