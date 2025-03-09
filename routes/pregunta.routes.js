const express = require("express");
const preguntaRouter = express.Router();
const preguntaController = require("../controllers/pregunta.controller");

preguntaRouter.get("/", preguntaController.getAll);
preguntaRouter.get("/:id", preguntaController.getById);
preguntaRouter.post("/", preguntaController.create);
preguntaRouter.put("/:id", preguntaController.update);
preguntaRouter.delete("/:id", preguntaController.delete);

module.exports = preguntaRouter;