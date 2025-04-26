const historialRepository = require("../repository/historial.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.obtenerHistorial = async (req, res) => {
    try {
        const id_usuario = req.user.id;

        const historial = await historialRepository.getHistorialByUsuario(id_usuario);

        const data = historial.map((registro) => ({
            tipo_actividad: registro.actividad.tipo_actividad.nombre,
            nombre_actividad: registro.actividad.nombre,
            calificacion: registro.RespuestaUsuarioActividads?.[0]?.respuesta_texto || "Sin calificación",
            fecha_realizacion: registro.fecha_realizacion
        }));

        return ApiResponse.send(true, "Historial obtenido con éxito.", data, res);
    } catch (error) {
        console.error("❌ Error al obtener historial:", error);
        return ApiResponse.send(false, "Error interno al obtener historial.", null, res, 500);
    }
};
