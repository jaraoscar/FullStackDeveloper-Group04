// const div = document.getElementsByTagName('div')[0]
const div = document.querySelector('div')

div.addEventListener('click', function(){
	document.body.style.backgroundColor = 'green'
})

window.addEventListener('keyup', function(){
	document.body.style.backgroundColor = 'green'
})