const express = require("express");
const psicologoRouter = express.Router();
const psicologoController = require("../controllers/psicologo.controller");

psicologoRouter.get("/", psicologoController.getAll);
psicologoRouter.get("/:id", psicologoController.getById);
psicologoRouter.post("/", psicologoController.create);
psicologoRouter.put("/:id", psicologoController.update);
psicologoRouter.delete("/:id", psicologoController.delete);

module.exports = psicologoRouter;