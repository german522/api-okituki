const express = require("express");
const descripcionActividadRouter = express.Router();
const descripcionActividadController = require("../controllers/descripcionactividad.controller");

descripcionActividadRouter.get("/", descripcionActividadController.getAll);
descripcionActividadRouter.get("/:id", descripcionActividadController.getById);

module.exports = descripcionActividadRouter;
