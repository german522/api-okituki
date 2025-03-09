const respuestaRepository = require("../repository/respuesta.repository");

exports.getAll = async (req, res) => {
    try {
        const respuestas = await respuestaRepository.getAll();
        res.json({ success: true, data: respuestas });
    } catch (error) {
        console.error("❌ Error en GET /respuestas:", error);
        res.status(500).json({ success: false, error: "Error al obtener respuestas" });
    }
};

exports.getById = async (req, res) => {
    try {
        const respuesta = await respuestaRepository.getById(req.params.id);
        if (!respuesta) return res.status(404).json({ success: false, error: "Respuesta no encontrada" });
        res.json({ success: true, data: respuesta });
    } catch (error) {
        console.error("❌ Error en GET /respuestas/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener respuesta" });
    }
};
