// Importaciones
import { Application, Request, Response, NextFunction } from "express"
import express = require("express")
import bodyParser = require("body-parser")

// Declaraciones
const app: Application = express()
app.set("view engine", "pug")
app.set("views", "./vistas")

const listaProductos = [
	{ id: 1, nombre: "Jabón" },
	{ id: 2, nombre: "Detergente" },
	{ id: 3, nombre: "Shampoo" },
	{ id: 4, nombre: "Acondicionador" },
	{ id: 5, nombre: "Papel higiénico" }
]

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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

app.get("/productos", (req: Request, res: Response) => {

	res.render("productos", {
		tituloPagina: "Lista de productos",
		lista: listaProductos
	})
})

app.post("/productos/agregar", (req: Request, res: Response) => {
	const producto = {
		id: listaProductos[listaProductos.length - 1].id + 1,
		nombre: req.body.nombre
	}

	listaProductos.push(producto)

	res.redirect("/productos")
	// res.json(req.body)
})

// Escuchar el puerto
app.listen(4000, () => console.log("Servidor escuchando en el puerto 4000"))
