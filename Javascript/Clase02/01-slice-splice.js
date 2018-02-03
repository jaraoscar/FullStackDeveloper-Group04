const personas = ["Carlos", "María", "Luis", "Jana", "Manuel"]

const extraidos = personas.slice(1, 3)
console.log(extraidos)
console.log(personas)
const parteFinal = personas.slice(2)
console.log(parteFinal)

const copia = personas.slice()
console.log(copia)

personas.splice(1, 2)
console.log(personas)

personas.splice(1, 1, "Marjorie", "Fernanda", "Greshell")
console.log(personas)

const listaAAgregar = ["Grecia", "Diego", "Omar"]
personas.splice(4, 1, ...listaAAgregar)
//personas.splice(4, 1, "Grecia", "Diego", "Omar")
console.log(personas)


