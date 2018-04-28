// Importaciones
import { Application, Request, Response, NextFunction } from "express"
import express = require("express")

// Declaraciones
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

// Middlewares
app.use((req: Request, res: Response, next: NextFunction) => {
	res.locals.titulo = "Nuevo Título"
	next()
})


// Rutas
app.get("/", (req: Request, res: Response) => {
	res
		.type("text/html")
		.send("<h1>prueba</h1>")
})

app.get("/home", (req: Request, res: Response) => {
	res.render("home", {
		tituloPagina: "Home"
	})
})

app.get("/quienessomos", (req: Request, res: Response) => {
	res.render("quienes", {
		tituloPagina: req.query.titulo
	})
})

// Escuchar el puerto
app.listen(4000, () => console.log("Servidor escuchando en el puerto 4000"))
