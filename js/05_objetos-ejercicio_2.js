function objLibro() {
    console.log('Consigna 5-2: Objeto libro con propiedades');
    let libro = {
        titulo: 'Libro de ejemplo',
        autor: 'Autor 1',
        anio: null,
        antiguedad: function () {
            this.anio = parseFloat(prompt('Ingresa el año de publicación'));
            return this.anio < (2024 - 10);
        }
    }
    let estado = libro.antiguedad() ? 'antiguo' : 'reciente';
    console.log(`El libro \"${libro.titulo}\" es ${estado}`);
}

objLibro();