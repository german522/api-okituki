const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Usuario, Persona, RefreshToken } = require("../models");


exports.register = async (req, res) => {
    try {
        const { nombre, apellido, correo, tipo, contrasena, fecha_nacimiento, genero, discapacidad } = req.body;

        if (!nombre || !apellido || !correo || !contrasena || !tipo) {
            return res.status(400).json({ success: false, error: "Todos los campos obligatorios (nombre, apellido, correo, contrasena, tipo) deben estar completos." });
        }

        if (tipo !== "usuario" && tipo !== "psicologo") {
            return res.status(400).json({ success: false, error: "El campo 'tipo' debe ser 'usuario' o 'psicologo'." });
        }

        const personaExistente = await Persona.findOne({ where: { correo } });
        if (personaExistente) {
            return res.status(400).json({ success: false, error: "El correo ya está registrado." });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contrasena, salt);

        const persona = await Persona.create({ nombre, apellido, correo, tipo });

        const usuario = await Usuario.create({
            id_persona: persona.id,
            contrasena: hashedPassword,
            fecha_nacimiento,
            genero,
            discapacidad
        });

        res.status(201).json({ success: true, message: "Usuario registrado correctamente." });

    } catch (error) {
        console.error("❌ Error en POST /register:", error);
        res.status(500).json({ success: false, error: "Error interno al registrar usuario." });
    }
};

// LOGIN
exports.login = async (req, res) => {
    try {
        const { correo, contrasena } = req.body;
        if (!correo || !contrasena) return res.status(400).json({ success: false, error: "Correo y contraseña son obligatorios." });

        const persona = await Persona.findOne({ where: { correo }, include: [{ model: Usuario }] });
        if (!persona || !persona.Usuario) return res.status(400).json({ success: false, error: "Credenciales incorrectas." });

        const passwordMatch = await bcrypt.compare(contrasena, persona.Usuario.contrasena);
        if (!passwordMatch) return res.status(400).json({ success: false, error: "Credenciales incorrectas." });

        // Generar tokens
        const accessToken = jwt.sign({ id: persona.Usuario.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ id: persona.Usuario.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

        // Guardar Refresh Token en la BD
        const newToken = await RefreshToken.create({ usuarioId: persona.Usuario.id, token: refreshToken });

        // 🔹 Log para verificar que se guardó en la BD
        console.log("✅ Refresh Token guardado en la BD:", newToken);

        res.status(200).json({ success: true, accessToken, refreshToken });

    } catch (error) {
        console.error("❌ Error en login:", error);
        res.status(500).json({ success: false, error: "Error interno en inicio de sesión." });
    }
};

// PERFIL
exports.perfil = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ success: false, error: "No autorizado. Token inválido." });
        }

        const usuario = await Usuario.findOne({
            where: { id: req.user.id },
            include: { model: Persona }
        });

        if (!usuario) {
            return res.status(404).json({ success: false, error: "Usuario no encontrado." });
        }

        res.status(200).json({
            success: true,
            message: "Perfil obtenido exitosamente.",
            data: {
                id: usuario.id,
                nombre: usuario.Persona.nombre,
                apellido: usuario.Persona.apellido,
                correo: usuario.Persona.correo,
                tipo: usuario.Persona.tipo,
                fecha_nacimiento: usuario.fecha_nacimiento,
                genero: usuario.genero,
                discapacidad: usuario.discapacidad
            }
        });
    } catch (error) {
        console.error("❌ Error en GET /perfil:", error);
        res.status(500).json({ success: false, error: "Error interno al obtener el perfil." });
    }
};

exports.refreshToken = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.status(400).json({ success: false, error: "Refresh Token es requerido." });

        const storedToken = await RefreshToken.findOne({ where: { token } });
        if (!storedToken) return res.status(403).json({ success: false, error: "Refresh Token inválido." });

        jwt.verify(token, process.env.JWT_REFRESH_SECRET, async (err, decoded) => {
            if (err) return res.status(403).json({ success: false, error: "Refresh Token inválido o expirado." });

            const accessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.status(200).json({ success: true, accessToken });
        });

    } catch (error) {
        console.error("❌ Error en refreshToken:", error);
        res.status(500).json({ success: false, error: "Error interno al refrescar el token." });
    }
};

exports.logout = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.status(400).json({ success: false, error: "Refresh Token es requerido." });

        await RefreshToken.destroy({ where: { token } });

        res.status(200).json({ success: true, message: "Sesión cerrada correctamente." });

    } catch (error) {
        console.error("❌ Error en logout:", error);
        res.status(500).json({ success: false, error: "Error interno al cerrar sesión." });
    }
};



