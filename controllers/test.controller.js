const testRepository = require("../repository/test.repository");

exports.getAll = async (req, res) => {
    try {
        const tests = await testRepository.getAll();
        res.json({ success: true, data: tests });
    } catch (error) {
        console.error("❌ Error en GET /tests:", error);
        res.status(500).json({ success: false, error: "Error al obtener tests" });
    }
};

exports.getById = async (req, res) => {
    try {
        const test = await testRepository.getById(req.params.id);
        if (!test) return res.status(404).json({ success: false, error: "Test no encontrado" });
        res.json({ success: true, data: test });
    } catch (error) {
        console.error("❌ Error en GET /tests/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener test" });
    }
};

exports.create = async (req, res) => {
    try {
        const test = await testRepository.create(req.body);
        res.status(201).json({ success: true, data: test });
    } catch (error) {
        console.error("❌ Error en POST /tests:", error);
        res.status(500).json({ success: false, error: "Error al crear test" });
    }
};

exports.update = async (req, res) => {
    try {
        const test = await testRepository.update(req.params.id, req.body);
        if (!test) return res.status(404).json({ success: false, error: "Test no encontrado" });
        res.json({ success: true, data: test });
    } catch (error) {
        console.error("❌ Error en PUT /tests/:id:", error);
        res.status(500).json({ success: false, error: "Error al actualizar test" });
    }
};

exports.delete = async (req, res) => {
    try {
        const success = await testRepository.delete(req.params.id);
        if (!success) return res.status(404).json({ success: false, error: "Test no encontrado" });
        res.json({ success: true, message: "Test eliminado correctamente" });
    } catch (error) {
        console.error("❌ Error en DELETE /tests/:id:", error);
        res.status(500).json({ success: false, error: "Error al eliminar test" });
    }
};
