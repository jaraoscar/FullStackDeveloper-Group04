const registros = [
	{id: 1, nombre: "Jana"},
	{id: 2, nombre: "Javier"},
	{id: 3, nombre: "Manuel"},
	{id: 4, nombre: "Emma"}
]

const posicion = registros.findIndex(function(item){
	// return item.id == 2
	return item.nombre.toLowerCase().trim() === "javier"
})

registros.splice(posicion, 1)
console.log(registros)