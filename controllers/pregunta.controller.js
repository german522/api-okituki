const preguntaRepository = require("../repository/pregunta.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const preguntas = await preguntaRepository.getAll();

        if (!preguntas || preguntas.length === 0) {
            return ApiResponse.send(false, "No se encontraron preguntas en el catálogo.", null, res, 404);
        }

        return ApiResponse.send(true, "Preguntas obtenidas con éxito.", preguntas, res);
    } catch (error) {
        console.error("❌ Error en GET /preguntas:", error);
        return ApiResponse.send(false, "Error interno al obtener las preguntas.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de pregunta no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const pregunta = await preguntaRepository.getById(id);

        if (!pregunta) {
            return ApiResponse.send(false, `No se encontró una pregunta con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Pregunta obtenida con éxito.", pregunta, res);
    } catch (error) {
        console.error("❌ Error en GET /preguntas/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener la pregunta.", null, res, 500);
    }
};
