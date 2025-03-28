const { RefreshToken } = require("../models");

exports.create = async (usuarioId, token) => {
    return await RefreshToken.create({ usuarioId, token });
};

exports.findByToken = async (token) => {
    return await RefreshToken.findOne({ where: { token } });
};

exports.delete = async (token) => {
    return await RefreshToken.destroy({ where: { token } });
};

exports.deleteByUser = async (usuarioId) => {
    return await RefreshToken.destroy({ where: { usuarioId } });
};
