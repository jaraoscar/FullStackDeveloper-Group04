const alumnos = ['Tony', 'Alejandro', 'Jana', 'Javier']

for(let alumnoInd=0; alumnoInd < alumnos.length; alumnoInd = alumnoInd + 1){
	console.log(alumnos[alumnoInd])
}

for(let alumnoInd=0; alumnoInd < alumnos.length; alumnoInd += 1){
	console.log(alumnos[alumnoInd])
}

for(let alumnoInd=0; alumnoInd < alumnos.length; alumnoInd++){
	console.log(alumnos[alumnoInd])
}

for(let alumnoInd=(alumnos.length-1); alumnoInd >= 0; alumnoInd--){
	console.log(alumnos[alumnoInd])
}

alumnos.forEach(function(item, ind){
	console.log('Item', item)
	console.log('Indice', ind)
})

alumnos.forEach(function(item){
	console.log('Item', item)
})