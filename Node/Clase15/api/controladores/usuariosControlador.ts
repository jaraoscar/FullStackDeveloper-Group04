import { Request, Response, NextFunction } from "express"
import { errores } from "../../manejadores/errores"
import { Usuarios } from "../modelos/usuariosModelo"

const controlador = {
    listar: async (req: Request, res: Response) => {
        const usuarios = await Usuarios.find()

        res.json(usuarios)
    },

    insertar: async (req: Request, res: Response) => {
        const usuario = new Usuarios(req.body)

        await usuario.save()

        res.json({ status: 200, message: "Registro insertado" })
    },

    actualizar: async (req: Request, res: Response) => {
        const _id = req.params._id

        await Usuarios.findAndUpdate({ _id }, req.body)

        res.json({ status: 200, message: "Registro actualizado" })
    },

    eliminar: async (req: Request, res: Response) => {
        const _id = req.params._id

        await Usuarios.findAndRemove({ _id }, req.body)

        res.json({ status: 200, message: "Registro actualizado" })
    }
}

export { controlador }