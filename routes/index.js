const express = require("express");
const router = express.Router();

// Importar todas las rutas
const personaRoutes = require("./persona.routes");
const usuarioRoutes = require("./usuario.routes");
const psicologoRoutes = require("./psicologo.routes");
const testRoutes = require("./test.routes");
const preguntaRoutes = require("./pregunta.routes");
const respuestasRoutes = require("./respuesta.routes");
const resultadoRoutes = require("./resultado.routes");
const respuestasUsuarioRoutes = require("./respuestausuario.routes");
const tipoActividadRoutes = require("./tipoactividad.routes");
const actividadRoutes = require("./actividad.routes");
const descripcionActividadRoutes = require("./descripcionactividad.routes");
const actividadUsuarioRoutes = require("./actividadusuario.routes");
const respuestasUsuarioActividadesRoutes = require("./respuestasusuarioactividades.routes");
const authRoutes = require("./auth.routes"); // ✅ Agregar autenticación

// Usar las rutas
router.use("/personas", personaRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/psicologos", psicologoRoutes);
router.use("/tests", testRoutes);
router.use("/preguntas", preguntaRoutes);
router.use("/respuestas", respuestasRoutes);
router.use("/resultados", resultadoRoutes);
router.use("/respuestausuario", respuestasUsuarioRoutes);
router.use("/tipoactividad", tipoActividadRoutes);
router.use("/actividades", actividadRoutes);
router.use("/descripcionactividad", descripcionActividadRoutes);
router.use("/actividadesusuario", actividadUsuarioRoutes);
router.use("/respuestasusuarioactividades", respuestasUsuarioActividadesRoutes);
router.use("/auth", authRoutes); // ✅ Agregar autenticación

module.exports = router;
