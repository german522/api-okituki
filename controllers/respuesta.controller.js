const respuestaRepository = require("../repository/respuesta.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const respuestas = await respuestaRepository.getAll();

        if (!respuestas || respuestas.length === 0) {
            return ApiResponse.send(false, "No se encontraron respuestas en el catálogo.", null, res, 404);
        }

        return ApiResponse.send(true, "Respuestas obtenidas con éxito.", respuestas, res);
    } catch (error) {
        console.error("❌ Error en GET /respuestas:", error);
        return ApiResponse.send(false, "Error interno al obtener las respuestas.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de respuesta no válido.", null, res, 400);
        }

        const respuesta = await respuestaRepository.getById(id);

        if (!respuesta) {
            return ApiResponse.send(false, `No se encontró una respuesta con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Respuesta obtenida con éxito.", respuesta, res);
    } catch (error) {
        console.error("Error en GET /respuestas/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener la respuesta.", null, res, 500);
    }
};