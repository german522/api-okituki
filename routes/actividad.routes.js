const express = require("express");
const actividadRouter = express.Router();
const actividadController = require("../controllers/actividad.controller");

actividadRouter.get("/", actividadController.getAll);
actividadRouter.get("/:id", actividadController.getById);

module.exports = actividadRouter;