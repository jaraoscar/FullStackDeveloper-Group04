import { Request, Response, NextFunction } from "express"
import { Cines } from "../modelos/cinesModelo"

const controlador = {
	insertar: async (req: Request, res: Response) => {
		const cine = new Cines(req.body)

		res.json({ message: "Registro guardado" })
	},

	listar: async (req: Request, res: Response) => {
		const cines = await Cines.find()

		res.json(cines)
	},

	listar_promesas: async (req: Request, res: Response) => {
		//let lista, caracteristicas
		/*Cines
			.find()
			.then( lista => res.json(lista))
			.catch(error => res.send(error))
			*/
		/*const lista = await Cines.find()
		const caracteristicas = await Caracteristicas.find()*/

		const cinesPromesa: Promise<any> = Cines.find()
		const caracteristicasPromesa: Promise<any> = Caracteristicas.find()

		const [lista, caracteristicas] = await Promise.all([cinesPromesa, caracteristicasPromesa])

		/*await Promise.all([cinesPromesa, caracteristicasPromesa])
			.then(resultados => {
				lista = resultados[0]
				caracteristicas = resultados[1]
				console.log("cinesPromesa", resultados[0])
				console.log("caracteristicasPromsa", resultados[1])
			})
			.catch(error => console.log(error))*/

		res.json({ lista, caracteristicas })
		//console.log(lista)
	},

	actualizar: (req: Request, res: Response) => {
		console.log("No implementado")
	},

	eliminar: (req: Request, res: Response) => {
		console.log("No implementado")
	},

	detallar: (req: Request, res: Response) => {
		console.log("No implementado")
	}
}

export { controlador }