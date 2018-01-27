const ancianos = [
	{nombre: 'Clarisa', edad: 70},
	{nombre: 'Jose', edad: 86},
	{nombre: 'Carlos', edad: 60}
]

const lista = ancianos
				.sort(function(a, b) {
					return a.nombre > b.nombre
				})
				.map(function(anciano){
					if(anciano.edad < 70) return 'Buenos dias, '+ anciano.nombre

					if(anciano.edad >=70 && anciano.edad<80) return 'Usia ' + anciano.nombre

					return 'Su majestad ' + anciano.nombre
				})
console.log(lista)