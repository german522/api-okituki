const testRepository = require("../repository/test.repository");

const obtenerTestPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const test = await testRepository.getById(id);

        if (!test) {
            return res.status(404).json({ success: false, message: "Test no encontrado" });
        }

        const response = {
            test: {
                id: test.id,
                nombre: test.nombre,
                descripcion: test.descripcion,
                preguntas: test.preguntas.map((pregunta) => ({
                    id: pregunta.id,
                    numero_pregunta: pregunta.numero_pregunta,
                    pregunta: pregunta.pregunta,
                    respuestas: pregunta.respuestas.map((respuesta) => ({
                        id: respuesta.id,
                        respuesta_texto: respuesta.respuesta_texto,
                        valor: respuesta.valor,
                    })),
                })),
            },
        };

        res.json(response);
    } catch (error) {
        console.error("❌ Error al obtener el test:", error);
        res.status(500).json({ success: false, message: "Error interno del servidor" });
    }
};

const getAll = async (req, res) => {
    try {
        const tests = await testRepository.getAll();

        if (!tests || tests.length === 0) {
            return res.status(404).json({ success: false, message: "No se encontraron tests en el catálogo." });
        }

        res.json({ success: true, data: tests });
    } catch (error) {
        console.error("❌ Error en GET /tests:", error);
        res.status(500).json({ success: false, message: "Error interno al obtener los tests." });
    }
};

const getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, message: "ID de test no válido." });
        }

        const test = await testRepository.getById(id);

        if (!test) {
            return res.status(404).json({ success: false, message: `No se encontró un test con el ID ${id}.` });
        }

        res.json({ success: true, data: test });
    } catch (error) {
        console.error("❌ Error en GET /tests/:id:", error);
        res.status(500).json({ success: false, message: "Error interno al obtener el test." });
    }
};

module.exports = { obtenerTestPorId, getAll, getById };


