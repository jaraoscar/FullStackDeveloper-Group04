import express = require("express")
import { LibroController } from "../api/controladores/libro.controller"
import { ErroresHandler } from "../manejadores/errores.handler"
import { subirImagen, cambiarTamano } from "../manejadores/imagenes.handler"

const ruteador = express.Router()

ruteador.get("/", ErroresHandler.cacheo(LibroController.listar))
ruteador.get("/:id", ErroresHandler.cacheo(LibroController.detallar))
ruteador.post("/", subirImagen, cambiarTamano, ErroresHandler.cacheo(LibroController.insertar))
ruteador.put("/:id", ErroresHandler.cacheo(LibroController.actualizar))
ruteador.delete("/:id", ErroresHandler.cacheo(LibroController.eliminar))

export { ruteador } 