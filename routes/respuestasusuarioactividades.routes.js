const express = require("express");
const respuestasUsuarioActividadesRouter = express.Router();
const respuestasUsuarioActividadesController = require("../controllers/respuestasusuarioactividades.controller");

// Definir rutas
respuestasUsuarioActividadesRouter.get("/", respuestasUsuarioActividadesController.getAll);
respuestasUsuarioActividadesRouter.get("/:id", respuestasUsuarioActividadesController.getById);
respuestasUsuarioActividadesRouter.post("/", respuestasUsuarioActividadesController.create);
respuestasUsuarioActividadesRouter.put("/:id", respuestasUsuarioActividadesController.update);
respuestasUsuarioActividadesRouter.delete("/:id", respuestasUsuarioActividadesController.delete);

module.exports = respuestasUsuarioActividadesRouter;
