import { Request, Response, NextFunction } from "express"

const controlador = {
	login: (req: Request, res: Response) => {
		res.send("No implementado")
	},
	logout: (req: Request, res: Response) => {
		res.send("No implementado")
	}
}

export { controlador }