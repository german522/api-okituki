const respuestasUsuarioActividadesRepository = require("../repository/respuestasusuarioactividades.repository");

exports.getAll = async (req, res) => {
    try {
        const respuestas = await respuestasUsuarioActividadesRepository.getAll();

        if (!respuestas || respuestas.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron respuestas de usuario en actividades." });
        }

        res.json({ success: true, data: respuestas });
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario_actividades:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener las respuestas de usuario en actividades." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de respuesta no válido. Debe ser un número entero positivo." });
        }

        const respuesta = await respuestasUsuarioActividadesRepository.getById(id);

        if (!respuesta) {
            return res.status(404).json({ success: false, error: `No se encontró una respuesta de usuario en actividades con el ID ${id}.` });
        }

        res.json({ success: true, data: respuesta });
    } catch (error) {
        console.error("❌ Error en GET /respuestas_usuario_actividades/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener la respuesta de usuario en actividades." });
    }
};

exports.create = async (req, res) => {
    try {
        const { id_actividad_usuario, respuesta_texto } = req.body;

        if (!id_actividad_usuario || !respuesta_texto) {
            return res.status(400).json({ success: false, error: "Todos los campos (id_actividad_usuario, respuesta_texto) son obligatorios." });
        }

        const respuesta = await respuestasUsuarioActividadesRepository.create(req.body);
        res.status(201).json({ success: true, data: respuesta });
    } catch (error) {
        console.error("❌ Error en POST /respuestas_usuario_actividades:", error);
        res.status(500).json({ success: false, error: "Error interno al crear la respuesta de usuario en actividades." });
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de respuesta no válido. Debe ser un número entero positivo." });
        }

        const respuesta = await respuestasUsuarioActividadesRepository.update(id, req.body);

        if (!respuesta) {
            return res.status(404).json({ success: false, error: `No se encontró una respuesta de usuario en actividades con el ID ${id}.` });
        }

        res.json({ success: true, data: respuesta });
    } catch (error) {
        console.error("❌ Error en PUT /respuestas_usuario_actividades/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al actualizar la respuesta de usuario en actividades." });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de respuesta no válido. Debe ser un número entero positivo." });
        }

        const success = await respuestasUsuarioActividadesRepository.delete(id);

        if (!success) {
            return res.status(404).json({ success: false, error: `No se encontró una respuesta de usuario en actividades con el ID ${id}.` });
        }

        res.json({ success: true, message: "Respuesta de usuario en actividades eliminada correctamente." });
    } catch (error) {
        console.error("❌ Error en DELETE /respuestas_usuario_actividades/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al eliminar la respuesta de usuario en actividades." });
    }
};