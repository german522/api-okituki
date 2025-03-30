const respuestaUsuarioRepository = require("../repository/respuestausuario.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const respuestasUsuario = await respuestaUsuarioRepository.getAll();

        if (!respuestasUsuario || respuestasUsuario.length === 0) {
            return ApiResponse.send(false, "No se encontraron respuestas de usuario en el sistema.", null, res, 404);
        }

        return ApiResponse.send(true, "Respuestas de usuario obtenidas con éxito.", respuestasUsuario, res);
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario:", error);
        return ApiResponse.send(false, "Error interno al obtener las respuestas de usuario.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de respuesta de usuario no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const respuestaUsuario = await respuestaUsuarioRepository.getById(id);

        if (!respuestaUsuario) {
            return ApiResponse.send(false, `No se encontró una respuesta de usuario con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Respuesta de usuario obtenida con éxito.", respuestaUsuario, res);
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener la respuesta de usuario.", null, res, 500);
    }
};

exports.create = async (req, res) => {
    try {
        const { id_resultado, id_pregunta, id_respuesta } = req.body;

        if (!id_resultado || !id_pregunta || !id_respuesta) {
            return ApiResponse.send(false, "Todos los campos (id_resultado, id_pregunta, id_respuesta) son obligatorios.", null, res, 400);
        }

        const respuestaUsuario = await respuestaUsuarioRepository.create(req.body);
        return ApiResponse.send(true, "Respuesta de usuario creada con éxito.", respuestaUsuario, res, 201);
    } catch (error) {
        console.error("❌ Error en POST /respuestas_usuario:", error);
        return ApiResponse.send(false, "Error interno al crear la respuesta de usuario.", null, res, 500);
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de respuesta de usuario no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const respuestaUsuario = await respuestaUsuarioRepository.update(id, req.body);

        if (!respuestaUsuario) {
            return ApiResponse.send(false, `No se encontró una respuesta de usuario con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Respuesta de usuario actualizada con éxito.", respuestaUsuario, res);
    } catch (error) {
        console.error("❌ Error en PUT /respuestas_usuario/:id:", error);
        return ApiResponse.send(false, "Error interno al actualizar la respuesta de usuario.", null, res, 500);
    }
};

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de respuesta de usuario no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const success = await respuestaUsuarioRepository.delete(id);

        if (!success) {
            return ApiResponse.send(false, `No se encontró una respuesta de usuario con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Respuesta de usuario eliminada correctamente.", null, res);
    } catch (error) {
        console.error("❌ Error en DELETE /respuestas_usuario/:id:", error);
        return ApiResponse.send(false, "Error interno al eliminar la respuesta de usuario.", null, res, 500);
    }
};
