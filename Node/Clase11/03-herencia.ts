import { Reloj } from './reloj'

const reloj = new Reloj(1)
reloj.iniciar()

reloj.on("actualizar", fecha => console.log(fecha))