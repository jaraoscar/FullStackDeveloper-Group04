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

esquema.pre("save", async function (next) {
	if(this.isModified("titulo")){
		this.slug = slug(this.titulo.toLowerCase())

		const expReg = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`,'i')
	
		const coincidencias = await this.constructor.find({slug: expReg})
		
		if(coincidencias.length) {
			this.slug = `${this.slug}-${coincidencias.length+1}`
		}	
	}

	next()
})

const Cines = mongoose.model("Cines", esquema)

export { Cines }