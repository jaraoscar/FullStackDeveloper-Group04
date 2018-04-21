import {longitud as largo, saludar, fecha} from './utilitario'
import obtenerRol from './utilitario'
import * as funciones from './utilitario'
// import funciones = require("./utilitario")

const nombre: string = "Sergio"
console.log(funciones.longitud(nombre))
console.log(largo(nombre))

const lista: Array<string> = ["Andrea", "Fernanda", "Jana"]
console.log(funciones.saludar(lista))

console.log(funciones.fecha)

console.log(obtenerRol())
