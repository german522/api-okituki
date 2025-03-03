require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente.");
});

// Importar rutas
const personaRoutes = require("./routes/persona.routes");
app.use("/personas", personaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
