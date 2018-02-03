const personas = ["Jana", "Lucero", "Javier", "Clarisa", "Daniela"]

const posicion = personas.indexOf("Javier")

personas.splice(posicion, 1)
console.log(personas)