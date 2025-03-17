const { Resultado } = require("../models");

class ResultadoRepository {
    async getAll() {
        try {
            return await Resultado.findAll();
        } catch (error) {
            console.error("❌ Error en getAll:", error);
            throw new Error("Error al obtener los resultados.");
        }
    }

    async getById(id) {
        try {
            return await Resultado.findByPk(id);
        } catch (error) {
            console.error(`❌ Error en getById (ID: ${id}):`, error);
            throw new Error("Error al obtener el resultado.");
        }
    }

    async create(data) {
        try {
            return await Resultado.create(data);
        } catch (error) {
            console.error("❌ Error en create:", error);
            throw new Error("Error al crear el resultado.");
        }
    }

    async update(id, data) {
        try {
            const resultado = await Resultado.findByPk(id);
            if (!resultado) return null;

            await resultado.update(data);
            return resultado;
        } catch (error) {
            console.error(`❌ Error en update (ID: ${id}):`, error);
            throw new Error("Error al actualizar el resultado.");
        }
    }

    async delete(id) {
        try {
            const resultado = await Resultado.findByPk(id);
            if (!resultado) return false;

            await resultado.destroy();
            return true;
        } catch (error) {
            console.error(`❌ Error en delete (ID: ${id}):`, error);
            throw new Error("Error al eliminar el resultado.");
        }
    }
}

module.exports = new ResultadoRepository();
