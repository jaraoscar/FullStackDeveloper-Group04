import { Request, Response, NextFunction } from "express"

const listaProductos = [
	{ id: 1, nombre: "Jabón" },
	{ id: 2, nombre: "Detergente" },
	{ id: 3, nombre: "Shampoo" },
	{ id: 4, nombre: "Acondicionador" },
	{ id: 5, nombre: "Papel higiénico" }
]

const controlador = {
	listar: (req: Request, res: Response) => {

		res.render("productos", {
			tituloPagina: "Lista de productos",
			lista: listaProductos
		})
	},
	agregar: (req: Request, res: Response) => {
		const producto = {
			id: listaProductos[listaProductos.length - 1].id + 1,
			nombre: req.body.nombre
		}

		listaProductos.push(producto)

		res.redirect("/productos")
		// res.json(req.body)
	}

}

export { controlador }