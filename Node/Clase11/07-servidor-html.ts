import * as http from 'http'
import * as fs from 'fs'

const servidor = http.createServer(
    (req: http.IncomingMessage, res: http.ServerResponse) => {
        const stream = fs.createReadStream("./home.html", {encoding: "utf8"})

        res.writeHead(200, {'content-type': "text/html"})
        stream.pipe(res)

        /*fs.readFile('./home.html', 'utf8', (err, data) => {
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data)
        })*/
    }
)

servidor.listen(4000, () => console.log("Servidor ejecutándose"))
