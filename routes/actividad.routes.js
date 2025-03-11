const express = require("express");
const actividadRouter = express.Router();
const actividadController = require("../controllers/actividad.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware


actividadRouter.get("/", authMiddleware, actividadController.getAll);
actividadRouter.get("/:id", authMiddleware, actividadController.getById);

module.exports = actividadRouter;