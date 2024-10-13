//Ejercicio 1: Muestra en consola de elementos seleccionados en una lista
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#lista li').forEach(elemento => {
        elemento.addEventListener('click', function() {
            console.log(`${this.textContent} seleccionado`);
        })
    })
})

//Ejercicio 2: Campo de formulario con botones de habilitación y deshabilitación del mismo
document.addEventListener('DOMContentLoaded', function() {
    const habilitar = document.getElementById('btnOn');
    const deshabilitar = document.getElementById('btnOff');
    const entradaTexto = document.getElementById('texto2');

    habilitar.addEventListener('click', function() {
        entradaTexto.disabled = false;
        console.log('Campo habilitado');
    })
    deshabilitar.addEventListener('click', function() {
        entradaTexto.disabled = true;
        console.log('Campo deshabilitado');
    })
})