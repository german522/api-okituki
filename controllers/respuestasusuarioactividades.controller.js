const respuestasUsuarioActividadesRepository = require("../repository/respuestasusuarioactividades.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const respuestas = await respuestasUsuarioActividadesRepository.getAll();

        if (!respuestas || respuestas.length === 0) {
            return ApiResponse.send(false, "No se encontraron respuestas de usuario en actividades.", null, res, 404);
        }

        return ApiResponse.send(true, "Respuestas de usuario en actividades obtenidas con éxito.", respuestas, res);
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario_actividades:", error);
        return ApiResponse.send(false, "Error interno al obtener las respuestas de usuario en actividades.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de respuesta no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const respuesta = await respuestasUsuarioActividadesRepository.getById(id);

        if (!respuesta) {
            return ApiResponse.send(false, `No se encontró una respuesta de usuario en actividades con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Respuesta de usuario en actividades obtenida con éxito.", respuesta, res);
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario_actividades/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener la respuesta de usuario en actividades.", null, res, 500);
    }
};

exports.create = async (req, res) => {
    try {
        const { id_actividad_usuario, respuesta_texto } = req.body;

        if (!id_actividad_usuario || !respuesta_texto) {
            return ApiResponse.send(false, "Todos los campos (id_actividad_usuario, respuesta_texto) son obligatorios.", null, res, 400);
        }

        const respuesta = await respuestasUsuarioActividadesRepository.create(req.body);
        return ApiResponse.send(true, "Respuesta de usuario en actividades creada con éxito.", respuesta, res, 201);
    } catch (error) {
        console.error("❌ Error en POST /respuestas_usuario_actividades:", error);
        return ApiResponse.send(false, "Error interno al crear la respuesta de usuario en actividades.", null, res, 500);
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de respuesta no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const respuesta = await respuestasUsuarioActividadesRepository.update(id, req.body);

        if (!respuesta) {
            return ApiResponse.send(false, `No se encontró una respuesta de usuario en actividades con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Respuesta de usuario en actividades actualizada con éxito.", respuesta, res);
    } catch (error) {
        console.error("❌ Error en PUT /respuestas_usuario_actividades/:id:", error);
        return ApiResponse.send(false, "Error interno al actualizar la respuesta de usuario en actividades.", null, res, 500);
    }
};

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de respuesta no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const success = await respuestasUsuarioActividadesRepository.delete(id);

        if (!success) {
            return ApiResponse.send(false, `No se encontró una respuesta de usuario en actividades con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Respuesta de usuario en actividades eliminada correctamente.", null, res);
    } catch (error) {
        console.error("❌ Error en DELETE /respuestas_usuario_actividades/:id:", error);
        return ApiResponse.send(false, "Error interno al eliminar la respuesta de usuario en actividades.", null, res, 500);
    }
};
