require("dotenv").config()
const { login } = require("./controladores/login")

const express = require("express")


const app = express()

app.use(express.json())

app.post("/login", login)

app.listen(process.env.PORT)