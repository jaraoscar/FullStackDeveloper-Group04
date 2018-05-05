import express = require("express")
import { controlador as autenticacionCtrl } from "../api/controladores/autenticacionControlador"

const ruteador = express.Router()

ruteador.get("/login", autenticacionCtrl.login)
ruteador.get("/logout", autenticacionCtrl.logout)

export { ruteador }