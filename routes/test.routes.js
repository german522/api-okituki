const express = require("express");
const testRouter = express.Router();
const testController = require("../controllers/test.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Importar el middleware

testRouter.get("/", authMiddleware, testController.getAll);
testRouter.get("/:id", authMiddleware, testController.getById);
testRouter.post("/", authMiddleware, testController.create);
testRouter.put("/:id", authMiddleware, testController.update);
testRouter.delete("/:id", authMiddleware, testController.delete);


module.exports = testRouter;