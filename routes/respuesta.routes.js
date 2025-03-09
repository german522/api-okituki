const express = require("express");
const respuestaRouter = express.Router();
const respuestaController = require("../controllers/respuesta.controller");

respuestaRouter.get("/", respuestaController.getAll);
respuestaRouter.get("/:id", respuestaController.getById);

module.exports = respuestaRouter;