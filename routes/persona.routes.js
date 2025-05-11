const express = require("express");
const router = express.Router();
const personaController = require("../controllers/persona.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware
const { upload } = require('../config/cloudinary');

router.get("/", authMiddleware, personaController.getAll);
router.get("/:id", authMiddleware, personaController.getById);
router.post("/", authMiddleware, personaController.create);
router.put("/:id", authMiddleware, personaController.update);
router.delete("/:id", authMiddleware, personaController.delete);
router.post('/subir-imagen', authMiddleware, upload.single('imagen'), personaController.subirImagen);

module.exports = router;