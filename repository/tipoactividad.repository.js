const { TipoActividad } = require("../models");

class TipoActividadRepository {
    async getAll() {
        return await TipoActividad.findAll();
    }

    async getById(id) {
        return await TipoActividad.findByPk(id);
    }
}

module.exports = new TipoActividadRepository();