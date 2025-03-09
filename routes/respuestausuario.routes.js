const express = require("express");
const respuestaUsuarioRouter = express.Router();
const respuestaUsuarioController = require("../controllers/respuestausuario.controller");

respuestaUsuarioRouter.get("/", respuestaUsuarioController.getAll);
respuestaUsuarioRouter.get("/:id", respuestaUsuarioController.getById);
respuestaUsuarioRouter.post("/", respuestaUsuarioController.create);
respuestaUsuarioRouter.put("/:id", respuestaUsuarioController.update);
respuestaUsuarioRouter.delete("/:id", respuestaUsuarioController.delete);

module.exports = respuestaUsuarioRouter;