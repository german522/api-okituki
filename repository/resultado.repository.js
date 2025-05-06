const { Resultado } = require("../models");
const { Op } = require("sequelize");

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

    async getGraficaByUsuario(id_usuario, fechaInicio, fechaFin) {
        try {
            const where = { id_usuario };

            if (fechaInicio && fechaFin) {
                where.fecha_realizacion = {
                    [Op.between]: [new Date(fechaInicio), new Date(fechaFin)]
                };
            }

            return await Resultado.findAll({ where });
        } catch (error) {
            console.error("❌ Error en getGraficaByUsuario:", error);
            throw new Error("Error al obtener los resultados para la gráfica.");
        }
    }
}

module.exports = new ResultadoRepository();
