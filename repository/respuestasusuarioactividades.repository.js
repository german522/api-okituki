const { RespuestaUsuarioActividad } = require("../models");

class RespuestasUsuarioActividadesRepository {
    async getAll() {
        return await RespuestaUsuarioActividad.findAll();
    }

    async getById(id) {
        return await RespuestaUsuarioActividad.findByPk(id);
    }

    async create(data) {
        return await RespuestaUsuarioActividad.create(data);
    }

    async update(id, data) {
        const respuesta = await RespuestaUsuarioActividad.findByPk(id);
        if (!respuesta) return null;
        return await respuesta.update(data);
    }

    async delete(id) {
        const respuesta = await RespuestaUsuarioActividad.findByPk(id);
        if (!respuesta) return null;
        await respuesta.destroy();
        return true;
    }
}

module.exports = new RespuestasUsuarioActividadesRepository();
