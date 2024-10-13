function mayorA100() {
    console.log('Consigna 3-2: Pedido repetitivo de un numero mayor a 100 hasta que se ingresa uno');
    do {
        num = parseFloat(prompt(`Ingresa un número mayor a 100`));
    } while (num <= 100)
    console.log(`El número ingresado es ${num}, el cual es mayor que 100`);
}

mayorA100();