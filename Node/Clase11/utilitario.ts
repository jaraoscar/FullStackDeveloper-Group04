const longitud = (cadena: string) => cadena.length

const saludar = (nombres: Array<string>) => {
    return nombres.map( nombre => `Hola ${nombre}`)
}

const fecha = new Date()

const obtenerRol = () => 'admin'

export { longitud, saludar, fecha }
export default obtenerRol