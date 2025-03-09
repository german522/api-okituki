const express = require("express");
const actividadUsuarioRouter = express.Router();
const actividadUsuarioController = require("../controllers/actividadusuario.controller");

actividadUsuarioRouter.get("/", actividadUsuarioController.getAll);
actividadUsuarioRouter.get("/:id", actividadUsuarioController.getById);
actividadUsuarioRouter.post("/", actividadUsuarioController.create);
actividadUsuarioRouter.put("/:id", actividadUsuarioController.update);
actividadUsuarioRouter.delete("/:id", actividadUsuarioController.delete);

module.exports = actividadUsuarioRouter;
