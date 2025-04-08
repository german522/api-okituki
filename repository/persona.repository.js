const { Persona, Usuario, sequelize } = require("../models/index");

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
        const transaction = await sequelize.transaction();
        try {
            // Elimina los registros relacionados en Usuarios
            await Usuario.destroy({ where: { id_persona: id }, transaction });

            // Elimina el registro en Personas
            await Persona.destroy({ where: { id }, transaction });

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}

module.exports = new PersonaRepository();