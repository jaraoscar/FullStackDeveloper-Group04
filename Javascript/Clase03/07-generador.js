function* generador(){
    console.log("Se ejecutó paso 1")
    yield "paso 1"
    console.log("Se ejecutó paso 2")
    yield "paso 2"
    console.log("Se ejecutó el paso 3")
}

const gen = generador()
gen.next() // Paso 1
gen.next() // Paso 2
gen.next() // Paso 3
//console.log(gen)


