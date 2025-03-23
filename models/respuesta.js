module.exports = (sequelize, DataTypes) => {
  const Respuesta = sequelize.define("Respuesta", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    id_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Preguntas",
        key: "id"
      }
    },
    respuesta_texto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: "respuestas",
    timestamps: false
  });

  Respuesta.associate = (models) => {
    Respuesta.belongsTo(models.Pregunta, { foreignKey: "id_pregunta", as: "pregunta" });
  };

  return Respuesta;
};
