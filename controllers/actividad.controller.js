const actividadRepository = require("../repository/actividad.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const actividades = await actividadRepository.getAll();

        if (!actividades || actividades.length === 0) {
            return ApiResponse.send(false, "No se encontraron actividades en el catálogo.", null, res, 404);
        }

        return ApiResponse.send(true, "Actividades obtenidas con éxito.", actividades, res);
    } catch (error) {
        console.error("❌ Error en GET /actividades:", error);
        return ApiResponse.send(false, "Error interno al obtener las actividades.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de actividad no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const actividad = await actividadRepository.getById(id);

        if (!actividad) {
            return ApiResponse.send(false, `No se encontró una actividad con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Actividad obtenida con éxito.", actividad, res);
    } catch (error) {
        console.error("❌ Error en GET /actividades/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener la actividad.", null, res, 500);
    }
};

