function esPar() {
    console.log('Consigna 2-2: Paridad de un número');
    let num = prompt('Ingresa un número a evaluar su paridad');
    let paridad = num % 2 === 0 ? 'par' : 'impar';
    console.log(`El número ${num} es ${paridad}`);
}

esPar();