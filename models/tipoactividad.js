module.exports = (sequelize, DataTypes) => {
  const TipoActividad = sequelize.define(
    "tipoactividad", // 👈 Este nombre debe coincidir en todas partes
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      nombre: { type: DataTypes.STRING(255), allowNull: false },
      descripcion: { type: DataTypes.TEXT, allowNull: false }
    },
    { tableName: "Tipo_Actividades", timestamps: false } // 👈 Verifica el nombre real de la tabla
  );

  TipoActividad.associate = (models) => {
    TipoActividad.hasMany(models.Actividad, { foreignKey: "id_tipo_actividades", onDelete: "CASCADE" });
  };

  return TipoActividad;
};
