const descripcionActividadRepository = require("../repository/descripcionactividad.repository");
const ApiResponse = require("../utils/ApiResponse");

exports.getAll = async (req, res) => {
    try {
        const descripciones = await descripcionActividadRepository.getAll();

        if (!descripciones || descripciones.length === 0) {
            return ApiResponse.send(false, "No se encontraron descripciones de actividad en el catálogo.", null, res, 404);
        }

        const descripcionesConURLs = descripciones.map(d => {
            const descripcion = d.get({ plain: true });

            return {
                ...descripcion,
                URL_imagen: descripcion.URL_imagen
                    ? `${req.protocol}://${req.get("host")}${descripcion.URL_imagen}`
                    : null
            };
        });

        return ApiResponse.send(true, "Descripciones de actividad obtenidas con éxito.", descripcionesConURLs, res);
    } catch (error) {
        console.error("❌ Error en GET /descripcion_actividad:", error);
        return ApiResponse.send(false, "Error interno al obtener las descripciones de actividad.", null, res, 500);
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        if (isNaN(id) || id <= 0) {
            return ApiResponse.send(false, "ID de descripción de actividad no válido. Debe ser un número entero positivo.", null, res, 400);
        }

        const descripcion = await descripcionActividadRepository.getById(id);

        if (!descripcion) {
            return ApiResponse.send(false, `No se encontró una descripción de actividad con el ID ${id}.`, null, res, 404);
        }

        if (!descripcion.URL_imagen || descripcion.URL_imagen.trim() === "") {
            delete descripcion.URL_imagen;
        } else {
            descripcion.URL_imagen = `${req.protocol}://${req.get("host")}${descripcion.URL_imagen}`;
        }

        return ApiResponse.send(true, "Descripción de actividad obtenida con éxito.", descripcion, res);
    } catch (error) {
        console.error("❌ Error en GET /descripcion_actividad/:id:", error);
        return ApiResponse.send(false, "Error interno al obtener la descripción de actividad.", null, res, 500);
    }
};
