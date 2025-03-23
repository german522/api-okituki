module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define("Test", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT
    }
  }, {
    tableName: "tests",
    timestamps: false
  });

  Test.associate = (models) => {
    Test.hasMany(models.Pregunta, { foreignKey: "id_test", as: "preguntas" });
  };

  return Test;
};
