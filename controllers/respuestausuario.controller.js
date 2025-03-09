const respuestaUsuarioRepository = require("../repository/respuestausuario.repository");

exports.getAll = async (req, res) => {
    try {
        const respuestasUsuario = await respuestaUsuarioRepository.getAll();
        res.json({ success: true, data: respuestasUsuario });
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario:", error);
        res.status(500).json({ success: false, error: "Error al obtener respuestas de usuario" });
    }
};

exports.getById = async (req, res) => {
    try {
        const respuestaUsuario = await respuestaUsuarioRepository.getById(req.params.id);
        if (!respuestaUsuario) return res.status(404).json({ success: false, error: "Respuesta de usuario no encontrada" });
        res.json({ success: true, data: respuestaUsuario });
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener respuesta de usuario" });
    }
};

exports.create = async (req, res) => {
    try {
        const respuestaUsuario = await respuestaUsuarioRepository.create(req.body);
        res.status(201).json({ success: true, data: respuestaUsuario });
    } catch (error) {
        console.error("❌ Error en POST /respuestas_usuario:", error);
        res.status(500).json({ success: false, error: "Error al crear respuesta de usuario" });
    }
};

exports.update = async (req, res) => {
    try {
        const respuestaUsuario = await respuestaUsuarioRepository.update(req.params.id, req.body);
        if (!respuestaUsuario) return res.status(404).json({ success: false, error: "Respuesta de usuario no encontrada" });
        res.json({ success: true, data: respuestaUsuario });
    } catch (error) {
        console.error("❌ Error en PUT /respuestas_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error al actualizar respuesta de usuario" });
    }
};

exports.delete = async (req, res) => {
    try {
        const success = await respuestaUsuarioRepository.delete(req.params.id);
        if (!success) return res.status(404).json({ success: false, error: "Respuesta de usuario no encontrada" });
        res.json({ success: true, message: "Respuesta de usuario eliminada correctamente" });
    } catch (error) {
        console.error("❌ Error en DELETE /respuestas_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error al eliminar respuesta de usuario" });
    }
};