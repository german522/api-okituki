module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define("Test", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(255), allowNull: false },
    descripcion: { type: DataTypes.TEXT }
  }, {
    tableName: "Tests",
    timestamps: false
  });

  Test.associate = (models) => {
    Test.hasMany(models.Pregunta, { foreignKey: "id_test", onDelete: "CASCADE" });
    Test.hasMany(models.Resultado, { foreignKey: "id_test", onDelete: "CASCADE" });
  };

  return Test;
};
