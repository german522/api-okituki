const express = require("express");
const preguntaRouter = express.Router();
const preguntaController = require("../controllers/pregunta.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

preguntaRouter.get("/", authMiddleware, preguntaController.getAll);
preguntaRouter.get("/:id", authMiddleware, preguntaController.getById);

module.exports = preguntaRouter;