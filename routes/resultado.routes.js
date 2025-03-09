const express = require("express");
const resultadoRouter = express.Router();
const resultadoController = require("../controllers/resultado.controller");

resultadoRouter.get("/", resultadoController.getAll);
resultadoRouter.get("/:id", resultadoController.getById);

module.exports = resultadoRouter;