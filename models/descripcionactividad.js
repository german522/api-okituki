module.exports = (sequelize, DataTypes) => {
  const DescripcionActividad = sequelize.define("DescripcionActividad", {
    id_descripción_actividad: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_actividad: { type: DataTypes.INTEGER, allowNull: false },
    numero_pasos: { type: DataTypes.INTEGER, allowNull: false },
    subtitulo_actividad: { type: DataTypes.STRING(255), allowNull: false },
    instrucción: { type: DataTypes.TEXT, allowNull: false },
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
