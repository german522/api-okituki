const { RespuestaUsuario } = require("../models");

class RespuestaUsuarioRepository {
    async getAll() {
        return await RespuestaUsuario.findAll();
    }

    async getById(id) {
        return await RespuestaUsuario.findByPk(id);
    }

    async create(data) {
        return await RespuestaUsuario.create(data);
    }

    async update(id, data) {
        const respuestaUsuario = await RespuestaUsuario.findByPk(id);
        if (!respuestaUsuario) return null;
        return await respuestaUsuario.update(data);
    }

    async delete(id) {
        const respuestaUsuario = await RespuestaUsuario.findByPk(id);
        if (!respuestaUsuario) return null;
        await respuestaUsuario.destroy();
        return true;
    }
}

module.exports = new RespuestaUsuarioRepository();
