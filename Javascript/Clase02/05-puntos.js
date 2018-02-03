const movimiento = [
	["LIM456","SAN567","15:30","16:20",1,"BUE567", "14:20", "18:45"],
	["LIM452","BOG789","12:20","18:56",0]
]

function detalle(origen, destino, horaInicio, horaFin, flag, ...resto){
	console.log("==============")
	console.log(origen)
	console.log(destino)
	console.log(horaInicio)
	console.log(horaFin)
	console.log(flag)
	console.log(resto[0])
	console.log(resto[1])

}

movimiento.forEach(function(mov) {
	const primeros = mov.slice(0, 6)
	const otros = mov.slice(6)

	detalle(...primeros, ...otros)
})