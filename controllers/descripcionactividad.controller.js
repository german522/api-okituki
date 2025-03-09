const descripcionActividadRepository = require("../repository/descripcionactividad.repository");

exports.getAll = async (req, res) => {
    try {
        const descripciones = await descripcionActividadRepository.getAll();
        res.json({ success: true, data: descripciones });
    } catch (error) {
        console.error("❌ Error en GET /descripcion_actividad:", error);
        res.status(500).json({ success: false, error: "Error al obtener descripciones de actividad" });
    }
};

exports.getById = async (req, res) => {
    try {
        const descripcion = await descripcionActividadRepository.getById(req.params.id);
        if (!descripcion) return res.status(404).json({ success: false, error: "Descripción de actividad no encontrada" });
        res.json({ success: true, data: descripcion });
    } catch (error) {
        console.error("❌ Error en GET /descripcion_actividad/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener descripción de actividad" });
    }
};