const actividadUsuarioRepository = require("../repository/actividadusuario.repository");

exports.getAll = async (req, res) => {
    try {
        const actividadesUsuarios = await actividadUsuarioRepository.getAll();

        if (!actividadesUsuarios || actividadesUsuarios.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron actividades de usuario en el sistema." });
        }

        res.json({ success: true, data: actividadesUsuarios });
    } catch (error) {
        console.error("❌ Error en GET /actividades_usuario:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener las actividades de usuario." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de actividad de usuario no válido. Debe ser un número entero positivo." });
        }

        const actividadUsuario = await actividadUsuarioRepository.getById(id);

        if (!actividadUsuario) {
            return res.status(404).json({ success: false, error: `No se encontró una actividad de usuario con el ID ${id}.` });
        }

        res.json({ success: true, data: actividadUsuario });
    } catch (error) {
        console.error("❌ Error en GET /actividades_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener la actividad de usuario." });
    }
};

exports.create = async (req, res) => {
    try {
        const { id_usuario, id_actividad, estado } = req.body;

        if (!id_usuario || !id_actividad || !estado) {
            return res.status(400).json({ success: false, error: "Todos los campos (id_usuario, id_actividad, estado) son obligatorios." });
        }

        const actividadUsuario = await actividadUsuarioRepository.create(req.body);
        res.status(201).json({ success: true, data: actividadUsuario });
    } catch (error) {
        console.error("❌ Error en POST /actividades_usuario:", error);
        res.status(500).json({ success: false, error: "Error interno al crear la actividad de usuario." });
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de actividad de usuario no válido. Debe ser un número entero positivo." });
        }

        const actividadUsuario = await actividadUsuarioRepository.update(id, req.body);

        if (!actividadUsuario) {
            return res.status(404).json({ success: false, error: `No se encontró una actividad de usuario con el ID ${id}.` });
        }

        res.json({ success: true, data: actividadUsuario });
    } catch (error) {
        console.error("❌ Error en PUT /actividades_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al actualizar la actividad de usuario." });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de actividad de usuario no válido. Debe ser un número entero positivo." });
        }

        const success = await actividadUsuarioRepository.delete(id);

        if (!success) {
            return res.status(404).json({ success: false, error: `No se encontró una actividad de usuario con el ID ${id}.` });
        }

        res.json({ success: true, message: "Actividad de usuario eliminada correctamente." });
    } catch (error) {
        console.error("❌ Error en DELETE /actividades_usuario/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al eliminar la actividad de usuario." });
    }
};
