const psicologoRepository = require("../repository/psicologo.repository");

exports.getAll = async (req, res) => {
    try {
        const psicologos = await psicologoRepository.getAll();
        res.json({ success: true, data: psicologos });
    } catch (error) {
        console.error("❌ Error en GET /psicologos:", error);
        res.status(500).json({ success: false, error: "Error al obtener psicólogos" });
    }
};

exports.getById = async (req, res) => {
    try {
        const psicologo = await psicologoRepository.getById(req.params.id);
        if (!psicologo) return res.status(404).json({ success: false, error: "Psicólogo no encontrado" });
        res.json({ success: true, data: psicologo });
    } catch (error) {
        console.error("❌ Error en GET /psicologos/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener psicólogo" });
    }
};

exports.create = async (req, res) => {
    try {
        const psicologo = await psicologoRepository.create(req.body);
        res.status(201).json({ success: true, data: psicologo });
    } catch (error) {
        console.error("❌ Error en POST /psicologos:", error);
        res.status(500).json({ success: false, error: "Error al crear psicólogo" });
    }
};

exports.update = async (req, res) => {
    try {
        const psicologo = await psicologoRepository.update(req.params.id, req.body);
        if (!psicologo) return res.status(404).json({ success: false, error: "Psicólogo no encontrado" });
        res.json({ success: true, data: psicologo });
    } catch (error) {
        console.error("❌ Error en PUT /psicologos/:id:", error);
        res.status(500).json({ success: false, error: "Error al actualizar psicólogo" });
    }
};

exports.delete = async (req, res) => {
    try {
        const success = await psicologoRepository.delete(req.params.id);
        if (!success) return res.status(404).json({ success: false, error: "Psicólogo no encontrado" });
        res.json({ success: true, message: "Psicólogo eliminado correctamente" });
    } catch (error) {
        console.error("❌ Error en DELETE /psicologos/:id:", error);
        res.status(500).json({ success: false, error: "Error al eliminar psicólogo" });
    }
};