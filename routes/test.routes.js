const express = require("express");
const testRouter = express.Router();
const testController = require("../controllers/test.controller");
const authMiddleware = require("../middlewares/authMiddleware"); // Middleware de autenticación

// Rutas para tests
testRouter.get("/", authMiddleware, testController.getAll);
testRouter.get("/:id", authMiddleware, testController.getById);

module.exports = testRouter;