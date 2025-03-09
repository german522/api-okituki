const actividadRepository = require("../repository/actividad.repository");

exports.getAll = async (req, res) => {
    try {
        const actividades = await actividadRepository.getAll();
        res.json({ success: true, data: actividades });
    } catch (error) {
        console.error("❌ Error en GET /actividades:", error);
        res.status(500).json({ success: false, error: "Error al obtener actividades" });
    }
};

exports.getById = async (req, res) => {
    try {
        const actividad = await actividadRepository.getById(req.params.id);
        if (!actividad) return res.status(404).json({ success: false, error: "Actividad no encontrada" });
        res.json({ success: true, data: actividad });
    } catch (error) {
        console.error("❌ Error en GET /actividades/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener actividad" });
    }
};
