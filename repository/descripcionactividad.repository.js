const { DescripcionActividad } = require("../models");
const actividadRepository = require("./actividad.repository");

class DescripcionActividadRepository {
    async getById(id) {
        const descripcion = await DescripcionActividad.findByPk(id);
        if (!descripcion) return null;

        const actividad = await actividadRepository.getById(descripcion.id_actividad);

        return {
            id: descripcion.id,
            id_actividad: descripcion.id_actividad,
            numero_paso: descripcion.numero_paso,
            instruccion: descripcion.instruccion,
            url_imagen: descripcion.URL_imagen || "",
            actividad: actividad
        };
    }
}

module.exports = new DescripcionActividadRepository();
