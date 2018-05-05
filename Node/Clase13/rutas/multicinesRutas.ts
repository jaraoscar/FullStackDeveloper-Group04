import express = require("express")
import { controlador as multicinesCtrl } from '../api/controladores/multicinesControlador'

const ruteador = express.Router()

ruteador.get("/", multicinesCtrl.listar)
ruteador.get("/add", multicinesCtrl.formulario)
ruteador.get("/:id", multicinesCtrl.detallar)
ruteador.post("/", multicinesCtrl.insertar)
ruteador.put("/:id", multicinesCtrl.actualizar)
ruteador.delete("/:id", multicinesCtrl.eliminar)

export { ruteador }