const id = 10
const nombre = "Clarisa"

// const fila = "<tr><td>"+id+"</td><td>"+nombre+"</td></tr>"
let fila = ""
fila += "<tr>"
fila += "<td>" + id + "</td>"
fila += "<td>" + nombre + "</td>"
fila += "</tr>"

const row = `
	<tr>
		<td>${id}</td>
		<td>${nombre}</td>
	</tr>
`
console.log(row)


