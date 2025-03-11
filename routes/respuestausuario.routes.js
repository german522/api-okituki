const express = require("express");
const respuestaUsuarioRouter = express.Router();
const respuestaUsuarioController = require("../controllers/respuestausuario.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

respuestaUsuarioRouter.get("/", authMiddleware, respuestaUsuarioController.getAll);
respuestaUsuarioRouter.get("/:id", authMiddleware, respuestaUsuarioController.getById);
respuestaUsuarioRouter.post("/", authMiddleware, respuestaUsuarioController.create);
respuestaUsuarioRouter.put("/:id", authMiddleware, respuestaUsuarioController.update);
respuestaUsuarioRouter.delete("/:id", authMiddleware, respuestaUsuarioController.delete);


module.exports = respuestaUsuarioRouter;