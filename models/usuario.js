module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      id_persona: { type: DataTypes.INTEGER, allowNull: false, references: { model: "Personas", key: "id" } },
      contrasena: { type: DataTypes.STRING(255), allowNull: false },
      fecha_nacimiento: { type: DataTypes.DATE },
      genero: { type: DataTypes.STRING(50) },
      discapacidad: { type: DataTypes.ENUM("ninguna", "fisica", "visual", "auditiva", "motriz") },
      fecha_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    { tableName: "Usuarios", timestamps: false }
  );

  Usuario.associate = (models) => {
    Usuario.belongsTo(models.Persona, { foreignKey: "id_persona", onDelete: "CASCADE" });
  };

  return Usuario;

};



