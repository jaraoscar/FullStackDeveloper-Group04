import { Request, Response, NextFunction } from "express"
import { multicinesModelo } from "../modelos/multicinesModelo"

const controlador = {
	listar: async (req: Request, res: Response) => {
		/*const salones =  salonesModelo.find()
		const profesores = profesoresModelo.find()

		await Promise.all([salones, profesores])*/

		const registros = await multicinesModelo.find()
			.catch(error => {
				console.log(error)
				res.send("Ocurrió un error")
			})
		res.render("listadoMulticines", { registros })

		/*multicinesModelo.find()
			.then(registros => {
				console.log(registros)
				res.render("listadoMulticines", { registros })
			})
			.catch(error => {
				console.log(error)
				res.send("Ocurrió un error")
			})*/
	},
	formulario: (req: Request, res: Response) => {
		res.render("editarMulticines", { titulo: "Insertar" })
	},
	editar: (req: Request, res: Response) => {
		multicinesModelo.findOne({ _id: req.params.id })
			.then(registro => {
				res.render("editarMulticines", { titulo: "Editar", registro })
			})
			.catch(error => {
				console.log(error)
				res.send("Ocurrió un error")
			})
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
		multicinesModelo.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(() => {
				res.redirect("/multicines")
			})
			.catch(error => {
				console.log(error)
				res.send(error)
			})
	},
	eliminar: (req: Request, res: Response) => {
		multicinesModelo.findOneAndRemove({ _id: req.params.id })
			.then(() => {
				res.redirect("/multicines")
			})
			.catch(error => {
				console.log(error)
				res.send(error)
			})

	},
	detallar: (req: Request, res: Response) => {
		res.send("No implementado4")
	}
}

export { controlador }