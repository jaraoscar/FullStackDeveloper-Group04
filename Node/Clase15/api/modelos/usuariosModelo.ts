const mongoose = require("mongoose")
const md5 = require("md5")

const esquema = new mongoose.Schema({
    correo: {
        type: String,
        required: true,
        trim: true
    },
    contrasena: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String,
        required: true
    }
}, {
    toJSON: {virtuals: true}
})

esquema.virtual("avatar").get(function(){
    const hash = md5(this.correo)

    return `https://gravatar.com/avatar/${hash}?s=200`
}) 

const Usuarios = mongoose.model("Usuarios", esquema)

export { Usuarios }

