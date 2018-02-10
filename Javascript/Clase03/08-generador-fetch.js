const ajax = (url, verbo = "get", data) => {
    const opciones = {}
    opciones.method = verbo

    if (data) opciones.body = data

    return fetch(url, opciones).then(respuesta => respuesta.json())
}

const endpoint = "http://javascript.tibajodemanda.com/farmacia"

function* operaciones() {
    const fd = new FormData()
    fd.append("titulo", "Digan lo que digan")
    fd.append("direccion", "Av. Los muertos vivientes 666")

    ajax(endpoint, "post", fd)
        .then(() => {
            gen.next()
        })
        .catch(error => {
            console.log(error)
        })
    yield "Insertar"

    ajax(endpoint)
        .then(registros => {
            console.table(registros)
            gen.next()
        })
        .catch(error => {
            console.log(error)
        })
    yield "Listar"

    ajax(`${endpoint}/191`, "delete")
        .then(() => {
            gen.next()
        })
        .catch(error => {
            console.log(error)
        })
    yield "Eliminar"

    ajax(endpoint)
        .then(registros => {
            console.table(registros)
        })
        .catch(error => {
            console.log(error)
        })
    yield "Listar2"
}

const gen = operaciones()
gen.next()