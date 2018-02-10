// Promesa de elegir del cliente
const promesa = new Promise( (resolve, reject) => {
    setTimeout(()=>{
        resolve("El cliente eligió un plato")
    },3000)
})

promesa.then((msg)=>{
    //console.log("Se cumplió la promesa")
    console.log(msg)

    const promesaCocinero = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("El cocinero preparó el plato")
        }, 4000)
    })

    return promesaCocinero
})
.then((msg)=> {
    //console.log("El cocinero cumplió su promesa")
    console.log(msg)
    const promesaCliente = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("El cliente pagó la cuenta")
        }, 2000)
    })

    return promesaCliente
})
.then((msg)=>{
    console.log(msg)
    //console.log("El cliente pagó la cuenta")
})
.catch((error)=> {
    console.log(error)
    //console.log("La promesa no se cumplió")
})