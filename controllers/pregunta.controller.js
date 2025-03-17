const preguntaRepository = require("../repository/pregunta.repository");

exports.getAll = async (req, res) => {
    try {
        const preguntas = await preguntaRepository.getAll();

        if (!preguntas || preguntas.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron preguntas en el catálogo." });
        }

        res.json({ success: true, data: preguntas });
    } catch (error) {
        console.error("❌ Error en GET /preguntas:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener las preguntas." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de pregunta no válido. Debe ser un número entero positivo." });
        }

        const pregunta = await preguntaRepository.getById(id);

        if (!pregunta) {
            return res.status(404).json({ success: false, error: `No se encontró una pregunta con el ID ${id}.` });
        }

        res.json({ success: true, data: pregunta });
    } catch (error) {
        console.error("❌ Error en GET /preguntas/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener la pregunta." });
    }
};
