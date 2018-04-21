import * as http from 'http'

const servidor = http.createServer(
    (req: http.IncomingMessage, res: http.ServerResponse) => {
        res.writeHead(200, {'content-type': 'text/html'})
        res.end("<h1>Home</h1>")
        // res.writeHead(200, {'content-type': 'text/plain'})
        // res.write("Hola Mundo.")
        // res.end("Hola Mundo. Mi primer servidor en Node")
        /*res.write("Mi primer servidor en Node")
        res.end()*/
    }
)

servidor.listen(4000, () => console.log("Servidor ejecutándose"))