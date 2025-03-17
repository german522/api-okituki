const express = require("express");
const psicologoRouter = express.Router();
const psicologoController = require("../controllers/psicologo.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

psicologoRouter.get("/", authMiddleware, psicologoController.getAll);
psicologoRouter.get("/:id", authMiddleware, psicologoController.getById);

module.exports = psicologoRouter;