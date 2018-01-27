const persona = {
	talla: 179,
	edad: 40,
	hobbies: ['programar','ensenar','cocinar'],
	nombre: 'Sergio'
}

persona.raza = 'triguena'

console.log(persona)
console.log(persona.raza)
console.log(persona.comidaFavorita)

const registros = [
	{id: 1, nombre: 'Farmacia Universal', ubicacion: {latitud: -12.344555, longitud: 77.344555}},
	{id: 2, nombre: 'Farmacia La Buena Muerte', ubicacion: {latitud: -12.344555, longitud: 77.344555}},
	{id: 3, nombre: 'Farmacia Digan lo que digan', ubicacion: {latitud: -12.344555, longitud: 77.344555}}
]

console.log(registros[1].nombre)
console.log(registros[1].ubicacion.latitud)