module.exports = (sequelize, DataTypes) => {
  const Psicologo = sequelize.define("Psicologo", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_persona: { type: DataTypes.INTEGER, allowNull: false },
    especialidad: { type: DataTypes.STRING(255) },
    experiencia: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 0 } },
    horario_disponible: { type: DataTypes.TEXT }
  }, {
    tableName: "Psicologos",
    timestamps: false
  });

  Psicologo.associate = (models) => {
    Psicologo.belongsTo(models.Persona, { foreignKey: "id_persona", onDelete: "CASCADE" });
  };

  return Psicologo;
};