const resultadoRepository = require("../repository/resultado.repository");

exports.getAll = async (req, res) => {
    try {
        const resultados = await resultadoRepository.getAll();
        res.json({ success: true, data: resultados });
    } catch (error) {
        console.error("❌ Error en GET /resultados:", error);
        res.status(500).json({ success: false, error: "Error al obtener resultados" });
    }
};

exports.getById = async (req, res) => {
    try {
        const resultado = await resultadoRepository.getById(req.params.id);
        if (!resultado) return res.status(404).json({ success: false, error: "Resultado no encontrado" });
        res.json({ success: true, data: resultado });
    } catch (error) {
        console.error("❌ Error en GET /resultados/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener resultado" });
    }
};
