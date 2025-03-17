const psicologoRepository = require("../repository/psicologo.repository");

exports.getAll = async (req, res) => {
    try {
        const psicologos = await psicologoRepository.getAll();

        if (!psicologos || psicologos.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron psicólogos en el catálogo." });
        }

        res.json({ success: true, data: psicologos });
    } catch (error) {
        console.error("❌ Error en GET /psicologos:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener los psicólogos." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de psicólogo no válido. Debe ser un número entero positivo." });
        }

        const psicologo = await psicologoRepository.getById(id);

        if (!psicologo) {
            return res.status(404).json({ success: false, error: `No se encontró un psicólogo con el ID ${id}.` });
        }

        res.json({ success: true, data: psicologo });
    } catch (error) {
        console.error("❌ Error en GET /psicologos/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener el psicólogo." });
    }
};
