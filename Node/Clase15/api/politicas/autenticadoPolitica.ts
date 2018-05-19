import { Request, Response, NextFunction}  from "express"
import { servicio as tokensServicio} from "../servicios/tokensServicios"

const tokenValido = (req: Request, res: Response, next: NextFunction) => {
    if(req.headers["authorization"]) {
        const cabecera = req.headers["authorization"]
        const elementos: Array<string> = cabecera.split(" ")

        const token = elementos[1]

        tokensServicio.validarToken(token)
            .then(
                () => next()
            )
            .catch(
                error => res.status(error.status).json({message: error.message})
            )
    } else {
        res
            .status(409)
            .json({
                status: 409,
                message: "Debe loguearse"
            })
    }
}

export { tokenValido }