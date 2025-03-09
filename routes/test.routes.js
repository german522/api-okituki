const express = require("express");
const testRouter = express.Router();
const testController = require("../controllers/test.controller");

testRouter.get("/", testController.getAll);
testRouter.get("/:id", testController.getById);
testRouter.post("/", testController.create);
testRouter.put("/:id", testController.update);
testRouter.delete("/:id", testController.delete);

module.exports = testRouter;