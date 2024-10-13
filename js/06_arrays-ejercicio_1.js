function array() {
    console.log('Consigna 6-1: Un array de números del 1 al 10 y otro con los valores iniciales multiplicados por 2');
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let numerosDobles = numeros.map(x => x * 2);
    console.log(`Números iniciales: \n${numeros}`);
    console.log(`Números duplicados: \n${numerosDobles}`);
}

array();