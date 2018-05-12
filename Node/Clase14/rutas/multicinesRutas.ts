import express = require("express")
import { controlador as multicineCtrl } from "../api/controladores/multicinesControlador"

const ruteador = express.Router()

ruteador.get("/:id", multicineCtrl.detallar)
ruteador.get("/", multicineCtrl.listar)
ruteador.post("/", multicineCtrl.insertar)
ruteador.put("/:id", multicineCtrl.actualizar)
ruteador.delete("/:id", multicineCtrl.eliminar)

export { ruteador }