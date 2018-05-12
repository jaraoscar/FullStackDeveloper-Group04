const slug = require("slug")
const mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	titulo: {
		type: String,
		required: true
	},

	descripcion: String,

	ubicacion: String,

	capacidad: Number,

	caracteristicas: [String],

	slug: String

	/*opiniones: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Opiniones"
		}
	]*/
}, {
		toJSON: { virtuals: true }
	})

esquema.virtual("opiniones", {
	ref: "Opiniones",
	localField: "_id",
	foreignField: "cine"
})

function autoPoblar(next) {
	this.populate("opiniones")
	next()
}

esquema.pre("find", autoPoblar)

esquema.pre("findOne", autoPoblar)

esquema.pre("save", function (next) {
	this.slug = slug(this.titulo.toLowerCase())
	next()
})

const Cines = mongoose.model("Cines", esquema)

export { Cines }