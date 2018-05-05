import { Request, Response, NextFunction } from "express"

const controlador = {
	listar: (req: Request, res: Response) => {
		res.send("No implementado")
	},
	insertar: (req: Request, res: Response) => {
		res.send("No implementado")
	},
	actualizar: (req: Request, res: Response) => {
		res.send("No implementado")
	},
	eliminar: (req: Request, res: Response) => {
		res.send("No implementado")
	},
	detallar: (req: Request, res: Response) => {
		res.send("No implementado")
	}
}

export { controlador }