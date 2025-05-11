const { Persona, Usuario, sequelize } = require("../models");
const { cloudinary } = require('../config/cloudinary');

class PersonaRepository {
    async getAll() {
        return await Persona.findAll();
    }

    async getById(id) {
        return await Persona.findByPk(id);
    }

    async create(data) {
        return await Persona.create(data);
    }

    async update(id, data) {
        const persona = await Persona.findByPk(id);
        if (!persona) return null;
        return await persona.update(data);
    }

    async deletePersona(id, transaction) {
        try {
            await Usuario.destroy({ where: { id_persona: id }, transaction });
            await Persona.destroy({ where: { id }, transaction });
        } catch (error) {
            throw error;
        }
    }

    async getByNombre(correo) {
        return await Persona.findOne({ where: { correo } });
    }

    async subirImagenDesdeUsuario(id_usuario, imagenPath) {
        try {
            const usuario = await Usuario.findByPk(id_usuario);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }

            const persona = await Persona.findByPk(usuario.id_persona);
            if (!persona) {
                throw new Error('Persona no encontrada');
            }

            const resultado = await cloudinary.uploader.upload(imagenPath);

            await persona.update({ URL_imagen: resultado.secure_url });
            return { url: resultado.secure_url };
        } catch (error) {
            console.error("Error al subir la imagen desde usuario:", error);
            throw error;
        }
    }
}

module.exports = new PersonaRepository();
