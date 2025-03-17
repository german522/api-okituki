const resultadoRepository = require("../repository/resultado.repository");

exports.getAll = async (req, res) => {
    try {
        const resultados = await resultadoRepository.getAll();

        if (!resultados || resultados.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron resultados en el sistema." });
        }

        res.json({ success: true, data: resultados });
    } catch (error) {
        console.error("❌ Error en GET /resultados:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener los resultados." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de resultado no válido. Debe ser un número entero positivo." });
        }

        const resultado = await resultadoRepository.getById(id);

        if (!resultado) {
            return res.status(404).json({ success: false, error: `No se encontró un resultado con el ID ${id}.` });
        }

        res.json({ success: true, data: resultado });
    } catch (error) {
        console.error("❌ Error en GET /resultados/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener el resultado." });
    }
};

exports.create = async (req, res) => {
    try {
        const { id_usuario, id_test, puntaje_total, nivel_estres } = req.body;

        if (!id_usuario || !id_test || puntaje_total == null || !nivel_estres) {
            return res.status(400).json({ success: false, error: "Todos los campos (id_usuario, id_test, puntaje_total, nivel_estres) son obligatorios." });
        }

        const resultado = await resultadoRepository.create(req.body);
        res.status(201).json({ success: true, data: resultado });
    } catch (error) {
        console.error("❌ Error en POST /resultados:", error);
        res.status(500).json({ success: false, error: "Error interno al crear el resultado." });
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de resultado no válido. Debe ser un número entero positivo." });
        }

        const resultado = await resultadoRepository.update(id, req.body);

        if (!resultado) {
            return res.status(404).json({ success: false, error: `No se encontró un resultado con el ID ${id}.` });
        }

        res.json({ success: true, data: resultado });
    } catch (error) {
        console.error("❌ Error en PUT /resultados/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al actualizar el resultado." });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de resultado no válido. Debe ser un número entero positivo." });
        }

        const success = await resultadoRepository.delete(id);

        if (!success) {
            return res.status(404).json({ success: false, error: `No se encontró un resultado con el ID ${id}.` });
        }

        res.json({ success: true, message: "Resultado eliminado correctamente." });
    } catch (error) {
        console.error("❌ Error en DELETE /resultados/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al eliminar el resultado." });
    }
};
