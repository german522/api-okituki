require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const routes = require("./routes"); // Importamos todas las rutas desde routes/index.js


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);
app.use("/uploads", express.static(path.join(__dirname, "public/images")));

// Sincronizar base de datos y arrancar servidor
db.sequelize.sync().then(() => {
  console.log("Base de datos sincronizada");
  app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error("Error al sincronizar la base de datos:", err);
});