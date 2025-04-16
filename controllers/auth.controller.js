const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Usuario, Persona, RefreshToken, sequelize } = require("../models");
const ApiResponse = require("../utils/ApiResponse");
const UsuarioRepository = require("../repository/usuario.repository");
const usuarioRepository = require("../repository/usuario.repository");

exports.register = async (req, res) => {
    try {
        const { nombre, apellido, correo, tipo, contrasena, fecha_nacimiento, genero, discapacidad, telefono } = req.body;

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

        const persona = await Persona.create({ nombre, apellido, correo, tipo, telefono });

        usuarioRepository.create({ id_persona: persona.id, contrasena: hashedPassword, fecha_nacimiento, genero, discapacidad });

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

        const persona = await Persona.findOne({
            where: { correo },
            include: [{ model: Usuario, as: "usuario" }]
        });

        if (!persona || !persona.usuario) {
            return ApiResponse.send(false, "Credenciales incorrectas.", null, res, 400);
        }

        const passwordMatch = await bcrypt.compare(contrasena, persona.usuario.contrasena);
        if (!passwordMatch) {
            return ApiResponse.send(false, "Credenciales incorrectas.", null, res, 400);
        }

        const accessToken = jwt.sign({ id: persona.usuario.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const refreshToken = jwt.sign({ id: persona.usuario.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });

        await RefreshToken.create({ usuarioId: persona.usuario.id, token: refreshToken });

        return ApiResponse.send(true, "Inicio de sesión exitoso.", { accessToken, refreshToken, persona }, res);

    } catch (error) {
        console.error("❌ Error en login:", error);
        return ApiResponse.send(false, "Error interno en inicio de sesión.", null, res, 500);
    }
};

exports.deleteUsuarioCompleto = async (req, res) => {
    const idUsuario = req.params.id;
    try {
        await sequelize.transaction(async (t) => {
            const usuario = await Usuario.findByPk(idUsuario, { transaction: t });

            if (!usuario) {
                return ApiResponse.send(false, "Usuario no encontrado", null, res, 404);
            }

            const personaId = usuario.id_persona; // <- CAMBIO AQUÍ

            await usuario.destroy({ transaction: t });

            // Solo borra la persona si no hay otro usuario asociado a la misma persona (por si acaso)
            const otrosUsuarios = await Usuario.findAll({
                where: { id_persona: personaId }, // <- CAMBIO AQUÍ
                transaction: t
            });

            if (otrosUsuarios.length === 0) {
                await Persona.destroy({ where: { id: personaId }, transaction: t });
            }
        });

        return ApiResponse.send(true, "Usuario y persona eliminados correctamente.", null, res);
    } catch (error) {
        console.error("❌ Error al eliminar usuario y persona:", error);
        return ApiResponse.send(false, "Error al eliminar usuario y persona.", null, res, 500);
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
            include: { model: Persona, as: "persona" }
        });

        if (!usuario) {
            return ApiResponse.send(false, "Usuario no encontrado.", null, res, 404);
        }

        const data = {
            id: usuario.id,
            nombre: usuario.persona.nombre,
            apellido: usuario.persona.apellido,
            correo: usuario.persona.correo,
            tipo: usuario.persona.tipo,
            telefono: usuario.persona.telefono,
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




