const jwt = require("jwt-simple")
const moment = require("moment")
const randToken = require("rand-token")

const servicio = {
    crearToken: id => {
        const payload = {
            id: id,
            iat: moment().unix(),
            exp: moment().add(+process.env.TOKEN_EXPIRE,'seconds').unix()
        }
        
        return jwt.encode(payload, process.env.KEY_SECRET)
    },

    validarToken: (token: string): Promise<{}> => {
        return new Promise<{}>((resolve, reject) => {
            try {
                const payload = jwt.decode(token, process.env.KEY_SECRET)
                resolve({status: 200, payload})
            } catch (error) {
                if(error.message.toLowerCase()==="token expired"){
                    reject({status: 401, message: "Token expirado"})
                } else {
                    reject({status: 500, message: "Token inválido"})
                }
            }
        })
    },

    crearRefreshToken: () => {
        return randToken.uid(256)
    }
}

export { servicio }