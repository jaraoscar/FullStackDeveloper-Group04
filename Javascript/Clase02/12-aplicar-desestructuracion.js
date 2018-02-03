const registros = [
	{
		facebook: "https://facebook.com/usuario1",
		google: "https://googleplus.com/usuario1",
		twitter: "https://twitter.com/usuario1"
	},
	{
		facebook: "https://facebook.com/usuario2",
		google: "https://googleplus.com/usuario2",
		instagram: "https://twitter.com/usuario2"
	},
	{
		facebook: "https://facebook.com/usuario3"
	},
	{
		google: "https://googleplus.com/usuario4",
		tinder: "https://tinder.com/usuario4"
	}
]

const filas = registros
				.map( registro => {
					const {facebook = "no tiene", google = "no tiene", twitter = "no tiene", instagram = "no tiene", tinder = "no tiene"} = registro

					return `<tr>
								<td>${facebook}</td>
								<td>${google}</td>
								<td>${twitter}</td>
								<td>${instagram}</td>
								<td>${tinder}</td>
							</tr>
					`
				})