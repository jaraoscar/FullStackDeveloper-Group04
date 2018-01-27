/*
	document: que es quien conoce toda la estructura del html
	window: que conoce las caracteristicas del navegador y del sistema operativo
	navigator: que conoce las caractericas del user agent
*/

// Devuelven lista de tipo HtmlCollection
const div = document.getElementsByTagName('div')[0]
const article = document.getElementsByClassName('textoPrincipal')

const contenido = document.getElementById('contenido')

// Devuelve lista de tipo NodeList
const rojos = document.querySelectorAll('section.rojo')
console.log(rojos)

const boton = document.querySelector('button')

const audio = document.querySelector('audio[data-rel=\'gol\'')

const body = document.querySelector('body')
const body2 = document.getElementsByTagName('body')[0]
const body3 = document.body

body.style.backgroundColor = 'orange'
body.style.background = 'linear-gradient(red, orange)'
body.style.fontSize = '50px'

boton.style.fontSize = '50px'
boton.style.fontFamily = 'Verdana'
boton.style.border = '0'

div.classList.add('verde') // Agrega una clase

setTimeout(function(){
	div.classList.remove('verde') // Quita una clase
}, 2000)

setTimeout(function(){
	rojos.forEach(function(item){
		item.classList.add('naranja')
	})
}, 2000)


