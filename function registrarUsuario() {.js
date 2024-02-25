function registrarUsuario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;

    // Aquí deberías enviar esta información a tu servidor para insertarla en la base de datos.
    // Puedes utilizar AJAX o fetch para hacer una solicitud al servidor.

    // Ejemplo usando fetch:
    fetch('/api/registrar-usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre: nombre, correo: correo }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registro exitoso:', data);
        alert('Registro exitoso');
    })
    .catch((error) => {
        console.error('Error al registrar usuario:', error);
        alert('Error al registrar usuario');
    });
}
