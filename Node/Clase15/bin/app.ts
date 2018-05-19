import { Application, Request, Response, NextFunction } from "express"
import express = require("express")
import bodyParser = require("body-parser")
import { ruteador as cinesRutas } from "../rutas/cinesRutas"
import { ruteador as opinionesRutas } from "../rutas/opinionesRutas"
import { ruteador as usuariosRutas } from "../rutas/usuariosRutas"
import { errores } from "../manejadores/errores"

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("./publico"))

app.use("/cines/opiniones", opinionesRutas)
app.use("/cines", cinesRutas)
app.use("/usuarios", usuariosRutas)

app.use(errores.rutaNoEncontrada)
app.use(errores.errorGeneral)

export { app }
