function mayor() {
    console.log('Consigna 2-1: Mayor de 3 números');
    const valor = (indice) => parseInt(prompt(`Ingresa un valor para el número ${indice}`));
    let a = valor(1);
    let b = valor(2);
    let c = valor(3);
    let mayor = Math.max(a, b, c);
    console.log(`El número mayor es ${mayor}`);
}

mayor();