
const enviarEmail = async () => {

    //configuramos el trasportador del email
    let transporter = nodemailer.createTransporter({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAILUSER,
            pass: process.env.EMAILPASS
        }
    });

    //configuramos el email de respuesta al cliente que se registra
    let emailData = await transporter.sendMail({
        from: process.env.EMAILUSER,
        to: email,
        subject: 'Gracias por registrarse en nuestra App',
        html: `<h1>Bienvenido ${nombre} a nuestra Comunidad</h1> <br>
        A partir de este momento recibirás todas las novedades de nuestra comunidad <br>
        Saludos y muy buena jornada`
    })
};

module.exports = enviarEmail;