import { Request, Response, NextFunction } from "express"
import { Libro } from "../modelos/libro.model"

const LibroController = {
	listar: async (req: Request, res: Response) => {
		const libros = await Libro.find()

		res.json(libros)
	},
	detallar: async (req: Request, res: Response) => {
		const _id = req.params.id
		const libro = await Libro.find({ _id })

		res.json({ status: 200, libro })
	},
	insertar: async (req: Request, res: Response) => {
		const libro = new Libro(req.body)
		console.log(req.body)
		await libro.save()

		res.json({ status: 200, message: `Libro creado: ${libro.titulo}` })
	},
	actualizar: async (req: Request, res: Response) => {
		const _id = req.params.id
		await Libro.findOneAndUpdate({ _id }, req.body)

		res.json({ status: 200, message: "Registro actualizado" })
	},
	eliminar: async (req: Request, res: Response) => {
		const _id = req.params.id
		await Libro.findOneAndRemove({ _id })

		res.json({ status: 200, message: "Registro eliminado" })
	}
}

export { LibroController }