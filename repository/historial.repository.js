// historial.repository.js

const { ActividadUsuario, Actividad, TipoActividad, RespuestaUsuarioActividad } = require("../models");

class HistorialRepository {
    async getHistorialByUsuario(id_usuario) {
        const historial = await ActividadUsuario.findAll({
            where: { id_usuario },
            attributes: ["fecha_realizacion"],
            include: [
                {
                    model: Actividad,
                    attributes: ["nombre"],
                    as: "actividad",
                    include: [
                        {
                            model: TipoActividad,
                            attributes: ["nombre"],
                            as: "tipo_actividad"
                        }
                    ]
                },
                {
                    model: RespuestaUsuarioActividad,
                    attributes: ["respuesta_texto"]
                }
            ],
            order: [["fecha_realizacion", "DESC"]]
        });

        return historial;
    }
}

module.exports = new HistorialRepository();
