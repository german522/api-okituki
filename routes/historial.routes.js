const express = require("express");
const router = express.Router();
const historialController = require("../controllers/historial.controller");
const verificarToken = require("../middlewares/authMiddleware");

router.get("/", verificarToken, historialController.obtenerHistorial);

module.exports = router;
