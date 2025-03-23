module.exports = (sequelize, DataTypes) => {
  const Pregunta = sequelize.define("Pregunta", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_test: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Tests",
        key: "id"
      }
    },
    numero_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pregunta: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: "Preguntas",
    timestamps: false
  });

  Pregunta.associate = (models) => {
    Pregunta.belongsTo(models.Test, { foreignKey: "id_test", as: "test" });
    Pregunta.hasMany(models.Respuesta, { foreignKey: "id_pregunta", as: "respuestas" });
  };

  return Pregunta;
};
