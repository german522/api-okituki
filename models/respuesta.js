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
    tableName: "Respuestas",
    timestamps: false
  });

  Respuesta.associate = (models) => {
    Respuesta.belongsTo(models.Pregunta, {
      foreignKey: {
        name: "id_pregunta",
        allowNull: false
      },
      onDelete: "CASCADE"
    });
  };

  return Respuesta;
};
