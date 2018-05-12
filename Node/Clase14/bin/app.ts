import { Application, Request, Response, NextFunction } from "express"
import express = require("express")
import bodyParser = require("body-parser")
import { ruteador as multicinesRutas } from "../rutas/multicinesRutas"
import { errores } from "../manejadores/errores"

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/multicines", multicinesRutas)

app.use(errores.rutaNoEncontrada)
app.use(errores.errorGeneral)

export { app }
