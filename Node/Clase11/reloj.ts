import {EventEmitter} from 'events'

export class Reloj extends EventEmitter {
    intervalo: number 

    constructor(tiempo: number) {
        super()
        this.intervalo = tiempo * 1000
    }

    iniciar(){
        setInterval(()=>{
            this.emit("actualizar", this.obtenerHora())
        }, this.intervalo)
    }

    obtenerHora(){
        const fecha = new Date()
        const horas = fecha.getHours()
        const minutos = fecha.getMinutes()
        const segundos = fecha.getSeconds()

        return `${horas}:${minutos}:${segundos}`
    }
}

// export {Reloj}