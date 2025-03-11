const express = require("express");
const respuestaRouter = express.Router();
const respuestaController = require("../controllers/respuesta.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

respuestaRouter.get("/", authMiddleware, respuestaController.getAll);
respuestaRouter.get("/:id", authMiddleware, respuestaController.getById);


module.exports = respuestaRouter;