const express = require("express");
const resultadoRouter = express.Router();
const resultadoController = require("../controllers/resultado.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

resultadoRouter.get("/", authMiddleware, resultadoController.getAll);
resultadoRouter.get("/:id", authMiddleware, resultadoController.getById);


module.exports = resultadoRouter;