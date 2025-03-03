module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define("Usuario", {
    id_usuario: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    id_persona: { type: DataTypes.INTEGER, allowNull: false },
    contrasena: { type: DataTypes.STRING(255), allowNull: false },
    edad: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 0 } },
    genero: { type: DataTypes.STRING(50) },
    discapacidad: { type: DataTypes.ENUM("ninguna", "fisica", "visual", "auditiva", "motriz") },
    fecha_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  }, {
    tableName: "Usuarios",
    timestamps: false
  });

  Usuario.associate = (models) => {
    Usuario.belongsTo(models.Persona, { foreignKey: "id_persona", onDelete: "CASCADE" });
    Usuario.hasMany(models.Resultado, { foreignKey: "id_usuario", onDelete: "CASCADE" });
    Usuario.hasMany(models.ActividadUsuario, { foreignKey: "id_usuario", onDelete: "CASCADE" });
  };

  return Usuario;
};