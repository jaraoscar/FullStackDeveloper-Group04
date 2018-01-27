const edades = [10, 15, 28, 30, 50, 80, 90]

const hayMenores = edades.some(function(edad){
	return edad < 18
})
console.log('Hay menores?', hayMenores)

const todosMayores = edades.every(function(edad){
	return edad >= 18
})
console.log('Todos mayores?', todosMayores)

const listaOrdenada = edades.sort(function(a, b){
	return b - a
})
console.log('Lista ordenada', listaOrdenada)

const ancianos = [
	{nombre: 'Clarisa', edad: 70},
	{nombre: 'Jose', edad: 86},
	{nombre: 'Carlos', edad: 60}
]
const persona60 = ancianos.find(function(anciano){
	return anciano.edad == 60
})
console.log(persona60)

const posicionPersona60 = ancianos.findIndex(function(anciano){
	return anciano.edad == 60
})
console.log(posicionPersona60)

ancianos.splice(posicionPersona60, 1)
console.log(ancianos)

const saludos = edades.map(function(edad){
	if(edad < 18) return 'Hola'
	if(edad >= 18 && edad <= 30) return 'Buenas'
	
	return 'Buenos dias'
})
console.log(saludos)