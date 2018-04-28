import { Request, Response, NextFunction } from "express"
import express = require("express")

const ruteador = express.Router()

const listaProductos = [
	{ id: 1, nombre: "Jabón" },
	{ id: 2, nombre: "Detergente" },
	{ id: 3, nombre: "Shampoo" },
	{ id: 4, nombre: "Acondicionador" },
	{ id: 5, nombre: "Papel higiénico" }
]

ruteador.get("/", (req: Request, res: Response) => {

	res.render("productos", {
		tituloPagina: "Lista de productos",
		lista: listaProductos
	})
})

ruteador.post("/agregar", (req: Request, res: Response) => {
	const producto = {
		id: listaProductos[listaProductos.length - 1].id + 1,
		nombre: req.body.nombre
	}

	listaProductos.push(producto)

	res.redirect("/productos")
	// res.json(req.body)
})


export { ruteador }