const psicologoRepository = require("../repository/psicologo.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const psicologos = await psicologoRepository.getAll();

        if (!psicologos || psicologos.length === 0) {
            return ApiResponse.send(false, "No se encontraron psicólogos en el catálogo.", null, res, 404);
        }

        return ApiResponse.send(true, "Psicólogos obtenidos con éxito.", psicologos, res);
    } catch (error) {
        console.error("❌ Error en GET /psicologos:", error);
        return ApiResponse.send(false, "Error interno al obtener los psicólogos.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de psicólogo no válido.", null, res, 400);
        }

        const psicologo = await psicologoRepository.getById(id);

        if (!psicologo) {
            return ApiResponse.send(false, `No se encontró un psicólogo con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Psicólogo obtenido con éxito.", psicologo, res);
    } catch (error) {
        console.error("❌ Error en GET /psicologos/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener el psicólogo.", null, res, 500);
    }
};