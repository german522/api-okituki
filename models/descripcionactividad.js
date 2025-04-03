module.exports = (sequelize, DataTypes) => {
  const DescripcionActividad = sequelize.define("DescripcionActividad", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_actividad: { type: DataTypes.INTEGER, allowNull: false, references: { model: "Actividades", key: "id" } },
    numero_paso: { type: DataTypes.INTEGER, allowNull: false },
    instruccion: { type: DataTypes.TEXT, allowNull: false },
    URL_imagen: { type: DataTypes.TEXT }
  }, {
    tableName: "Descripcion_Actividad",
    timestamps: false
  });

  DescripcionActividad.associate = (models) => {
    DescripcionActividad.belongsTo(models.Actividad, { foreignKey: "id_actividad", onDelete: "CASCADE" });
  };

  return DescripcionActividad;
};