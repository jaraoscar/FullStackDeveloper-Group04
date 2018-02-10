(function(d, w){
    d.addEventListener("DOMContentLoaded", () => {
        console.log("Cargó el DOM")
    })

    w.addEventListener("load", () => {
        console.log("Cargaron todos los elementos de la página web")
    })
})(document, window)