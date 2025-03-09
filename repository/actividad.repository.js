const { Actividad } = require("../models");

class ActividadRepository {
    async getAll() {
        return await Actividad.findAll();
    }

    async getById(id) {
        return await Actividad.findByPk(id);
    }
}

module.exports = new ActividadRepository();
