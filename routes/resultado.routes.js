const express = require("express");
const resultadoRouter = express.Router();
const resultadoController = require("../controllers/resultado.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

resultadoRouter.get("/grafica", authMiddleware, resultadoController.getGraficaByUsuario);
resultadoRouter.get("/ultimo", authMiddleware, resultadoController.getUltimoResultado);
resultadoRouter.get("/", authMiddleware, resultadoController.getAll);
resultadoRouter.get("/:id", authMiddleware, resultadoController.getById);
resultadoRouter.post("/", authMiddleware, resultadoController.create);
resultadoRouter.put("/:id", authMiddleware, resultadoController.update);
resultadoRouter.delete("/:id", authMiddleware, resultadoController.delete);


module.exports = resultadoRouter;