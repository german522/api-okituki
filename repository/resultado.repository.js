const { Resultado } = require("../models");

class resultadoRepository {
    async getAll() {
        return await Resultado.findAll();
    }

    async getById(id) {
        return await Resultado.findByPk(id);
    }
}

module.exports = new resultadoRepository();
