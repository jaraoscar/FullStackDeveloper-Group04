// Promesa de elegir del cliente
const promesa = new Promise( (resolve, reject) => {
    setTimeout(()=>{
        resolve()
    },3000)
})

promesa.then(()=>{
    console.log("Se cumplió la promesa")

    const promesaCocinero = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve()
        }, 4000)
    })

    promesaCocinero.then(()=>{
        console.log("El cocinero cumplió su promesa")

        const promesaCliente = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve()
            }, 2000)
        })

        promesaCliente.then(()=>{
            console.log("El cliente pagó la cuenta")
        })

        promesaCliente.catch(()=> {
            console.log("El cliente no pagó la cuenta")
        })

    })

    promesaCocinero.catch(()=>{
        console.log("El cocinero no cumplió con su promesa")
    })

})

promesa.catch(()=> {
    console.log("La promesa no se cumplió")
})