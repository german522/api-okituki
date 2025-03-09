const { Respuesta } = require("../models");

class RespuestaRepository {
    async getAll() {
        return await Respuesta.findAll();
    }

    async getById(id) {
        return await Respuesta.findByPk(id);
    }
}

module.exports = new RespuestaRepository();
