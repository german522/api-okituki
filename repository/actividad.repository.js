const { Actividad } = require("../models");
const tipoActividadRepository = require("./tipoactividad.repository");

class ActividadRepository {
    async getAll() {
        return await Actividad.findAll();
    }

    async getById(id) {
        const actividad = await Actividad.findByPk(id);
        if (!actividad) return null;
        const tipoActividad = await tipoActividadRepository.getById(actividad.id_tipo_actividades);

        return {
            id: actividad.id,
            nombre: actividad.nombre,
            descripcion: actividad.descripcion,
            tipo_actividad: tipoActividad,
        }
    }
}

module.exports = new ActividadRepository();
