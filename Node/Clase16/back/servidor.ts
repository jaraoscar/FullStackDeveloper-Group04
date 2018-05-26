import { app } from "./bin/app"
import mongoose = require("mongoose")

require("dotenv").config({ path: "./variables.env" })

mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on("error", error => {
	console.log(error)
})
mongoose.connection.on("connected", () => {
	console.log("Mongo conectado")
})


require("./api/modelos/libro.model")

const servidor: any = app.listen(process.env.PORT, () => {
	console.log(`Servidor ejecutándose en el puerto ${servidor.address().port}`)
})