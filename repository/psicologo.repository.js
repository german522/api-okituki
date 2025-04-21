// Repositorio Psicólogo actualizado
const { Psicologo, Persona } = require("../models");

class PsicologoRepository {
    async getAll() {
        return await Psicologo.findAll({
            attributes: ['id', 'id_persona', 'especialidad', 'experiencia', 'horario_disponible'],
            include: {
                model: Persona,
                as: 'persona',
                attributes: ['nombre', 'apellido', 'telefono', 'URL_imagen']
            }
        });
    }


    async getById(id) {
        return await Psicologo.findByPk(id, {
            attributes: ['id', 'id_persona', 'especialidad', 'experiencia', 'horario_disponible'],
            include: {
                model: Persona,
                as: 'persona',
                attributes: ['nombre', 'apellido', 'telefono', 'URL_imagen']
            }
        });
    }

    async create(data) {
        return await Psicologo.create(data);
    }

    async update(id, data) {
        const psicologo = await Psicologo.findByPk(id);
        if (!psicologo) return null;
        return await psicologo.update(data);
    }

    async delete(id) {
        const psicologo = await Psicologo.findByPk(id);
        if (!psicologo) return null;
        await psicologo.destroy();
        return true;
    }
}

module.exports = new PsicologoRepository();