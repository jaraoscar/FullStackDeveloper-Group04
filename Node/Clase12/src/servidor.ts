// Importaciones
import { Application, Request, Response, NextFunction } from "express"
import express = require("express")
import bodyParser = require("body-parser")
import { ruteador as productosRutas } from "../rutas/productosRutas"
import { ruteador as indexRutas } from "../rutas/indexRutas"

// Declaraciones
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

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
interface IError extends Error {
	status?: number
}
// Página no encontrada
app.use((req: Request, res: Response, next: NextFunction) => {
	const error: IError = new Error("Página no encontrada")
	error.status = 404
	next(error)
})

// Manejador de errores general
app.use((error: IError, req: Request, res: Response, next: NextFunction) => {
	res.render("error", {
		mensaje: error.message,
		estado: error.status,
		pila: error.stack
	})
})

// Escuchar el puerto
app.listen(4000, () => console.log("Servidor escuchando en el puerto 4000"))
