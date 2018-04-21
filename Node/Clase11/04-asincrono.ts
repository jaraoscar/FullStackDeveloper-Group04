import * as fs from 'fs'

const texto = fs.readFileSync('./lectura.txt', {encoding: "utf8"})
console.log(texto)
console.log("Node")

fs.readFile("./lectura.txt", "utf8", (err, data ) => {
    /*if(err) {
        console.log(err)
    } else {
        console.log(data)
    }*/
    if(err) return console.log(err)

    fs.writeFile('./escritura.txt', data, err => {
        if(err) return console.log(err)
        console.log("OK")
    })
    console.log(data)
})

