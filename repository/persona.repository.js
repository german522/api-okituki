const { Persona } = require("../models/index");

class PersonaRepository {
    async getAll() {
        return await Persona.findAll();
    }

    async getById(id) {
        return await Persona.findByPk(id);
    }

    async create(data) {
        return await Persona.create(data);
    }

    async update(id, data) {
        const persona = await Persona.findByPk(id);
        if (!persona) return null;
        return await persona.update(data);
    }

    async delete(id) {
        const persona = await Persona.findByPk(id);
        if (!persona) return null;
        await persona.destroy();
        return true;
    }
}

module.exports = new PersonaRepository();