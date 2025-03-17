const tipoActividadRepository = require("../repository/tipoactividad.repository");

exports.getAll = async (req, res) => {
    try {
        const tiposActividad = await tipoActividadRepository.getAll();

        if (!tiposActividad || tiposActividad.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron tipos de actividad en el catálogo." });
        }

        res.json({ success: true, data: tiposActividad });
    } catch (error) {
        console.error("❌ Error en GET /tipo_actividades:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener los tipos de actividad." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de tipo de actividad no válido. Debe ser un número entero positivo." });
        }

        const tipoActividad = await tipoActividadRepository.getById(id);

        if (!tipoActividad) {
            return res.status(404).json({ success: false, error: `No se encontró un tipo de actividad con el ID ${id}.` });
        }

        res.json({ success: true, data: tipoActividad });
    } catch (error) {
        console.error("❌ Error en GET /tipo_actividades/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener el tipo de actividad." });
    }
};
