//Ejercicio 1: Formulario que guarda un correo en localStorage
document.addEventListener('DOMContentLoaded', () => {
    const correo = document.getElementById('correo');
    const guardarBoton = document.getElementById('svBtn');
    const borrarBoton = document.getElementById('delBtn');
    const mensajeCorreo = document.getElementById('mensaje');
    const validarCorreo = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const mostrarMensaje = (mensaje) => {
        mensajeCorreo.textContent = mensaje;
        console.log(mensaje);
    }

    guardarBoton.addEventListener('click', (guardado) => {
        guardado.preventDefault();
        const email = correo.value;
        if (email === '') {
            mostrarMensaje('Ingresa un correo')
        } else if (validarCorreo(email)) {
            localStorage.setItem('email', email);
            mostrarMensaje(`${email} guardado`)
        } else {
            mostrarMensaje('Correo no válido, ingresa uno nuevo por favor');
        }
    })

    borrarBoton.addEventListener('click', () => {
        const emailGuardado = localStorage.getItem('email');
        if (emailGuardado) {
            localStorage.removeItem('email');
            mostrarMensaje('Email borrado');
        } else {
            mostrarMensaje('No hay ningún correo guardado');
        }
    })
})