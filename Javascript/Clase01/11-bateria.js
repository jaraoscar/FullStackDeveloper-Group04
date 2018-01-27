const teclas = document.querySelectorAll('a')

teclas.forEach(function(tecla){
	tecla.addEventListener('transitionend', function(e){
		const etiqueta = e.target
		etiqueta.classList.remove('presionada')
	})
})

window.addEventListener('keyup', function(e){
	const audio = document.querySelector('audio[data-tecla="'+e.keyCode+'"]')

	if(audio){
		audio.currentTime = 0
		audio.play()

		const tecla = document.querySelector('a[data-tecla="'+e.keyCode+'"]')
		tecla.classList.add('presionada')
	}
})

