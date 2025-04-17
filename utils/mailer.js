const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'okitukisaludmental@gmail.com',
        pass: 'jsfhzflhhizfxhux',
    },
});

const enviarCodigo = async (correoDestino, codigo) => {
    const mailOptions = {
        from: 'okitukisaludmental@gmail.com',
        to: correoDestino,
        subject: 'Código de verificación',
        text: `Tu código de verificación es: ${codigo}`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { enviarCodigo };