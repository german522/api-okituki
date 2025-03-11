const express = require("express");
const tipoActividadRouter = express.Router();
const tipoActividadController = require("../controllers/tipoactividad.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

tipoActividadRouter.get("/", authMiddleware, tipoActividadController.getAll);
tipoActividadRouter.get("/:id", authMiddleware, tipoActividadController.getById);


module.exports = tipoActividadRouter;