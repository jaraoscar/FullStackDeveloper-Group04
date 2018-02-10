class Animal {
    constructor(raza, tipoAnimal, alimento){
        this.raza = raza
        this.tipoAnimal = tipoAnimal
        this.tipoAlimento = alimento

        console.log("Se ejecutó el constructor")
    }

    descripcion() {
        return `Es un ${this.tipoAnimal} de raza ${this.raza}`
    }

    static todasLasRazas() {
        return "Siberiano, Shitzu, Pekines"
    }

    get alimentacion(){
        return this.tipoAlimento
    }

    set alimentacion(alimento) {
        this.tipoAlimento = alimento
    }
}

class Mamifero extends Animal {
    constructor(){
        super("Shitzu", "Canino", "pollo")

    }
    descripcion(){
        const mensaje = super.descripcion()
        return `Mensaje: ${mensaje}`
        // return "Este método es de la clase Mamifero"
    }
}

const mamifero = new Mamifero()
console.log(mamifero.descripcion())

