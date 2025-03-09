const { Psicologo } = require("../models");

class PsicologoRepository {
    async getAll() {
        return await Psicologo.findAll();
    }

    async getById(id) {
        return await Psicologo.findByPk(id);
    }

    async create(data) {
        return await Psicologo.create(data);
    }

    async update(id, data) {
        const psicologo = await Psicologo.findByPk(id);
        if (!psicologo) return null;
        return await psicologo.update(data);
    }

    async delete(id) {
        const psicologo = await Psicologo.findByPk(id);
        if (!psicologo) return null;
        await psicologo.destroy();
        return true;
    }
}

module.exports = new PsicologoRepository();