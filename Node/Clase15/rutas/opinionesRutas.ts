import { controlador as OpinionesCtrl } from "../api/controladores/opinionesControlador"
import { errores } from "../manejadores/errores"
import express = require("express")

const ruteador = express.Router()

ruteador.get("/:id", errores.cacheo(OpinionesCtrl.listar))
ruteador.delete("/:id", errores.cacheo(OpinionesCtrl.eliminar))
ruteador.put("/:id", errores.cacheo(OpinionesCtrl.actualizar))
ruteador.post("/", errores.cacheo(OpinionesCtrl.insertar))

export { ruteador }
