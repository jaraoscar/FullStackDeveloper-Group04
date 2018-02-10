const ajax = (url, verbo = "get", data) => {
    const opciones = {}
    opciones.method = verbo
    
    if(data) opciones.body = data

    return fetch(url, opciones).then(respuesta => respuesta.json())
}

const endpoint = "http://javascript.tibajodemanda.com/farmacia"

ajax(endpoint)
    .then(registros => console.table(registros))
    .catch(error => console.log(error))