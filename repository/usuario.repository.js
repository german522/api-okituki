const { Usuario, Persona, sequelize } = require("../models");
const personaRepository = require('./persona.repository');


class UsuarioRepository {
    async getAll() {
        return await Usuario.findAll();
    }

    async getById(id) {
        return await Usuario.findByPk(id);
    }

    async getByCorreo(correo) {
        return await Usuario.findOne({
            include: {
                model: Persona,
                as: "persona",
                where: { correo }
            }
        });
    }

    async create(data) {
        return await Usuario.create(data);
    }

    async update(id, data) {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) return null;
        return await usuario.update(data);
    }

    async deleteUsuario(id) {
        const transaction = await sequelize.transaction();
        try {
            const usuario = await Usuario.findByPk(id, { transaction });
            if (!usuario) {
                await transaction.rollback();
                return null;
            }
            const idPersona = usuario.id_persona;

            await usuario.destroy({ transaction });


            await personaRepository.deletePersona(idPersona, transaction);

            await transaction.commit();
            return true;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }

    async updatePasswordByPersonaId(id_persona, hashedPassword) {
        const usuario = await Usuario.findOne({ where: { id_persona } });
        if (!usuario) throw new Error("Usuario no encontrado");
        usuario.contrasena = hashedPassword;
        await usuario.save();
        return usuario;
    }

    async verificarCodigo(correo, codigo) {
        const usuario = await Usuario.findOne({ where: { correo, codigo_verificacion: codigo } });
        if (!usuario) return null;
        usuario.verificado = true;
        usuario.codigo_verificacion = null;
        await usuario.save();
        return usuario;
    }

    async guardarCodigo(correo, codigo) {
        const usuario = await Usuario.findOne({ where: { correo } });
        if (!usuario) return null;
        usuario.codigo_verificacion = codigo;
        await usuario.save();
        return usuario;
    }
}

module.exports = new UsuarioRepository();
