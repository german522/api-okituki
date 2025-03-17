const respuestaRepository = require("../repository/respuesta.repository");

exports.getAll = async (req, res) => {
    try {
        const respuestas = await respuestaRepository.getAll();

        if (!respuestas || respuestas.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron respuestas en el catálogo." });
        }

        res.json({ success: true, data: respuestas });
    } catch (error) {
        console.error("❌ Error en GET /respuestas:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener las respuestas." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de respuesta no válido. Debe ser un número entero positivo." });
        }

        const respuesta = await respuestaRepository.getById(id);

        if (!respuesta) {
            return res.status(404).json({ success: false, error: `No se encontró una respuesta con el ID ${id}.` });
        }

        res.json({ success: true, data: respuesta });
    } catch (error) {
        console.error("❌ Error en GET /respuestas/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener la respuesta." });
    }
};

