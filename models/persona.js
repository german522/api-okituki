module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define("Persona", {
    id_persona: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(255), allowNull: false },
    telefono: { type: DataTypes.STRING(20) },
    correo: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    tipo: { type: DataTypes.ENUM("usuario", "psicologo"), allowNull: false },
    fotoperfilURL: { type: DataTypes.TEXT }
  }, {
    tableName: "Personas",
    timestamps: false
  });

  Persona.associate = (models) => {
    Persona.hasOne(models.Usuario, { foreignKey: "id_persona", onDelete: "CASCADE" });
    Persona.hasOne(models.Psicologo, { foreignKey: "id_persona", onDelete: "CASCADE" });
  };

  return Persona;
};