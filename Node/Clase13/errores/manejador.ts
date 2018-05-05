import { Request, Response, NextFunction } from "express"

interface IError extends Error {
	status?: number
}

const manejador = {
	noEncontrado: (req: Request, res: Response, next: NextFunction) => {
		const error: IError = new Error("Ruta no encontrada")
		error.status = 404
		next(error)
		// res.send("Ruta no encontrada")
	},
	general: (error: IError, req: Request, res: Response, next: NextFunction) => {
		if (process.env.NODE_ENV === "development") {
			res.json({
				mensaje: error.message,
				estado: error.status,
				pila: error.stack
			})
		} else {
			res.json({
				mensaje: error.message,
				estado: error.status
			})
		}
	}
}

export { manejador }