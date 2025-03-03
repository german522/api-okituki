module.exports = (sequelize, DataTypes) => {
  const Resultado = sequelize.define("Resultado", {
    id_resultado: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_usuario: { type: DataTypes.INTEGER, allowNull: false },
    id_test: { type: DataTypes.INTEGER, allowNull: false },
    puntaje_total: { type: DataTypes.INTEGER, allowNull: false },
    nivel_estres: { type: DataTypes.ENUM("Bajo", "Moderado", "Alto"), allowNull: false },
    fecha_realizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: "Resultados",
    timestamps: false
  });

  Resultado.associate = (models) => {
    Resultado.belongsTo(models.Usuario, { foreignKey: "id_usuario", onDelete: "CASCADE" });
    Resultado.belongsTo(models.Test, { foreignKey: "id_test", onDelete: "CASCADE" });
    Resultado.hasMany(models.RespuestaUsuario, { foreignKey: "id_resultado", onDelete: "CASCADE" });
  };

  return Resultado;
};
