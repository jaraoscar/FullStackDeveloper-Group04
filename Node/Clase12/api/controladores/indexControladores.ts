import { Request, Response, NextFunction } from "express"

const controlador = {
	index: (req: Request, res: Response) => {
		res
			.type("text/html")
			.send("<h1>prueba</h1>")
	},

	home: (req: Request, res: Response) => {
		res.render("home", {
			tituloPagina: "Home"
		})
	},

	quienessomos: (req: Request, res: Response) => {
		res.render("quienes", {
			tituloPagina: req.query.titulo
		})
	}
}

export { controlador }