const respuestasUsuarioActividadesRepository = require("../repository/respuestasusuarioactividades.repository");

exports.getAll = async (req, res) => {
    try {
        const respuestas = await respuestasUsuarioActividadesRepository.getAll();
        res.json({ success: true, data: respuestas });
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario_actividades:", error);
        res.status(500).json({ success: false, error: "Error al obtener respuestas de usuario actividades" });
    }
};

exports.getById = async (req, res) => {
    try {
        const respuesta = await respuestasUsuarioActividadesRepository.getById(req.params.id);
        if (!respuesta) return res.status(404).json({ success: false, error: "Respuesta de usuario actividad no encontrada" });
        res.json({ success: true, data: respuesta });
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario_actividades/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener respuesta de usuario actividad" });
    }
};

exports.create = async (req, res) => {
    try {
        const respuesta = await respuestasUsuarioActividadesRepository.create(req.body);
        res.status(201).json({ success: true, data: respuesta });
    } catch (error) {
        console.error("❌ Error en POST /respuestas_usuario_actividades:", error);
        res.status(500).json({ success: false, error: "Error al crear respuesta de usuario actividad" });
    }
};

exports.update = async (req, res) => {
    try {
        const respuesta = await respuestasUsuarioActividadesRepository.update(req.params.id, req.body);
        if (!respuesta) return res.status(404).json({ success: false, error: "Respuesta de usuario actividad no encontrada" });
        res.json({ success: true, data: respuesta });
    } catch (error) {
        console.error("❌ Error en PUT /respuestas_usuario_actividades/:id:", error);
        res.status(500).json({ success: false, error: "Error al actualizar respuesta de usuario actividad" });
    }
};

exports.delete = async (req, res) => {
    try {
        const success = await respuestasUsuarioActividadesRepository.delete(req.params.id);
        if (!success) return res.status(404).json({ success: false, error: "Respuesta de usuario actividad no encontrada" });
        res.json({ success: true, message: "Respuesta de usuario actividad eliminada correctamente" });
    } catch (error) {
        console.error("❌ Error en DELETE /respuestas_usuario_actividades/:id:", error);
        res.status(500).json({ success: false, error: "Error al eliminar respuesta de usuario actividad" });
    }
};


