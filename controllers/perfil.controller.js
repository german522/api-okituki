const usuarioRepository = require("../repository/usuario.repository");
const personaRepository = require("../repository/persona.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.updatePerfil = async (req, res) => {
    try {
        const { id } = req.params;
        const { personaData, usuarioData } = req.body;

        // Buscar usuario para obtener id_persona
        const usuario = await usuarioRepository.getById(id);
        if (!usuario) {
            return ApiResponse.send(false, "Usuario no encontrado", null, res, 404);
        }

        const personaId = usuario.id_persona;

        // Actualizar datos de Persona
        const personaActualizada = await personaRepository.update(personaId, personaData);

        // Actualizar datos de Usuario
        const usuarioActualizado = await usuarioRepository.update(id, usuarioData);

        return ApiResponse.send(true, "Perfil actualizado con éxito.", {
            persona: personaActualizada,
            usuario: usuarioActualizado
        }, res);
    } catch (error) {
        console.error("❌ Error en PUT /perfil/:id:", error);
        return ApiResponse.send(false, "Error al actualizar perfil.", null, res, 500);
    }
};
