const { Pregunta } = require("../models");

class PreguntaRepository {
    async getAll() {
        return await Pregunta.findAll();
    }

    async getById(id) {
        return await Pregunta.findByPk(id);
    }

    async create(data) {
        return await Pregunta.create(data);
    }

    async update(id, data) {
        const pregunta = await Pregunta.findByPk(id);
        if (!pregunta) return null;
        return await pregunta.update(data);
    }

    async delete(id) {
        const pregunta = await Pregunta.findByPk(id);
        if (!pregunta) return null;
        await pregunta.destroy();
        return true;
    }
}

module.exports = new PreguntaRepository();