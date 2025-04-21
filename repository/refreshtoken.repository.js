const { RefreshToken } = require("../models");

class RefreshTokenRepository {
    async create(usuarioId, token) {
        return await RefreshToken.create({ usuarioId, token });
    }

    async findByToken(token) {
        return await RefreshToken.findOne({ where: { token } });
    }

    async delete(token) {
        return await RefreshToken.destroy({ where: { token } });
    }

    async deleteByUser(usuarioId) {
        return await RefreshToken.destroy({ where: { usuarioId } });
    }
}

module.exports = new RefreshTokenRepository();
