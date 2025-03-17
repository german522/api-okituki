const descripcionActividadRepository = require("../repository/descripcionactividad.repository");

exports.getAll = async (req, res) => {
    try {
        const descripciones = await descripcionActividadRepository.getAll();

        if (!descripciones || descripciones.length === 0) {
            return res.status(404).json({ success: false, error: "No se encontraron descripciones de actividad en el catálogo." });
        }

        // Construir la URL completa de la imagen para cada registro
        const descripcionesConURLs = descripciones.map(descripcion => ({
            ...descripcion,
            URL_imagen: descripcion.URL_imagen ? `${req.protocol}://${req.get("host")}${descripcion.URL_imagen}` : null
        }));

        res.json({ success: true, data: descripcionesConURLs });
    } catch (error) {
        console.error("❌ Error en GET /descripcion_actividad:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener las descripciones de actividad." });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ success: false, error: "ID de descripción de actividad no válido. Debe ser un número entero positivo." });
        }

        const descripcion = await descripcionActividadRepository.getById(id);

        if (!descripcion) {
            return res.status(404).json({ success: false, error: `No se encontró una descripción de actividad con el ID ${id}.` });
        }

        // Construir la URL completa de la imagen
        descripcion.URL_imagen = descripcion.URL_imagen ? `${req.protocol}://${req.get("host")}${descripcion.URL_imagen}` : null;

        res.json({ success: true, data: descripcion });
    } catch (error) {
        console.error("❌ Error en GET /descripcion_actividad/:id:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener la descripción de actividad." });
    }
};
