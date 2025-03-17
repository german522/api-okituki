const respuestaUsuarioRepository = require("../repository/respuestausuario.repository");

exports.getAll = async (req, res) => {
    try {
        const respuestasUsuario = await respuestaUsuarioRepository.getAll();

        if (!respuestasUsuario || respuestasUsuario.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron respuestas de usuario en el sistema." });
        }

        res.json({ success: true, data: respuestasUsuario });
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener las respuestas de usuario." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de respuesta de usuario no válido. Debe ser un número entero positivo." });
        }

        const respuestaUsuario = await respuestaUsuarioRepository.getById(id);

        if (!respuestaUsuario) {
            return res.status(404).json({ success: false, error: `No se encontró una respuesta de usuario con el ID ${id}.` });
        }

        res.json({ success: true, data: respuestaUsuario });
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener la respuesta de usuario." });
    }
};

exports.create = async (req, res) => {
    try {
        const { id_resultado, id_pregunta, id_respuesta } = req.body;

        if (!id_resultado || !id_pregunta || !id_respuesta) {
            return res.status(400).json({ success: false, error: "Todos los campos (id_resultado, id_pregunta, id_respuesta) son obligatorios." });
        }

        const respuestaUsuario = await respuestaUsuarioRepository.create(req.body);
        res.status(201).json({ success: true, data: respuestaUsuario });
    } catch (error) {
        console.error("❌ Error en POST /respuestas_usuario:", error);
        res.status(500).json({ success: false, error: "Error interno al crear la respuesta de usuario." });
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de respuesta de usuario no válido. Debe ser un número entero positivo." });
        }

        const respuestaUsuario = await respuestaUsuarioRepository.update(id, req.body);

        if (!respuestaUsuario) {
            return res.status(404).json({ success: false, error: `No se encontró una respuesta de usuario con el ID ${id}.` });
        }

        res.json({ success: true, data: respuestaUsuario });
    } catch (error) {
        console.error("❌ Error en PUT /respuestas_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al actualizar la respuesta de usuario." });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de respuesta de usuario no válido. Debe ser un número entero positivo." });
        }

        const success = await respuestaUsuarioRepository.delete(id);

        if (!success) {
            return res.status(404).json({ success: false, error: `No se encontró una respuesta de usuario con el ID ${id}.` });
        }

        res.json({ success: true, message: "Respuesta de usuario eliminada correctamente." });
    } catch (error) {
        console.error("❌ Error en DELETE /respuestas_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al eliminar la respuesta de usuario." });
    }
};