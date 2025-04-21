module.exports = (sequelize, DataTypes) => {
  const Actividad = sequelize.define("Actividad", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_tipo_actividades: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Tipo_Actividades", key: "id" } // Corrige el nombre del modelo
    },
    nombre: { type: DataTypes.STRING(255), allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: false },
  }, {
    tableName: "Actividades",
    timestamps: false
  });

  Actividad.associate = (models) => {
    Actividad.belongsTo(models.TipoActividad, { foreignKey: "id_tipo_actividades", onDelete: "CASCADE", as: "tipo_actividad" });
    Actividad.hasMany(models.DescripcionActividad, { foreignKey: "id_actividad", as: "descripciones" });
    Actividad.hasMany(models.ActividadUsuario, { foreignKey: "id_actividad" });
  };

  return Actividad;
};
