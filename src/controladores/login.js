const transportador = require("../email")
const compiladorHtml = require("../utils/compiladorHTML")


const usuario = {
    nome: "Caio",
    email: "caioevandro81@gmail.com",
    senha: "123abc"

}

const login = async (req, res) => {
    const { email, senha } = req.body

    if (usuario.email != email) {
        return res.status(400).json({mensagem: "Credenciais invalidas"})
    }
    if (usuario.senha != senha) {
        return res.status(400).json({mensagem: "Credenciais invalidas"})
    }
    //fazer envio de email

    
    const html = await compiladorHtml("./src/templates/login.html", {
        nomeusuario: usuario.nome
    })

    transportador.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
        to: `${usuario.nome} <${usuario.email}>`,
        subject: "tentaiva de login",
        html,
    })
    return res.json({mensagem: "login concluido"})
}

module.exports = {
    login
}