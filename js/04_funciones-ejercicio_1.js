function paridad() {
    console.log('Consigna 4-1: Función booleana de paridad de un número');
    const esPar = (num) => {
        return num % 2 === 0;
    }
    let num = parseFloat(prompt('Ingresa un número a evaluar su paridad'));
    console.log(`¿El número ${num} es par?: ${esPar(num)}`);
}

paridad();