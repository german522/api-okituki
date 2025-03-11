const express = require("express");
const respuestasUsuarioActividadesRouter = express.Router();
const respuestasUsuarioActividadesController = require("../controllers/respuestasusuarioactividades.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

// Definir rutas
respuestasUsuarioActividadesRouter.get("/", authMiddleware, respuestasUsuarioActividadesController.getAll);
respuestasUsuarioActividadesRouter.get("/:id", authMiddleware, respuestasUsuarioActividadesController.getById);
respuestasUsuarioActividadesRouter.post("/", authMiddleware, respuestasUsuarioActividadesController.create);
respuestasUsuarioActividadesRouter.put("/:id", authMiddleware, respuestasUsuarioActividadesController.update);
respuestasUsuarioActividadesRouter.delete("/:id", authMiddleware, respuestasUsuarioActividadesController.delete);

module.exports = respuestasUsuarioActividadesRouter;
