const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Usuario, Persona, RefreshToken } = require("../models");
const ApiResponse = require("../utils/ApiResponse");

exports.register = async (req, res) => {
    try {
        const { nombre, apellido, correo, tipo, contrasena, fecha_nacimiento, genero, discapacidad } = req.body;

        if (!nombre || !apellido || !correo || !contrasena || !tipo) {
            return ApiResponse.send(false, "Todos los campos obligatorios (nombre, apellido, correo, contrasena, tipo) deben estar completos.", null, res, 400);
        }

        if (tipo !== "usuario" && tipo !== "psicologo") {
            return ApiResponse.send(false, "El campo 'tipo' debe ser 'usuario' o 'psicologo'.", null, res, 400);
        }

        const personaExistente = await Persona.findOne({ where: { correo } });
        if (personaExistente) {
            return ApiResponse.send(false, "El correo ya está registrado.", null, res, 400);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contrasena, salt);

        const persona = await Persona.create({ nombre, apellido, correo, tipo });

        await Usuario.create({
            id_persona: persona.id,
            contrasena: hashedPassword,
            fecha_nacimiento,
            genero,
            discapacidad
        });

        return ApiResponse.send(true, "Usuario registrado correctamente.", null, res, 201);

    } catch (error) {
        console.error("❌ Error en POST /register:", error);
        return ApiResponse.send(false, "Error interno al registrar usuario.", null, res, 500);
    }
};

// LOGIN
exports.login = async (req, res) => {
    try {
        const { correo, contrasena } = req.body;
        if (!correo || !contrasena) {
            return ApiResponse.send(false, "Correo y contraseña son obligatorios.", null, res, 400);
        }

        const persona = await Persona.findOne({ where: { correo }, include: [{ model: Usuario }] });
        if (!persona || !persona.Usuario) {
            return ApiResponse.send(false, "Credenciales incorrectas.", null, res, 400);
        }

        const passwordMatch = await bcrypt.compare(contrasena, persona.Usuario.contrasena);
        if (!passwordMatch) {
            return ApiResponse.send(false, "Credenciales incorrectas.", null, res, 400);
        }

        // Generar tokens
        const accessToken = jwt.sign({ id: persona.Usuario.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ id: persona.Usuario.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

        // Guardar Refresh Token en la BD
        await RefreshToken.create({ usuarioId: persona.Usuario.id, token: refreshToken });

        return ApiResponse.send(true, "Inicio de sesión exitoso.", { accessToken, refreshToken }, res);
    } catch (error) {
        console.error("❌ Error en login:", error);
        return ApiResponse.send(false, "Error interno en inicio de sesión.", null, res, 500);
    }
};

// PERFIL
exports.perfil = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return ApiResponse.send(false, "No autorizado. Token inválido.", null, res, 401);
        }

        const usuario = await Usuario.findOne({
            where: { id: req.user.id },
            include: { model: Persona }
        });

        if (!usuario) {
            return ApiResponse.send(false, "Usuario no encontrado.", null, res, 404);
        }

        const data = {
            id: usuario.id,
            nombre: usuario.Persona.nombre,
            apellido: usuario.Persona.apellido,
            correo: usuario.Persona.correo,
            tipo: usuario.Persona.tipo,
            fecha_nacimiento: usuario.fecha_nacimiento,
            genero: usuario.genero,
            discapacidad: usuario.discapacidad
        };

        return ApiResponse.send(true, "Perfil obtenido exitosamente.", data, res);
    } catch (error) {
        console.error("❌ Error en GET /perfil:", error);
        return ApiResponse.send(false, "Error interno al obtener el perfil.", null, res, 500);
    }
};

// REFRESH TOKEN
exports.refreshToken = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return ApiResponse.send(false, "Refresh Token es requerido.", null, res, 400);

        const storedToken = await RefreshToken.findOne({ where: { token } });
        if (!storedToken) return ApiResponse.send(false, "Refresh Token inválido.", null, res, 403);

        jwt.verify(token, process.env.JWT_REFRESH_SECRET, async (err, decoded) => {
            if (err) return ApiResponse.send(false, "Refresh Token inválido o expirado.", null, res, 403);

            const accessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

            return ApiResponse.send(true, "Nuevo token generado.", { accessToken }, res);
        });

    } catch (error) {
        console.error("❌ Error en refreshToken:", error);
        return ApiResponse.send(false, "Error interno al refrescar el token.", null, res, 500);
    }
};

// LOGOUT
exports.logout = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return ApiResponse.send(false, "Refresh Token es requerido.", null, res, 400);

        await RefreshToken.destroy({ where: { token } });

        return ApiResponse.send(true, "Sesión cerrada correctamente.", null, res);
    } catch (error) {
        console.error("❌ Error en logout:", error);
        return ApiResponse.send(false, "Error interno al cerrar sesión.", null, res, 500);
    }
};




