const tipoActividadRepository = require("../repository/tipoactividad.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const tiposActividad = await tipoActividadRepository.getAll();

        if (!tiposActividad || tiposActividad.length === 0) {
            return ApiResponse.send(false, "No se encontraron tipos de actividad en el catálogo.", null, res, 404);
        }

        return ApiResponse.send(true, "Tipos de actividad obtenidos con éxito.", tiposActividad, res);
    } catch (error) {
        console.error("❌ Error en GET /tipo_actividades:", error);
        return ApiResponse.send(false, "Error interno al obtener los tipos de actividad.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de tipo de actividad no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const tipoActividad = await tipoActividadRepository.getById(id);

        if (!tipoActividad) {
            return ApiResponse.send(false, `No se encontró un tipo de actividad con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Tipo de actividad obtenido con éxito.", tipoActividad, res);
    } catch (error) {
        console.error("❌ Error en GET /tipo_actividades/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener el tipo de actividad.", null, res, 500);
    }
};
