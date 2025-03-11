const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuario.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware


router.get("/", authMiddleware, usuarioController.getAll);
router.get("/:id", authMiddleware, usuarioController.getById);
router.post("/", authMiddleware, usuarioController.create);
router.put("/:id", authMiddleware, usuarioController.update);
router.delete("/:id", authMiddleware, usuarioController.delete);

module.exports = router;