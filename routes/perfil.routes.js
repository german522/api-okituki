const express = require("express");
const router = express.Router();
const perfilController = require("../controllers/perfil.controller");

// Actualiza usuario + persona
router.put("/:id", perfilController.updatePerfil);

module.exports = router;
