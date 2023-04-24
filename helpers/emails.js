import nodemailer from 'nodemailer'

const emailRegistro = async (datos) => { 
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const { email, nombre, token } = datos

    // Enviar el email
    await  transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Confirma tu Cuenta en BienesRaices.com',
        text: 'Confirma tu Cuenta en BienesRaices.com',
        html: `
            <p>Hola ${nombre}, verifica tu cuenta en BienesRaices.com</p>
            <p>Tu cuenta está casi lista, ingresa al siguiente enlace para confirmarla: 
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}">Confirmar Cuenta</a></p>

            <p>Si no creaste esta cuenta, pudes ignorar el mensaje</p>
        `
    })
}

const emailOlvidePassword = async (datos) => { 
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const { email, nombre, token } = datos

    // Enviar el email
    await  transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Restablece tu Password en BienesRaices.com',
        text: 'Restablece tu Password en BienesRaices.com',
        html: `
            <p>Hola ${nombre}, has solicitado restablecer tu password</p>
            <p>Ingresa al siguiente enlace para generar un nuevo password: 
            <a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/olvide-password/${token}">Restablecer Password</a></p>

            <p>Si tu no solicitaste el cambio de password, pudes ignorar el mensaje</p>
        `
    })
}

export {
    emailRegistro,
    emailOlvidePassword
}