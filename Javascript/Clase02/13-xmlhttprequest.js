const objxml = new XMLHttpRequest()
const tbody = document.querySelector("tbody")

const crearFila = registro => {
	return `<tr>
				<td>${registro.id}</td>
				<td>${registro.titulo}</td>
				<td>${registro.direccion}</td>
				<td>
					<a href="#" class="btn btn-danger btnEliminar" data-id="${registro.id}">
						Eliminar
					</a>
				</td>
			</tr>
	`
}

const crearFilas = registros => {
	const filas = registros
					.map( registro => {
						return crearFila(registro)
					})
					.join("")
	return filas
}

const asignarEventosFila = () => {
	const linksEliminar = document.querySelectorAll(".btnEliminar")

	linksEliminar.forEach(link => {
		link.addEventListener("click", e => {
			if(!confirm("¿Está seguro?")) return

			const id = e.target.dataset.id

			const objxml = new XMLHttpRequest()
			objxml.addEventListener("readystatechange", e => {
				const obj = e.currentTarget

				if(obj.readyState == 4 && (obj.status == 200 || obj.status == 201)){
					listado()
				}
			})

			objxml.open("delete", `http://javascript.tibajodemanda.com/farmacia/${id}`)
			objxml.send()

		})
	})
}

const listado = () => {
	objxml.addEventListener("readystatechange", function(e){
		const obj = e.currentTarget
	
		//console.log(obj.readyState)
		if(obj.readyState == 4 && (obj.status == 200 || obj.status == 201)){
			const registros = JSON.parse(obj.responseText)
	
			const filas = crearFilas(registros)
			tbody.innerHTML = filas

			asignarEventosFila()

			//console.table(registros)
		}
	})
	
	objxml.open("get", "http://javascript.tibajodemanda.com/farmacia", true)
	objxml.send()
}

listado()
