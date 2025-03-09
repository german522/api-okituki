const express = require("express");
const tipoActividadRouter = express.Router();
const tipoActividadController = require("../controllers/tipoactividad.controller");

tipoActividadRouter.get("/", tipoActividadController.getAll);
tipoActividadRouter.get("/:id", tipoActividadController.getById);

module.exports = tipoActividadRouter;