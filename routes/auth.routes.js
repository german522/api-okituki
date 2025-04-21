const express = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware
const verifyEmailToken = require("../middlewares/verifyEmailToken");


const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh-token", authController.refreshToken);
router.post("/verificar-codigo", verifyEmailToken, authController.verificarCodigo);
router.delete("/borrar-usuario", authMiddleware, authController.deleteUsuarioCompleto);
router.post("/logout", authController.logout);
router.get("/perfil", authMiddleware, authController.perfil);
router.post("/reenviar-codigo", authController.reenviarCodigo);
router.post('/recuperar-contrasena', authController.recuperarContrasena);
router.put('/actualizar-contrasena', authMiddleware, authController.actualizarContrasena);

module.exports = router;
