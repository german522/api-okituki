const { DescripcionActividad } = require("../models");

class DescripcionActividadRepository {
    async getAll() {
        return await DescripcionActividad.findAll();
    }

    async getById(id) {
        return await DescripcionActividad.findByPk(id);
    }
}

module.exports = new DescripcionActividadRepository();
