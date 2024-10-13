function primeros10() {
    console.log('Consigna 6-2: Array que agrega los primeros 10 números pares');
    let pares = [];
    for (let i = 1; i <= 10; i++) {
        pares.push(i * 2);
    }
    console.log(`Primeros 10 números pares: \n${pares}`);
}

primeros10();