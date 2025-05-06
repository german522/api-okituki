const resultadoRepository = require("../repository/resultado.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const resultados = await resultadoRepository.getAll();

        if (!resultados || resultados.length === 0) {
            return ApiResponse.send(false, "No se encontraron resultados en el sistema.", null, res, 404);
        }

        return ApiResponse.send(true, "Resultados obtenidos con éxito.", resultados, res);
    } catch (error) {
        console.error("❌ Error en GET /resultados:", error);
        return ApiResponse.send(false, "Error interno al obtener los resultados.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de resultado no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const resultado = await resultadoRepository.getById(id);

        if (!resultado) {
            return ApiResponse.send(false, `No se encontró un resultado con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Resultado obtenido con éxito.", resultado, res);
    } catch (error) {
        console.error("❌ Error en GET /resultados/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener el resultado.", null, res, 500);
    }
};

exports.create = async (req, res) => {
    try {
        const { id_usuario, id_test, puntaje_total, nivel_estres } = req.body;

        if (!id_usuario || !id_test || puntaje_total == null || !nivel_estres) {
            return ApiResponse.send(false, "Todos los campos (id_usuario, id_test, puntaje_total, nivel_estres) son obligatorios.", null, res, 400);
        }

        const resultado = await resultadoRepository.create(req.body);
        return ApiResponse.send(true, "Resultado creado con éxito.", resultado, res, 201);
    } catch (error) {
        console.error("❌ Error en POST /resultados:", error);
        return ApiResponse.send(false, "Error interno al crear el resultado.", null, res, 500);
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de resultado no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const resultado = await resultadoRepository.update(id, req.body);

        if (!resultado) {
            return ApiResponse.send(false, `No se encontró un resultado con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Resultado actualizado con éxito.", resultado, res);
    } catch (error) {
        console.error("❌ Error en PUT /resultados/:id:", error);
        return ApiResponse.send(false, "Error interno al actualizar el resultado.", null, res, 500);
    }
};

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de resultado no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const success = await resultadoRepository.delete(id);

        if (!success) {
            return ApiResponse.send(false, `No se encontró un resultado con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Resultado eliminado correctamente.", null, res);
    } catch (error) {
        console.error("❌ Error en DELETE /resultados/:id:", error);
        return ApiResponse.send(false, "Error interno al eliminar el resultado.", null, res, 500);
    }
};

exports.getGraficaByUsuario = async (req, res) => {
    try {
        const id_usuario = req.user.id;
        const { fechaInicio, fechaFin } = req.query;

        if (!fechaInicio || !fechaFin) {
            return ApiResponse.send(false, "Debes proporcionar una fecha de inicio y una fecha de fin.", null, res, 400);
        }

        const resultados = await resultadoRepository.getGraficaByUsuario(id_usuario, fechaInicio, fechaFin);

        if (!resultados || resultados.length === 0) {
            return ApiResponse.send(false, "No se encontraron resultados en el rango de fechas.", null, res, 404);
        }

        return ApiResponse.send(true, "Resultados obtenidos para gráfica.", resultados, res);
    } catch (error) {
        console.error("❌ Error en GET /resultados/grafica:", error);
        return ApiResponse.send(false, "Error interno al obtener los datos de la gráfica.", null, res, 500);
    }
};