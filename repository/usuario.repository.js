const { Usuario } = require("../models");

class UsuarioRepository {
    async getAll() {
        return await Usuario.findAll();
    }

    async getById(id) {
        return await Usuario.findByPk(id);
    }

    async create(data) {
        return await Usuario.create(data);
    }

    async update(id, data) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return null;
        return await usuario.update(data);
    }

    async delete(id) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return null;
        await usuario.destroy();
        return true;
    }

    async updatePasswordByPersonaId(id_persona, hashedPassword) {
        const usuario = await Usuario.findOne({ where: { id_persona } });
        if (!usuario) throw new Error('Usuario no encontrado');
        usuario.contrasena = hashedPassword;
        await usuario.save();
        return usuario;
    }
}

module.exports = new UsuarioRepository();
