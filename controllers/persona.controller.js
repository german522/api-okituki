const personaRepository = require("../repository/persona.repository");
const { ValidationError, DatabaseError } = require("sequelize");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
  try {
    const personas = await personaRepository.getAll();
    return ApiResponse.send(true, "Personas obtenidas con éxito.", personas, res);
  } catch (error) {
    console.error("❌ Error en GET /personas:", error);
    return ApiResponse.send(false, "Error al obtener personas.", null, res, 500);
  }
};

exports.getById = async (req, res) => {
  try {
    const persona = await personaRepository.getById(req.params.id);
    if (!persona) {
      return ApiResponse.send(false, "Persona no encontrada.", null, res, 404);
    }
    return ApiResponse.send(true, "Persona obtenida con éxito.", persona, res);
  } catch (error) {
    console.error("❌ Error en GET /personas/:id:", error);
    return ApiResponse.send(false, "Error al obtener persona.", null, res, 500);
  }
};

exports.create = async (req, res) => {
  try {
    const { nombre, apellido, correo, tipo } = req.body;

    if (!nombre || !apellido || !correo || !tipo) {
      return ApiResponse.send(false, "Faltan campos obligatorios: nombre, apellido, correo, tipo.", null, res, 400);
    }

    const persona = await personaRepository.create(req.body);
    return ApiResponse.send(true, "Persona creada con éxito.", persona, res, 201);
  } catch (error) {
    console.error("❌ Error en POST /personas:", error);

    if (error instanceof ValidationError) {
      return ApiResponse.send(false, error.errors.map(e => e.message), null, res, 400);
    }

    if (error instanceof DatabaseError) {
      return ApiResponse.send(false, "Error en la base de datos.", null, res, 500);
    }

    return ApiResponse.send(false, "Error al crear persona.", null, res, 500);
  }
};

exports.update = async (req, res) => {
  try {
    const { nombre, apellido, correo, tipo } = req.body;

    if (!nombre && !apellido && !correo && !tipo) {
      return ApiResponse.send(false, "Debe proporcionar al menos un campo para actualizar.", null, res, 400);
    }

    const persona = await personaRepository.update(req.params.id, req.body);
    if (!persona) {
      return ApiResponse.send(false, "Persona no encontrada.", null, res, 404);
    }

    return ApiResponse.send(true, "Persona actualizada con éxito.", persona, res);
  } catch (error) {
    console.error("❌ Error en PUT /personas/:id:", error);

    if (error instanceof ValidationError) {
      return ApiResponse.send(false, error.errors.map(e => e.message), null, res, 400);
    }

    if (error instanceof DatabaseError) {
      return ApiResponse.send(false, "Error en la base de datos.", null, res, 500);
    }

    return ApiResponse.send(false, "Error al actualizar persona.", null, res, 500);
  }
};

exports.delete = async (req, res) => {
  try {
    const success = await personaRepository.delete(req.params.id);
    if (!success) {
      return ApiResponse.send(false, "Persona no encontrada.", null, res, 404);
    }

    return ApiResponse.send(true, "Persona eliminada correctamente.", null, res);
  } catch (error) {
    console.error("❌ Error en DELETE /personas/:id:", error);

    if (error instanceof DatabaseError) {
      return ApiResponse.send(false, "Error en la base de datos.", null, res, 500);
    }

    return ApiResponse.send(false, "Error al eliminar persona.", null, res, 500);
  }
};
