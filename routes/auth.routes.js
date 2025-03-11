const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/perfil", authMiddleware, authController.perfil); // Ruta protegida

module.exports = router;
