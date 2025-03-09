const actividadUsuarioRepository = require("../repository/actividadusuario.repository");

exports.getAll = async (req, res) => {
    try {
        const actividadesUsuarios = await actividadUsuarioRepository.getAll();
        res.json({ success: true, data: actividadesUsuarios });
    } catch (error) {
        console.error("❌ Error en GET /actividades_usuario:", error);
        res.status(500).json({ success: false, error: "Error al obtener actividades de usuario" });
    }
};

exports.getById = async (req, res) => {
    try {
        const actividadUsuario = await actividadUsuarioRepository.getById(req.params.id);
        if (!actividadUsuario) return res.status(404).json({ success: false, error: "Actividad de usuario no encontrada" });
        res.json({ success: true, data: actividadUsuario });
    } catch (error) {
        console.error("❌ Error en GET /actividades_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener actividad de usuario" });
    }
};

exports.create = async (req, res) => {
    try {
        const actividadUsuario = await actividadUsuarioRepository.create(req.body);
        res.status(201).json({ success: true, data: actividadUsuario });
    } catch (error) {
        console.error("❌ Error en POST /actividades_usuario:", error);
        res.status(500).json({ success: false, error: "Error al crear actividad de usuario" });
    }
};

exports.update = async (req, res) => {
    try {
        const actividadUsuario = await actividadUsuarioRepository.update(req.params.id, req.body);
        if (!actividadUsuario) return res.status(404).json({ success: false, error: "Actividad de usuario no encontrada" });
        res.json({ success: true, data: actividadUsuario });
    } catch (error) {
        console.error("❌ Error en PUT /actividades_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error al actualizar actividad de usuario" });
    }
};

exports.delete = async (req, res) => {
    try {
        const success = await actividadUsuarioRepository.delete(req.params.id);
        if (!success) return res.status(404).json({ success: false, error: "Actividad de usuario no encontrada" });
        res.json({ success: true, message: "Actividad de usuario eliminada correctamente" });
    } catch (error) {
        console.error("❌ Error en DELETE /actividades_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error al eliminar actividad de usuario" });
    }
};
