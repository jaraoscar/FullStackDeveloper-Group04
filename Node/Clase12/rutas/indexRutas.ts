import { Request, Response, NextFunction } from "express"
import express = require("express")
import { controlador as indexControladores } from "../api/controladores/indexControladores"

const ruteador = express.Router()

ruteador.get("/", indexControladores.index)
ruteador.get("/home", indexControladores.home)
ruteador.get("/quienessomos", indexControladores.quienessomos)

export { ruteador }