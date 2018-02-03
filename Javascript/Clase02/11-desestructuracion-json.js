const usuario1 = {
	facebook: "https://facebook.com/usuario1",
	google: "https://googleplus.com/usuario1",
	twitter: "https://twitter.com/usuario1"
}

console.log(usuario1.facebook)
console.log(usuario1["facebook"])

const {facebook, google, twitter} = usuario1
console.log(facebook)
console.log(google)
console.log(twitter)

const usuario2 = {
	facebook = "https://facebook.com/usuario2",
	google: "https://googleplus.com/usuario2",
	instagram: "https://googleplus.com/usuario2"
}

const {facebook, google, instagram} = usuario2