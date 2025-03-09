const preguntaRepository = require("../repository/pregunta.repository");

exports.getAll = async (req, res) => {
    try {
        const preguntas = await preguntaRepository.getAll();
        res.json({ success: true, data: preguntas });
    } catch (error) {
        console.error("❌ Error en GET /preguntas:", error);
        res.status(500).json({ success: false, error: "Error al obtener preguntas" });
    }
};

exports.getById = async (req, res) => {
    try {
        const pregunta = await preguntaRepository.getById(req.params.id);
        if (!pregunta) return res.status(404).json({ success: false, error: "Pregunta no encontrada" });
        res.json({ success: true, data: pregunta });
    } catch (error) {
        console.error("❌ Error en GET /preguntas/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener pregunta" });
    }
};

exports.create = async (req, res) => {
    try {
        const pregunta = await preguntaRepository.create(req.body);
        res.status(201).json({ success: true, data: pregunta });
    } catch (error) {
        console.error("❌ Error en POST /preguntas:", error);
        res.status(500).json({ success: false, error: "Error al crear pregunta" });
    }
};

exports.update = async (req, res) => {
    try {
        const pregunta = await preguntaRepository.update(req.params.id, req.body);
        if (!pregunta) return res.status(404).json({ success: false, error: "Pregunta no encontrada" });
        res.json({ success: true, data: pregunta });
    } catch (error) {
        console.error("❌ Error en PUT /preguntas/:id:", error);
        res.status(500).json({ success: false, error: "Error al actualizar pregunta" });
    }
};

exports.delete = async (req, res) => {
    try {
        const success = await preguntaRepository.delete(req.params.id);
        if (!success) return res.status(404).json({ success: false, error: "Pregunta no encontrada" });
        res.json({ success: true, message: "Pregunta eliminada correctamente" });
    } catch (error) {
        console.error("❌ Error en DELETE /preguntas/:id:", error);
        res.status(500).json({ success: false, error: "Error al eliminar pregunta" });
    }
};
