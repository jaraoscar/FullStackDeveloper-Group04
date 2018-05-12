const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	titulo: {
		type: String,
		required: true
	},

	descripcion: String,

	ubicacion: String,

	capacidad: Number,

	caracteristicas: [String]
})

const Cines = mongoose.model("Cines", esquema)

export { Cines }