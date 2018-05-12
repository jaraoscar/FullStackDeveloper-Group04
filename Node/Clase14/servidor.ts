require("dotenv").config({ path: "./variables.env" })
import mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on("error", error => {
	console.log(error)
})

require("./api/modelos/cinesModelo")

import { app } from "./bin/app"


//const app = require("./bin/app")
const servidor = app.listen(process.env.PORT, () => {
	const address: any = servidor.address()
	console.log(`Servidor ejecutándose en el puerto ${address.port}`)
})