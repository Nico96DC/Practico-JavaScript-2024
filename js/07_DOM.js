//Ejercicio 1: Bóton que cambie el texto en HTML a color azul
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.getElementById('colores').innerHTML =
    `<p style="color: blue">Primer párrafo<br>
                            Segundo párrafo<br>
                            Tercer párrafo</p>`;
})

//Ejercicio 2: Formulario con un texto y un botón, indicando en una ventana emergente el texto ingresado
let formulario = document.getElementById('formulario');
let texto = document.getElementById('texto');
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    if (texto.value == "") {
        alert('Por favor, ingrese un texto');
    } else {
        alert(`Texto ingresado: ${texto.value}`);
    }
})