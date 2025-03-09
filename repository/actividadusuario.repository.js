const { ActividadUsuario } = require("../models");

class ActividadUsuarioRepository {
    async getAll() {
        return await ActividadUsuario.findAll();
    }

    async getById(id) {
        return await ActividadUsuario.findByPk(id);
    }

    async create(data) {
        return await ActividadUsuario.create(data);
    }

    async update(id, data) {
        const actividadUsuario = await ActividadUsuario.findByPk(id);
        if (!actividadUsuario) return null;
        return await actividadUsuario.update(data);
    }

    async delete(id) {
        const actividadUsuario = await ActividadUsuario.findByPk(id);
        if (!actividadUsuario) return null;
        await actividadUsuario.destroy();
        return true;
    }
}

module.exports = new ActividadUsuarioRepository();
