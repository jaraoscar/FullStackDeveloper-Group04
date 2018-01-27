const alumnos = ['Tony', 'Alejandro', 'Jana', 'Javier']

// Agrega un elemento al final del arreglo
alumnos.push('Noelia')
console.log(alumnos)

// Agrega un elemento al inicio del arreglo
alumnos.unshift('Andrea')
console.log(alumnos)

// Extrae un elemento del final del arreglo
const ultimoAlumno = alumnos.pop()
console.log(ultimoAlumno)
console.log(alumnos)

// Extrae un elemento del inicio del arreglo
const primerAlumno = alumnos.shift()
console.log(primerAlumno)
console.log(alumnos)

const otraLista = alumnos.slice(2, 3)
console.log(otraLista)

const otraListaMas = alumnos.slice(1)
console.log(otraListaMas)

const extraeTodo = alumnos.slice()
console.log(extraeTodo)

alumnos.splice(2, 1)
console.log(alumnos)

alumnos.splice(1, 1, 'Manuel', 'Aurora')
console.log(alumnos)

console.log('Total de alumnos:', alumnos.length)


