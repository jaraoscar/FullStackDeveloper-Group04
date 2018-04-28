import { Request, Response, NextFunction } from "express"
import express = require("express")
import { controlador as productosControladores } from "../api/controladores/productosControladores"

const ruteador = express.Router()

ruteador.get("/", productosControladores.listar)
ruteador.post("/agregar", productosControladores.agregar)

export { ruteador }