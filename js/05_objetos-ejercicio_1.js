function objPersona() {
    console.log('Consigna 5-1: Objeto persona con propiedades');
    let persona = {
        nombre: 'Pedro',
        edad: 25,
        ciudad: null,
        actualizarDatos: function () {
            this.ciudad = prompt(`Ingresa una nueva ciudad para ${this.nombre}`);
        }
    }
    persona.actualizarDatos();
    console.log(`Propiedades actualizadas de la persona: \nNombre: ${persona.nombre}\nEdad: ${persona.edad} años\nCiudad: ${persona.ciudad}`);
}

objPersona();