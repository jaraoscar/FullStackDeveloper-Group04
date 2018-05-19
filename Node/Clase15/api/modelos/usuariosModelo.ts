const mongoose = require("mongoose")
const md5 = require("md5")

const esquema = new mongoose.Schema({
    correo: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    contrasena: {
        type: String,
        required: true,
        trim: true
    },
    refreshToken: {
        type: String
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

