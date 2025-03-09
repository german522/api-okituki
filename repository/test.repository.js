const { Test } = require("../models");

class TestRepository {
    async getAll() {
        return await Test.findAll();
    }

    async getById(id) {
        return await Test.findByPk(id);
    }

    async create(data) {
        return await Test.create(data);
    }

    async update(id, data) {
        const test = await Test.findByPk(id);
        if (!test) return null;
        return await test.update(data);
    }

    async delete(id) {
        const test = await Test.findByPk(id);
        if (!test) return null;
        await test.destroy();
        return true;
    }
}

module.exports = new TestRepository();