import { Application } from "express"
import express = require("express")
import bodyParse = require("body-parser")
import { ruteador } from "../rutas/libros.routes"
import { ErroresHandler } from "../manejadores/errores.handler"

const app: Application = express()

app.use(express.static("./publico"))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

app.use("/", ruteador)

app.use(ErroresHandler.noEncontrado)
app.use(ErroresHandler.general)

export { app }