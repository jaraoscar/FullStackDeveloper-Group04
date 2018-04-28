import { Request, Response, NextFunction } from "express"

interface IError extends Error {
	status?: number
}

const manejador = {
	noEncontrada: (req: Request, res: Response, next: NextFunction) => {
		const error: IError = new Error("Página no encontrada")
		error.status = 404
		next(error)
	},
	general: (error: IError, req: Request, res: Response, next: NextFunction) => {
		if (process.env.NODE_ENV === "development") {
			res.render("error", {
				mensaje: error.message,
				estado: error.status,
				pila: error.stack
			})
		} else if (process.env.NODE_ENV === "production") {
			res.render("error", {
				mensaje: error.message,
				estado: error.status,
				pila: ""
			})
		}

	}
}

export { manejador }