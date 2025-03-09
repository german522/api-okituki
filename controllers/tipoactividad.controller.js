const tipoActividadRepository = require("../repository/tipoactividad.repository");

exports.getAll = async (req, res) => {
    try {
        const tipoActividad = await tipoActividadRepository.getAll();
        res.json({ success: true, data: tipoActividad });
    } catch (error) {
        console.error("❌ Error en GET /tipo_actividades:", error);
        res.status(500).json({ success: false, error: "Error al obtener tipos de actividades" });
    }
};

exports.getById = async (req, res) => {
    try {
        const tipoActividad = await tipoActividadRepository.getById(req.params.id);
        if (!tipoActividad) return res.status(404).json({ success: false, error: "Tipo de actividad no encontrada" });
        res.json({ success: true, data: tipoActividad });
    } catch (error) {
        console.error("❌ Error en GET /tipo_actividades/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener tipo de actividad" });
    }
};