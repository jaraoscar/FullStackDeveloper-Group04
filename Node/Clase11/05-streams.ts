import * as fs from 'fs'

const lectura = fs.createReadStream("./lectura.txt")
const escritura = fs.createWriteStream("./escritura-stream.txt")

/*lectura.on("data", chunck => {
    console.log(chunck)
    escritura.write(chunck)
})*/

lectura.pipe(escritura)