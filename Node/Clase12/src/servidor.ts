// Importaciones
import { Application, Request, Response, NextFunction } from "express"
import express = require("express")
import bodyParser = require("body-parser")
import { ruteador as productosRutas } from "../rutas/productosRutas"
import { ruteador as indexRutas } from "../rutas/indexRutas"
import { manejador } from "../errores/manejadorErrores"

// Declaraciones
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

/*app.use("/publico", (req: Request, res: Response, next: NextFunction) => {
	// __dirname
	res.sendFile("/Users/administrador/Desktop/FullStackDeveloper-Group04/Node/Clase12/publico" + req.url)
})*/

app.use(express.static("./publico"))

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req: Request, res: Response, next: NextFunction) => {
	res.locals.titulo = "Nuevo Título"
	next()
})

// Rutas
app.use("/", indexRutas)
app.use("/productos", productosRutas)

// Errores

// Página no encontrada
app.use(manejador.noEncontrada)

// Manejador de errores general
app.use(manejador.general)

// Escuchar el puerto
app.listen(4000, () => console.log("Servidor escuchando en el puerto 4000"))
