// Importaciones
import { Request, Response, NextFunction, Application } from "express"
import express = require("express")
import bodyParser = require("body-parser")
import { ruteador as autenticacionRutas } from "../rutas/autenticacionRutas"
import { ruteador as multicinesRutas } from "../rutas/multicinesRutas"
import { ruteador as indexRutas } from "../rutas/indexRutas"
import { manejador as manejadorCtrl } from "../errores/manejador"
import mongoose = require("mongoose")

require("dotenv").config({ path: "./variables.env" })

// Conectar a Mongo
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on("error", error => console.log(error))

// Variables
const app: Application = express()

// Seteo de variables de Express
app.set("PORT", process.env.PORT)
app.set("view engine", "pug")
app.set("views", "./vistas")

// Middlewares
app.use(express.static("./assets"))
app.use(bodyParser.json())  // req.body
app.use(bodyParser.urlencoded({ extended: true }))

// Rutas
app.use("/", indexRutas)
app.use("/auth", autenticacionRutas)
app.use("/multicines", multicinesRutas)

// Errores
app.use(manejadorCtrl.noEncontrado)
app.use(manejadorCtrl.general)

// Servidor
app.listen(app.get("PORT"), () => console.log(`El servidor está ejecutándose en el puerto ${app.get("PORT")}`))


