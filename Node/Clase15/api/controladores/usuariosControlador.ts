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
        const refreshTokenGenerado = tokenServicio.crearRefreshToken()

        await Usuarios.findOneAndUpdate({ _id: insertado._id }, { refreshToken: refreshTokenGenerado })

        res.json({ status: 200, tokens: {accessToken: tokenGenerado, refreshToken: refreshTokenGenerado} })
    },

    login: async (req: Request, res: Response) => {
        const usuario = await Usuarios.findOne({correo: req.body.correo.toLowerCase(), contrasena: req.body.contrasena.trim()})

        if(usuario) {
            const token = tokenServicio.crearToken(usuario._id)

            return res.json({status: 200, tokens: {
                accessToken: token, refreshToken: usuario.refreshToken
            }})
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
    },

    generarNuevoAccessToken: async (req: Request, res: Response) => {
        const refreshToken = req.body.refreshToken

        const usuario = await Usuarios.findOne({refreshToken})

        if(usuario) {
            const accessToken = tokenServicio.crearToken(usuario._id)

            res.json({status: 200, tokens: {
                accessToken
            }})
        } else {
            res
                .status(500)
                .json({
                    status: 500,
                    message: "El refresh token es inválido"
                })
        }

    }



}

export { controlador }