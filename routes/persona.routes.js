const express = require("express");
const router = express.Router();
const personaController = require("../controllers/persona.controller");

//Definir qué quiero hacer
router.get("/", personaController.getAll);
router.get("/:id", personaController.getById);
router.post("/", personaController.create);
router.put("/:id", personaController.update);
router.delete("/:id", personaController.remove);

module.exports = router;
