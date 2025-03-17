const actividadRepository = require("../repository/actividad.repository");

exports.getAll = async (req, res) => {
    try {
        const actividades = await actividadRepository.getAll();

        if (!actividades || actividades.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron actividades en el catálogo." });
        }

        res.json({ success: true, data: actividades });
    } catch (error) {
        console.error("❌ Error en GET /actividades:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener las actividades." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de actividad no válido. Debe ser un número entero positivo." });
        }

        const actividad = await actividadRepository.getById(id);

        if (!actividad) {
            return res.status(404).json({ success: false, error: `No se encontró una actividad con el ID ${id}.` });
        }

        res.json({ success: true, data: actividad });
    } catch (error) {
        console.error("❌ Error en GET /actividades/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener la actividad." });
    }
};
