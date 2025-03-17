const testRepository = require("../repository/test.repository");

exports.getAll = async (req, res) => {
    try {
        const tests = await testRepository.getAll();

        if (!tests || tests.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron tests en el catálogo." });
        }

        res.json({ success: true, data: tests });
    } catch (error) {
        console.error("❌ Error en GET /tests:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener los tests." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de test no válido. Debe ser un número entero positivo." });
        }

        const test = await testRepository.getById(id);

        if (!test) {
            return res.status(404).json({ success: false, error: `No se encontró un test con el ID ${id}.` });
        }

        res.json({ success: true, data: test });
    } catch (error) {
        console.error("❌ Error en GET /tests/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener el test." });
    }
};

