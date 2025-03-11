const express = require("express");
const actividadUsuarioRouter = express.Router();
const actividadUsuarioController = require("../controllers/actividadusuario.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

actividadUsuarioRouter.get("/", authMiddleware, actividadUsuarioController.getAll);
actividadUsuarioRouter.get("/:id", authMiddleware, actividadUsuarioController.getById);
actividadUsuarioRouter.post("/", authMiddleware, actividadUsuarioController.create);
actividadUsuarioRouter.put("/:id", authMiddleware, actividadUsuarioController.update);
actividadUsuarioRouter.delete("/:id", authMiddleware, actividadUsuarioController.delete);


module.exports = actividadUsuarioRouter;
