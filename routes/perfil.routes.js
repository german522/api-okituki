const express = require("express");
const router = express.Router();
const perfilController = require("../controllers/perfil.controller");
const authMiddleware = require("../middlewares/authMiddleware");

// Ruta protegida, sin pasar el ID por parámetro
router.put("/", authMiddleware, perfilController.updatePerfil);

module.exports = router;
