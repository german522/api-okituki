const actividadUsuarioRepository = require("../repository/actividadusuario.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const actividadesUsuarios = await actividadUsuarioRepository.getAll();

        if (!actividadesUsuarios || actividadesUsuarios.length === 0) {
            return ApiResponse.send(false, "No se encontraron actividades de usuario en el sistema.", null, res, 404);
        }

        return ApiResponse.send(true, "Actividades de usuario obtenidas con éxito.", actividadesUsuarios, res);
    } catch (error) {
        console.error("❌ Error en GET /actividades_usuario:", error);
        return ApiResponse.send(false, "Error interno al obtener las actividades de usuario.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de actividad de usuario no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const actividadUsuario = await actividadUsuarioRepository.getById(id);

        if (!actividadUsuario) {
            return ApiResponse.send(false, `No se encontró una actividad de usuario con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Actividad de usuario obtenida con éxito.", actividadUsuario, res);
    } catch (error) {
        console.error("❌ Error en GET /actividades_usuario/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener la actividad de usuario.", null, res, 500);
    }
};

exports.create = async (req, res) => {
    try {
        const { id_usuario, id_actividad, estado } = req.body;

        if (!id_usuario || !id_actividad || !estado) {
            return ApiResponse.send(false, "Todos los campos (id_usuario, id_actividad, estado) son obligatorios.", null, res, 400);
        }

        const actividadUsuario = await actividadUsuarioRepository.create(req.body);
        return ApiResponse.send(true, "Actividad de usuario creada con éxito.", actividadUsuario, res, 201);
    } catch (error) {
        console.error("❌ Error en POST /actividades_usuario:", error);
        return ApiResponse.send(false, "Error interno al crear la actividad de usuario.", null, res, 500);
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de actividad de usuario no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const actividadUsuario = await actividadUsuarioRepository.update(id, req.body);

        if (!actividadUsuario) {
            return ApiResponse.send(false, `No se encontró una actividad de usuario con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Actividad de usuario actualizada con éxito.", actividadUsuario, res);
    } catch (error) {
        console.error("❌ Error en PUT /actividades_usuario/:id:", error);
        return ApiResponse.send(false, "Error interno al actualizar la actividad de usuario.", null, res, 500);
    }
};

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de actividad de usuario no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const success = await actividadUsuarioRepository.delete(id);

        if (!success) {
            return ApiResponse.send(false, `No se encontró una actividad de usuario con el ID ${id}.`, null, res, 404);
        }

        return ApiResponse.send(true, "Actividad de usuario eliminada correctamente.", null, res);
    } catch (error) {
        console.error("❌ Error en DELETE /actividades_usuario/:id:", error);
        return ApiResponse.send(false, "Error interno al eliminar la actividad de usuario.", null, res, 500);
    }
};
