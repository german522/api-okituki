const personaRepository = require("../repository/persona.repository");

exports.getAll = async (req, res) => {
  try {
    const personas = await personaRepository.getAll();
    res.json({ success: true, data: personas });
  } catch (error) {
    console.error("❌ Error en GET /personas:", error);
    res.status(500).json({ success: false, error: "Error al obtener personas" });
  }
};

exports.getById = async (req, res) => {
  try {
    const persona = await personaRepository.getById(req.params.id);
    if (!persona) return res.status(404).json({ success: false, error: "Persona no encontrada" });
    res.json({ success: true, data: persona });
  } catch (error) {
    console.error("❌ Error en GET /personas/:id:", error);
    res.status(500).json({ success: false, error: "Error al obtener persona" });
  }
};

exports.create = async (req, res) => {
  try {
    const persona = await personaRepository.create(req.body);
    res.status(201).json({ success: true, data: persona });
  } catch (error) {
    console.error("❌ Error en POST /personas:", error);
    res.status(500).json({ success: false, error: "Error al crear persona" });
  }
};

exports.update = async (req, res) => {
  try {
    const persona = await personaRepository.update(req.params.id, req.body);
    if (!persona) return res.status(404).json({ success: false, error: "Persona no encontrada" });
    res.json({ success: true, data: persona });
  } catch (error) {
    console.error("❌ Error en PUT /personas/:id:", error);
    res.status(500).json({ success: false, error: "Error al actualizar persona" });
  }
};

exports.delete = async (req, res) => {
  try {
    const success = await personaRepository.delete(req.params.id);
    if (!success) return res.status(404).json({ success: false, error: "Persona no encontrada" });
    res.json({ success: true, message: "Persona eliminada correctamente" });
  } catch (error) {
    console.error("❌ Error en DELETE /personas/:id:", error);
    res.status(500).json({ success: false, error: "Error al eliminar persona" });
  }
};