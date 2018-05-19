const mongoose = require("mongoose")
const md5 = require("md5")

const esquema = new mongoose.Schema({
	comentario: {
		type: String,
		required: true
	},

	correo: {
		type: String,
		required: true,
		email: true
	},

	cine: {
		type: mongoose.Schema.ObjectId,
		ref: "Cines"
	}
}, {
	toJSON: { virtuals: true }
})

esquema.virtual("avatar").get(function(){
	if(this.correo) {
		const hash = md5(this.correo)
		return `https://gravatar.com/avatar/${hash}?s=200`
	}

	return ""
	
})

const Opiniones = mongoose.model("Opiniones", esquema)

export { Opiniones }