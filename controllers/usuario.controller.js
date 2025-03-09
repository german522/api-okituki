const usuarioRepository = require("../repository/usuario.repository");

exports.getAll = async (req, res) => {
    try {
        const usuarios = await usuarioRepository.getAll();
        res.json({ success: true, data: usuarios });
    } catch (error) {
        console.error("❌ Error en GET /usuarios:", error);
        res.status(500).json({ success: false, error: "Error al obtener usuarios" });
    }
};

exports.getById = async (req, res) => {
    try {
        const usuario = await usuarioRepository.getById(req.params.id);
        if (!usuario) return res.status(404).json({ success: false, error: "Usuario no encontrado" });
        res.json({ success: true, data: usuario });
    } catch (error) {
        console.error("❌ Error en GET /usuarios/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener usuario" });
    }
};

exports.create = async (req, res) => {
    try {
        const usuario = await usuarioRepository.create(req.body);
        res.status(201).json({ success: true, data: usuario });
    } catch (error) {
        console.error("❌ Error en POST /usuarios:", error);
        res.status(500).json({ success: false, error: "Error al crear usuario" });
    }
};

exports.update = async (req, res) => {
    try {
        const usuario = await usuarioRepository.update(req.params.id, req.body);
        if (!usuario) return res.status(404).json({ success: false, error: "Usuario no encontrado" });
        res.json({ success: true, data: usuario });
    } catch (error) {
        console.error("❌ Error en PUT /usuarios/:id:", error);
        res.status(500).json({ success: false, error: "Error al actualizar usuario" });
    }
};

exports.delete = async (req, res) => {
    try {
        const success = await usuarioRepository.delete(req.params.id);
        if (!success) return res.status(404).json({ success: false, error: "Usuario no encontrado" });
        res.json({ success: true, message: "Usuario eliminado correctamente" });
    } catch (error) {
        console.error("❌ Error en DELETE /usuarios/:id:", error);
        res.status(500).json({ success: false, error: "Error al eliminar usuario" });
    }
};