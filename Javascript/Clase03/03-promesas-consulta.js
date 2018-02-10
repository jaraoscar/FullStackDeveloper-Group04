const promesa = new Promise((resolve, reject) => {
    //Promesa de autenticación
    setTimeout(()=>{
        /*resolve({
            status: 200,
            autenticado: true,
            id: 10
        })*/
        reject({
            status: 401,
            error: "El token ha expirado"
        })
    }, 1500)
})

promesa.then((msg) => {
    console.log(msg)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            /*resolve({
                status: 200,
                autorizado: true,
                rol: "administrador"
            })*/
            reject({
                status: 403,
                error: "No tiene autorización para esta operación"
            })
        }, 1000)
    })
})
.then((msg) => {
    console.log(msg)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                status: 200,
                registros: ["Ana", "Felipe", "Lorena"]
            })
        }, 500)
    })
})
.then((msg) => {
    console.log(msg.registros)
})
.catch(error => {
    console.log(error)
})