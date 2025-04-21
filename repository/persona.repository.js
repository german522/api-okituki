const { Persona, Usuario, sequelize } = require("../models");

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

    async deletePersona(id, transaction) {
        try {
            await Usuario.destroy({ where: { id_persona: id }, transaction });
            await Persona.destroy({ where: { id }, transaction });
        } catch (error) {
            throw error;
        }
    }

    async getByNombre(correo) {
        return await Persona.findOne({ where: { correo } });
    }
}

module.exports = new PersonaRepository();
