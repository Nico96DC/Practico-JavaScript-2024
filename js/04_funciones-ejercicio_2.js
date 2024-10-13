function temperaturas() {
    console.log('Consigna 4-2: Conversión de Celsius a Fahrenheit');
    const convertirCelsiusAFahrenheit = (celsius) => {
        return celsius * 9 / 5 + 32;
    }
    let celsius = parseFloat(prompt(`Ingresa una temperatura en grados Celsius`));
    console.log(`El equivalente de ${celsius}°C es ${convertirCelsiusAFahrenheit(celsius)}°F`);
}

temperaturas();