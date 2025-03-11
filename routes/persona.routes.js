const express = require("express");
const router = express.Router();
const personaController = require("../controllers/persona.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

router.get("/", authMiddleware, personaController.getAll);
router.get("/:id", authMiddleware, personaController.getById);
router.post("/", authMiddleware, personaController.create);
router.put("/:id", authMiddleware, personaController.update);
router.delete("/:id", authMiddleware, personaController.delete);

module.exports = router;