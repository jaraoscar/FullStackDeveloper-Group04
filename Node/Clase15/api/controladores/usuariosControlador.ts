import { Request, Response, NextFunction } from "express"
import { errores } from "../../manejadores/errores"
import { Usuarios } from "../modelos/usuariosModelo"
import { servicio as tokenServicio } from "../servicios/tokensServicios"

const controlador = {
    listar: async (req: Request, res: Response) => {
        const usuarios = await Usuarios.find()

        res.json(usuarios)
    },

    insertar: async (req: Request, res: Response) => {
        const usuario = new Usuarios({ correo: req.body.correo, contrasena: req.body.contrasena })

        //const usuarioInsertado = await usuario.save()
        const insertado = await usuario.save()
        const tokenGenerado = tokenServicio.crearToken(insertado._id)

        //await Usuarios.findOneAndUpdate({ _id: insertado._id }, { token: tokenGenerado })

        res.json({ status: 200, token: tokenGenerado })
    },

    login: async (req: Request, res: Response) => {
        const usuario = await Usuarios.findOne({correo: req.body.correo.toLowerCase(), contrasena: req.body.contrasena.trim()})

        if(usuario) {
            const token = tokenServicio.crearToken(usuario._id)

            return res.json({status: 200, token: token})
        }

        return res
                .status(409)
                .json({status: 409, message: "El usuario y contraseña son inválidos"})

    },

    actualizar: async (req: Request, res: Response) => {
        const _id = req.params._id

        await Usuarios.findOneAndUpdate({ _id }, { contrasena: req.body.contrasena })

        res.json({ status: 200, message: "Registro actualizado" })
    },

    eliminar: async (req: Request, res: Response) => {
        const _id = req.params._id

        await Usuarios.findOneAndRemove({ _id }, req.body)

        res.json({ status: 200, message: "Registro actualizado" })
    }
}

export { controlador }