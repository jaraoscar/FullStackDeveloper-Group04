import * as http from 'http'
import * as fs from 'fs'

const servidor = http.createServer(
    (req: http.IncomingMessage, res: http.ServerResponse) => {
        const ruta = req.url

        if (ruta.toLowerCase() == "/") {
            const stream = fs.createReadStream("./home.html", { encoding: 'utf8' })

            res.writeHead(200, { 'content-type': "text/html" })
            stream.pipe(res)
        } else if (ruta.toLowerCase() == "/manual") {
            const stream = fs.createReadStream("./manual.pdf")

            res.writeHead(200, { 'content-type': "application/pdf" })
            stream.pipe(res)
        } else if (ruta.toLowerCase() == "/usuario") {
            res.writeHead(200, { 'content-type': 'text/plain' })
            res.end("Nombre de usuario")
        } else if (ruta.toLowerCase() == "/listado") {
            const registros = [
                { id: 1, usuario: "Marlon" },
                { id: 2, usuario: "Pedro" }
            ]
            res.writeHead(200, { 'content-type': 'application/json' })
            res.end(JSON.stringify(registros))
        } else {
            res.writeHead(404, {'content-type': "text/plain"})
            res.end("Ruta no encontrada")
        }

        // res.writeHead(200, {'content-type': "text/plain"})
        // res.end(ruta)
    }
)

servidor.listen(4000, () => console.log("Servidor ejecutándose"))