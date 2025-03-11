const express = require("express");
const descripcionActividadRouter = express.Router();
const descripcionActividadController = require("../controllers/descripcionactividad.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

descripcionActividadRouter.get("/", authMiddleware, descripcionActividadController.getAll);
descripcionActividadRouter.get("/:id", authMiddleware, descripcionActividadController.getById);

module.exports = descripcionActividadRouter;
