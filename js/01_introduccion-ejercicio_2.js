function suma() {
    console.log('Consigna 1-2: Suma de dos números');
    const numero = (indice) => parseInt(prompt(`Ingresa un valor para el número ${indice}`));
    let a = numero(1);
    let b = numero(2);
    let c = a + b;
    console.log(`La suma entre los valores de a y b es ${c}`);
}

suma();