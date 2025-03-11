const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, error: "Acceso denegado, token requerido" });
    }

    const token = authHeader.split(" ")[1]; // Extrae solo el token sin "Bearer "
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({ success: false, error: "Token inválido" });
    }
};
