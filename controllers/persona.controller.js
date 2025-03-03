const { Persona } = require("../models");

//Mostrar
exports.getAll = async (req, res) => {
  try {
    const personas = await Persona.findAll();
    res.json({ success: true, data: personas });
  } catch (error) {
    console.error("Error en GET /personas:", error);
    res.status(500).json({ success: false, error: "Error al obtener personas" });
  }
};

// MostrarxID
exports.getById = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) return res.status(404).json({ success: false, error: "Persona no encontrada" });
    res.json({ success: true, data: persona });
  } catch (error) {
    console.error("Error en GET /personas/:id:", error);
    res.status(500).json({ success: false, error: "Error al obtener persona" });
  }
};

// Crear 
exports.create = async (req, res) => {
  try {
    const { nombre, telefono, correo, tipo, fotoperfilURL } = req.body;
    const persona = await Persona.create({ nombre, telefono, correo, tipo, fotoperfilURL });
    res.status(201).json({ success: true, data: persona });
  } catch (error) {
    console.error(" Error en POST /personas:", error);
    res.status(500).json({ success: false, error: "Error al crear persona" });
  }
};

// Actualizar
exports.update = async (req, res) => {
  try {
    const { nombre, telefono, correo, tipo, fotoperfilURL } = req.body;
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) return res.status(404).json({ success: false, error: "Persona no encontrada" });

    await persona.update({ nombre, telefono, correo, tipo, fotoperfilURL });
    res.json({ success: true, data: persona });
  } catch (error) {
    console.error("Error en PUT /personas/:id:", error);
    res.status(500).json({ success: false, error: "Error al actualizar persona" });
  }
};

// Eliminar 
exports.remove = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (!persona) return res.status(404).json({ success: false, error: "Persona no encontrada" });

    await persona.destroy();
    res.json({ success: true, message: "Persona eliminada correctamente" });
  } catch (error) {
    console.error("Error en DELETE /personas/:id:", error);
    res.status(500).json({ success: false, error: "Error al eliminar persona" });
  }
};
