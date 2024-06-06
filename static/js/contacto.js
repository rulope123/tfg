document.addEventListener('DOMContentLoaded', function () {
    let mensaje = document.getElementById("contactForm");

    mensaje.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        const usu = localStorage.getItem('usuario');
        console.log('usuario contacto: ',usu);
        const especie = document.getElementById('especie');
        const descripcion = document.getElementById('descripcion');
        const mensaje = document.getElementById('mensaje');

        const response = await fetch('http://localhost:3000/controller/contacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usu: usu, especie: especie.value, descripcion: descripcion.value, mensaje: mensaje.value })
        });

        const result = await response.json();

        alert('Mensaje enviado: ' + result.message);
        especie.value = '';
        descripcion.value = '';
        mensaje.value = '';
    });
});