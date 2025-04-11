const { TipoActividad, Actividad, DescripcionActividad } = require("../models");

class TipoActividadRepository {
    async getAll() {
        return await TipoActividad.findAll();
    }

    async getById(id) {
        return await TipoActividad.findOne({
            where: { id },
            include: [
                {
                    model: Actividad,
                    as: "actividades",
                    include: [
                        {
                            model: DescripcionActividad,
                            as: "descripciones",
                            order: [["numero_paso", "ASC"]]
                        }
                    ]
                }
            ]
        });
    }
}

module.exports = new TipoActividadRepository();
