const usuarioRepository = require("../repository/usuario.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const usuarios = await usuarioRepository.getAll();

        if (!usuarios || usuarios.length === 0) {
            return ApiResponse.send(false, "No se encontraron usuarios en el sistema.", null, res, 404);
        }

        return ApiResponse.send(true, "Usuarios obtenidos con éxito.", usuarios, res);
    } catch (error) {
        console.error("❌ Error en GET /usuarios:", error);
        return ApiResponse.send(false, "Error interno al obtener usuarios.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const usuario = await usuarioRepository.getById(req.params.id);

        if (!usuario) {
            return ApiResponse.send(false, "Usuario no encontrado", null, res, 404);
        }

        return ApiResponse.send(true, "Usuario obtenido con éxito.", usuario, res);
    } catch (error) {
        console.error("❌ Error en GET /usuarios/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener usuario.", null, res, 500);
    }
};

exports.create = async (req, res) => {
    try {
        const usuario = await usuarioRepository.create(req.body);
        return ApiResponse.send(true, "Usuario creado con éxito.", usuario, res, 201);
    } catch (error) {
        console.error("❌ Error en POST /usuarios:", error);
        return ApiResponse.send(false, "Error al crear usuario.", null, res, 500);
    }
};

exports.update = async (req, res) => {
    try {
        const usuario = await usuarioRepository.update(req.params.id, req.body);

        if (!usuario) {
            return ApiResponse.send(false, "Usuario no encontrado", null, res, 404);
        }

        return ApiResponse.send(true, "Usuario actualizado con éxito.", usuario, res);
    } catch (error) {
        console.error("❌ Error en PUT /usuarios/:id:", error);
        return ApiResponse.send(false, "Error al actualizar usuario.", null, res, 500);
    }
};

exports.delete = async (req, res) => {
    try {
        const success = await usuarioRepository.delete(req.params.id);

        if (!success) {
            return ApiResponse.send(false, "Usuario no encontrado", null, res, 404);
        }

        return ApiResponse.send(true, "Usuario eliminado correctamente.", null, res);
    } catch (error) {
        console.error("❌ Error en DELETE /usuarios/:id:", error);
        return ApiResponse.send(false, "Error al eliminar usuario.", null, res, 500);
    }
};
