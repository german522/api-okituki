module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define("RefreshToken", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        token: { type: DataTypes.STRING(500), allowNull: false, unique: true },
        usuarioId: { type: DataTypes.INTEGER, allowNull: false }
    }, {
        tableName: "RefreshTokens",
        timestamps: false
    });

    RefreshToken.associate = (models) => {
        RefreshToken.belongsTo(models.Usuario, { foreignKey: "usuarioId", onDelete: "CASCADE" });
    };

    return RefreshToken;
};
