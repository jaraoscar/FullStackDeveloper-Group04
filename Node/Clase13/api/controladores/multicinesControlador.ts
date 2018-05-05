import { Request, Response, NextFunction } from "express"
import { multicinesModelo } from "../modelos/multicinesModelo"

const controlador = {
	listar: (req: Request, res: Response) => {
		multicinesModelo.find()
			.then(registros => {
				res.render("listadoMulticines", { registros })
			})
			.catch(error => {
				console.log(error)
				res.send("Ocurrió un error")
			})
	},
	formulario: (req: Request, res: Response) => {
		console.log("Llegó acá")
		res.render("editarMulticines")
	},
	insertar: (req: Request, res: Response) => {
		const registro = new multicinesModelo(req.body)

		registro.save()
			.then(() => {
				res.redirect("/multicines")
			})
			.catch(error => {
				console.log(error)
				res.send(error)
			})
	},
	actualizar: (req: Request, res: Response) => {
		res.send("No implementado2")
	},
	eliminar: (req: Request, res: Response) => {
		res.send("No implementado3")
	},
	detallar: (req: Request, res: Response) => {
		res.send("No implementado4")
	}
}

export { controlador }