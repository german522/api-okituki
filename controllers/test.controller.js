const testRepository = require("../repository/test.repository");
const ApiResponse = require("../utils/ApiResponse");

const obtenerTestPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const test = await testRepository.getById(id);

        if (!test) {
            return ApiResponse.send(false, "Test no encontrado", null, res, 404);
        }

        const response = {
            test: {
                id: test.id,
                nombre: test.nombre,
                descripcion: test.descripcion,
                preguntas: test.preguntas.map((pregunta) => ({
                    id: pregunta.id,
                    numero_pregunta: pregunta.numero_pregunta,
                    pregunta: pregunta.pregunta,
                    respuestas: pregunta.respuestas.map((respuesta) => ({
                        id: respuesta.id,
                        respuesta_texto: respuesta.respuesta_texto,
                        valor: respuesta.valor,
                    })),
                })),
            },
        };

        return ApiResponse.send(true, "Test obtenido con éxito.", response, res);
    } catch (error) {
        console.error("❌ Error al obtener el test:", error);
        return ApiResponse.send(false, "Error interno del servidor", null, res, 500);
    }
};

const getAll = async (req, res) => {
    try {
        const tests = await testRepository.getAll();

        if (!tests || tests.length === 0) {
            return ApiResponse.send(false, "No se encontraron tests en el catálogo.", null, res, 404);
        }

        return ApiResponse.send(true, "Tests obtenidos con éxito.", tests, res);
    } catch (error) {
        console.error("❌ Error en GET /tests:", error);
        return ApiResponse.send(false, "Error interno al obtener los tests.", null, res, 500);
    }
};

const getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de test no válido.", null, res, 400);
        }

        const test = await testRepository.getById(id);

        if (!test) {
            return ApiResponse.send(false, `No se encontró un test con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Test obtenido con éxito.", test, res);
    } catch (error) {
        console.error("❌ Error en GET /tests/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener el test.", null, res, 500);
    }
};

module.exports = { obtenerTestPorId, getAll, getById };
