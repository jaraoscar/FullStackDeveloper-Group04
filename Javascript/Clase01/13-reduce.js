const edades = [10, 15, 30, 34, 45, 54, 60, 80]

const sumaEdades = edades.reduce(function(acumulado, edad){
	return acumulado + edad
}, 0)

console.log(sumaEdades)

const cursos = ['node','angular','js','phaser','angular','unity','js', 'angular','angular', 'phaser', 'node', 'js']

const total = cursos.reduce(function(acumulado, curso){
	/*if(acumulado[curso]) {
		acumulado[curso] += 1
	} else {
		acumulado[curso] = 1
	}*/

	acumulado[curso] = acumulado[curso] ? (acumulado[curso] + 1) : 1

	return acumulado
}, {})

console.log(total)
