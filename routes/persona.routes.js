const express = require("express");
const router = express.Router();
const personaController = require("../controllers/persona.controller");

// Definir rutas y asociarlas con los controladores
router.get("/", personaController.getAll);
router.get("/:id", personaController.getById);
router.post("/", personaController.create);
router.put("/:id", personaController.update);
router.delete("/:id", personaController.delete);

module.exports = router;