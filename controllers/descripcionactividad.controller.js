const descripcionActividadRepository = require("../repository/descripcionactividad.repository");

exports.getAll = async (req, res) => {
    try {
        const descripciones = await descripcionActividadRepository.getAll();

        // Construir la URL completa de la imagen para cada registro
        const descripcionesConURLs = descripciones.map(descripcion => ({
            ...descripcion,
            URL_imagen: descripcion.URL_imagen ? `${req.protocol}://${req.get("host")}${descripcion.URL_imagen}` : null
        }));

        res.json({ success: true, data: descripcionesConURLs });
    } catch (error) {
        console.error("❌ Error en GET /descripcion_actividad:", error);
        res.status(500).json({ success: false, error: "Error al obtener descripciones de actividad" });
    }
};

exports.getById = async (req, res) => {
    try {
        const descripcion = await descripcionActividadRepository.getById(req.params.id);
        if (!descripcion) return res.status(404).json({ success: false, error: "Descripción de actividad no encontrada" });

        // Construir la URL completa de la imagen
        descripcion.URL_imagen = descripcion.URL_imagen ? `${req.protocol}://${req.get("host")}${descripcion.URL_imagen}` : null;

        res.json({ success: true, data: descripcion });
    } catch (error) {
        console.error("❌ Error en GET /descripcion_actividad/:id:", error);
        res.status(500).json({ success: false, error: "Error al obtener descripción de actividad" });
    }
};
