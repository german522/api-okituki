const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'okitukisaludmental@gmail.com',
        pass: 'rvkwtufutfjpqpuq',
    },
});

const enviarCodigo = async (correoDestino, contenido, tipo = 'codigo') => {
    let asunto = '';
    let cuerpo = '';

    if (tipo === 'codigo') {
        asunto = 'Código de verificación';
        cuerpo = `Tu código de verificación es: ${contenido}`;
    } else if (tipo === 'password') {
        asunto = 'Recuperación de contraseña';
        cuerpo = `Se ha generado una nueva contraseña para tu cuenta: ${contenido}\n\nPuedes iniciar sesión con esta contraseña y cambiarla si lo deseas.`;
    }

    const mailOptions = {
        from: 'okitukisaludmental@gmail.com',
        to: correoDestino,
        subject: asunto,
        text: cuerpo,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { enviarCodigo };
