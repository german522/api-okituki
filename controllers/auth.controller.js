const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Usuario, Persona, RefreshToken, sequelize } = require("../models");
const ApiResponse = require("../utils/ApiResponse");
const { enviarCodigo } = require('../utils/mailer');
const usuarioRepository = require("../repository/usuario.repository");

exports.register = async (req, res) => {
    try {
        const {
            nombre,
            apellido,
            correo,
            tipo,
            contrasena,
            fecha_nacimiento,
            genero,
            discapacidad,
            telefono
        } = req.body;

        if (!nombre || !apellido || !correo || !contrasena || !tipo) {
            return res.status(400).json({ success: false, message: "Faltan campos obligatorios." });
        }

        const esCorreoValido = (correo) => {
            const regex = /^[\w.-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|edu\.mx|gob\.mx|mx)$/i;
            return regex.test(correo);
        };

        if (!esCorreoValido(correo)) {
            return res.status(400).json({ success: false, message: "Correo con dominio no válido." });
        }

        const personaExistente = await Persona.findOne({ where: { correo } });

        if (personaExistente) {
            return res.status(400).json({ success: false, message: "Correo ya registrado." });
        }

        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const codigo = Math.floor(100000 + Math.random() * 900000).toString();
        const expiracion = new Date(Date.now() + 15 * 60000);

        const persona = await Persona.create({
            nombre,
            apellido,
            correo,
            tipo,
            telefono,
            verificado: false,
            codigo_verificacion: codigo,
            codigo_expiracion: expiracion,
            fecha_nacimiento,
            genero,
            discapacidad
        });

        await Usuario.create({
            id_persona: persona.id,
            contrasena: hashedPassword,
            fecha_nacimiento,
            genero,
            discapacidad
        });

        await enviarCodigo(correo, codigo);

        const tokenVerificacion = jwt.sign({ correo }, process.env.JWT_SECRET, { expiresIn: "15m" });

        res.status(201).json({
            success: true,
            message: "Registro exitoso. Revisa tu correo para verificar.",
            tokenVerificacion
        });

    } catch (error) {
        console.error("❌ Error en registro:", error);
        res.status(500).json({ success: false, message: "Error interno." });
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

        if (!persona.verificado) {
            return ApiResponse.send(false, "Debes verificar tu correo antes de iniciar sesión.", null, res, 401);
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

exports.verificarCodigo = async (req, res) => {
    try {
        const { codigo } = req.body;
        const correo = req.correo;

        const persona = await Persona.findOne({ where: { correo } });
        if (!persona) return res.status(404).json({ success: false, message: "Usuario no encontrado." });

        if (persona.verificado) return res.status(400).json({ success: false, message: "El correo ya está verificado." });

        if (persona.codigo_verificacion !== codigo) {
            return res.status(400).json({ success: false, message: "Código incorrecto." });
        }

        if (new Date() > persona.codigo_expiracion) {
            return res.status(400).json({ success: false, message: "El código ha expirado." });
        }

        persona.verificado = true;
        persona.codigo_verificacion = null;
        persona.codigo_expiracion = null;
        await persona.save();

        res.status(200).json({ success: true, message: "Correo verificado con éxito." });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error al verificar código." });
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

exports.reenviarCodigo = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Token no proporcionado." });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const correo = decoded.correo;

        const persona = await Persona.findOne({ where: { correo } });

        if (!persona) {
            return res.status(404).json({ success: false, message: "Correo no registrado." });
        }

        if (persona.verificado) {
            return res.status(400).json({ success: false, message: "El correo ya ha sido verificado." });
        }

        const nuevoCodigo = Math.floor(100000 + Math.random() * 900000).toString();
        const nuevaExpiracion = new Date(Date.now() + 15 * 60000); // 15 min

        persona.codigo_verificacion = nuevoCodigo;
        persona.codigo_expiracion = nuevaExpiracion;
        await persona.save();

        await enviarCodigo(correo, nuevoCodigo);

        const tokenVerificacion = jwt.sign({ correo }, process.env.JWT_SECRET, { expiresIn: "15m" });

        res.status(200).json({
            success: true,
            message: "Nuevo código reenviado correctamente.",
            tokenVerificacion
        });

    } catch (error) {
        console.error("❌ Error al reenviar código:", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
};




