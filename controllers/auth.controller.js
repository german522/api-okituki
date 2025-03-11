const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Usuario, Persona } = require("../models");

exports.register = async (req, res) => {
    try {
        const { nombre, apellido, correo, tipo, contrasena, fecha_nacimiento, genero, discapacidad } = req.body;

        // 🔹 Validar que 'tipo' esté presente
        if (!tipo || (tipo !== "usuario" && tipo !== "psicologo")) {
            return res.status(400).json({ success: false, error: "El campo 'tipo' es obligatorio y debe ser 'usuario' o 'psicologo'" });
        }

        // 🔹 Verificar si el correo ya existe
        const personaExistente = await Persona.findOne({ where: { correo } });
        if (personaExistente) {
            return res.status(400).json({ success: false, error: "El correo ya está registrado" });
        }

        // 🔹 Hashear contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(contrasena, salt);

        // 🔹 Crear Persona
        const persona = await Persona.create({ nombre, apellido, correo, tipo });

        // 🔹 Crear Usuario vinculado a Persona
        const usuario = await Usuario.create({
            id_persona: persona.id,
            contrasena: hashedPassword,
            fecha_nacimiento,
            genero,
            discapacidad
        });

        res.status(201).json({ success: true, message: "Usuario registrado correctamente", data: usuario });

    } catch (error) {
        console.error("❌ Error en POST /register:", error);
        res.status(500).json({ success: false, error: "Error en el registro" });
    }
};


// ✅ LOGIN
exports.login = async (req, res) => {
    try {
        const { correo, contrasena } = req.body;

        // 🔹 Verificar si el usuario existe
        const persona = await Persona.findOne({
            where: { correo },
            include: [{ model: Usuario }]
        });

        if (!persona) {
            return res.status(400).json({ success: false, error: "Credenciales incorrectas" });
        }

        // 🔹 Extraer la contraseña hasheada del usuario
        const usuario = persona.Usuario;
        if (!usuario) {
            return res.status(400).json({ success: false, error: "Credenciales incorrectas" });
        }

        console.log("Contraseña ingresada:", contrasena);
        console.log("Contraseña almacenada (hasheada):", usuario.contrasena);


        // 🔹 Comparar la contraseña ingresada con la hasheada en la base de datos
        const passwordMatch = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!passwordMatch) {
            return res.status(400).json({ success: false, error: "Credenciales incorrectas" });
        }

        // 🔹 Generar token JWT
        const token = jwt.sign(
            { id: usuario.id, correo: persona.correo, tipo: persona.tipo },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            success: true,
            message: "Inicio de sesión exitoso",
            token
        });

    } catch (error) {
        console.error("❌ Error en POST /login:", error);
        res.status(500).json({ success: false, error: "Error en inicio de sesión" });
    }
};

exports.perfil = async (req, res) => {
    try {
        // El middleware de autenticación ya habrá agregado los datos del usuario en req.user
        const usuario = await Usuario.findOne({
            where: { id: req.user.id },
            include: { model: Persona }
        });

        if (!usuario) {
            return res.status(404).json({ success: false, error: "Usuario no encontrado" });
        }

        res.status(200).json({
            success: true,
            message: "Perfil obtenido exitosamente",
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
        res.status(500).json({ success: false, error: "Error al obtener el perfil" });
    }
};
