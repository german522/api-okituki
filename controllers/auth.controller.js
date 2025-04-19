const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Usuario, Persona, RefreshToken, sequelize } = require("../models");
const ApiResponse = require("../utils/ApiResponse");
const { enviarCodigo } = require('../utils/mailer');
const usuarioRepository = require("../repository/usuario.repository");
const generateRandomPassword = require('../utils/passwordGenerator');

exports.register = async (req, res) => {
    try {
        const { nombre, apellido, correo, tipo, contrasena, fecha_nacimiento, genero, discapacidad, telefono } = req.body;

        if (!nombre || !apellido || !correo || !contrasena || !tipo) {
            return ApiResponse.send(false, "Por favor, asegúrese de llenar todos los campos.", null, res, 400);
        }

        const esCorreoValido = (correo) => {
            const regex = /^[\w.-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|edu\.mx|gob\.mx|mx)$/i;
            return regex.test(correo);
        };

        if (!esCorreoValido(correo)) {
            return ApiResponse.send(false, "Ingrese un formato de correo válido, por favor.", null, res, 400);
        }

        const personaExistente = await Persona.findOne({ where: { correo } });

        if (personaExistente) {
            return ApiResponse.send(false, "El correo ingresado ya está registrado, ingrese uno nuevo, por favor.", null, res, 400);
        }

        if (!esContrasenaSegura(contrasena)) {
            return ApiResponse.send(false, "La contraseña no es segura. Debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.", null, res, 400);
        }

        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const codigo = Math.floor(100000 + Math.random() * 900000).toString();
        const expiracion = new Date(Date.now() + 15 * 60000);

        const datosTemporales = {
            nombre, apellido, correo, tipo, telefono,
            fecha_nacimiento, genero, discapacidad,
            hashedPassword,
            codigo,
            codigo_expiracion: expiracion
        };

        await enviarCodigo(correo, codigo);

        const tokenVerificacion = jwt.sign(datosTemporales, process.env.JWT_SECRET, { expiresIn: "15m" });

        return ApiResponse.send(true, "Se envió un código de verificación a tu correo. Verifica para completar el registro.", { tokenVerificacion }, res, 200);

    } catch (error) {
        console.error("❌ Error en registro:", error);
        return ApiResponse.send(false, "Error interno en el registro.", null, res, 500);
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
    const idUsuario = req.user.id;

    try {
        await sequelize.transaction(async (t) => {
            const usuario = await Usuario.findByPk(idUsuario, { transaction: t });

            if (!usuario) {
                return ApiResponse.send(false, "Usuario no encontrado", null, res, 404);
            }

            const personaId = usuario.id_persona;

            await usuario.destroy({ transaction: t });

            const otrosUsuarios = await Usuario.findAll({
                where: { id_persona: personaId },
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

exports.actualizarContrasena = async (req, res) => {
    try {
        const idUsuario = req.user.id;
        const { contrasenaActual, nuevaContrasena, confirmarContrasena } = req.body;

        if (!contrasenaActual || !nuevaContrasena || !confirmarContrasena) {
            return ApiResponse.send(false, 'Todos los campos son obligatorios.', null, res, 400);
        }

        if (nuevaContrasena !== confirmarContrasena) {
            return ApiResponse.send(false, 'Las nuevas contraseñas no coinciden.', null, res, 400);
        }

        if (!esContrasenaSegura(nuevaContrasena)) {
            return ApiResponse.send(false, "La nueva contraseña no es segura. Debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.", null, res, 400);
        }

        const usuario = await Usuario.findByPk(idUsuario);
        if (!usuario) {
            return ApiResponse.send(false, 'Usuario no encontrado.', null, res, 404);
        }

        const match = await bcrypt.compare(contrasenaActual, usuario.contrasena);
        if (!match) {
            return ApiResponse.send(false, 'La contraseña actual no es correcta.', null, res, 401);
        }

        const hashedNewPassword = await bcrypt.hash(nuevaContrasena, 10);
        usuario.contrasena = hashedNewPassword;
        await usuario.save();

        return ApiResponse.send(true, 'Contraseña actualizada correctamente.', null, res);

    } catch (error) {
        console.error('❌ Error al actualizar contraseña:', error);
        return ApiResponse.send(false, 'Error interno al actualizar la contraseña.', null, res, 500);
    }
};

exports.verificarCodigo = async (req, res) => {
    try {
        const { codigo } = req.body;
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return ApiResponse.send(false, "Token de verificación no proporcionado.", null, res, 401);
        }

        let datos;

        try {
            datos = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return ApiResponse.send(false, "Token inválido o expirado.", null, res, 401);
        }

        const {
            nombre, apellido, correo, tipo, telefono,
            fecha_nacimiento, genero, discapacidad,
            hashedPassword,
            codigo: codigoGuardado,
            codigo_expiracion
        } = datos;

        if (codigo !== codigoGuardado) {
            return ApiResponse.send(false, "El código ingresado es incorrecto.", null, res, 400);
        }

        if (new Date() > new Date(codigo_expiracion)) {
            return ApiResponse.send(false, "El código ha expirado, intente generando uno nuevo.", null, res, 400);
        }

        const personaExistente = await Persona.findOne({ where: { correo } });
        if (personaExistente) {
            return ApiResponse.send(false, "El usuario ya fue registrado previamente.", null, res, 400);
        }

        const persona = await Persona.create({
            nombre, apellido, correo, tipo, telefono,
            verificado: true,
            codigo_verificacion: null,
            codigo_expiracion: null,
            fecha_nacimiento, genero, discapacidad
        });

        await Usuario.create({
            id_persona: persona.id,
            contrasena: hashedPassword,
            fecha_nacimiento,
            genero,
            discapacidad
        });

        return ApiResponse.send(true, "Correo verificado y usuario registrado con éxito.", null, res, 201);

    } catch (error) {
        console.error("❌ Error en verificación:", error);
        return ApiResponse.send(false, "Error al verificar el código.", null, res, 500);
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

exports.recuperarContrasena = async (req, res) => {
    try {
        const { correo } = req.body;

        if (!correo)
            return ApiResponse.send(false, "El correo es obligatorio para recuperar tu contraseña", null, res, 400);

        const persona = await Persona.findOne({ where: { correo } });
        if (!persona)
            return ApiResponse.send(false, "El correo no está registrado en el sistema", null, res, 404);

        const nuevaContraseña = generateRandomPassword();
        const hashedPassword = await bcrypt.hash(nuevaContraseña, 10);

        await usuarioRepository.updatePasswordByPersonaId(persona.id, hashedPassword);

        await enviarCodigo(correo, nuevaContraseña, 'password');

        return ApiResponse.send(true, "Se ha enviado una nueva contraseña al correo proporcionado", null, res);

    } catch (error) {
        console.error(error);
        return ApiResponse.send(false, "Ocurrió un error al recuperar la contraseña", null, res, 500);
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
            return ApiResponse.send(false, "Token no proporcionado.", null, res, 401);
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const correo = decoded.correo;

        const persona = await Persona.findOne({ where: { correo } });

        if (!persona) {
            return ApiResponse.send(false, "El correo no está registrado.", null, res, 404);
        }

        if (persona.verificado) {
            return ApiResponse.send(false, "El correo ya ha sido verificado.", null, res, 400);
        }

        const nuevoCodigo = Math.floor(100000 + Math.random() * 900000).toString();
        const nuevaExpiracion = new Date(Date.now() + 15 * 60000); // 15 min

        persona.codigo_verificacion = nuevoCodigo;
        persona.codigo_expiracion = nuevaExpiracion;
        await persona.save();

        await enviarCodigo(correo, nuevoCodigo);

        const tokenVerificacion = jwt.sign({ correo }, process.env.JWT_SECRET, { expiresIn: "15m" });

        return ApiResponse.send(true, "Nuevo código enviado al correo.", { tokenVerificacion }, res);

    } catch (error) {
        console.error("❌ Error al reenviar código:", error);
        return ApiResponse.send(false, "Error interno al reenviar el código.", null, res, 500);
    }
};


const esContrasenaSegura = (contrasena) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(contrasena);
};