// Función para manejar el evento de envío del formulario
document.getElementById('comentariosForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener el nombre y comentario del formulario
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    // Crear objeto para almacenar el comentario
    const nuevoComentario = {
        nombre: nombre,
        comentario: comentario
    };

    // Obtener los comentarios almacenados en localStorage
    let comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];

    // Añadir el nuevo comentario a la lista
    comentariosGuardados.push(nuevoComentario);

    // Guardar la lista actualizada de comentarios en localStorage
    localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));

    // Actualizar la lista de comentarios mostrada en la página
    mostrarComentarios();

    // Limpiar el formulario después de enviar
    document.getElementById('comentariosForm').reset();
});

// Función para mostrar los comentarios guardados en la página
function mostrarComentarios() {
    const listaComentarios = document.getElementById('lista-comentarios');
    listaComentarios.innerHTML = ''; // Limpiar la lista de comentarios

    // Obtener los comentarios almacenados en localStorage
    let comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];

    // Añadir cada comentario a la página
    comentariosGuardados.forEach(comentario => {
        const nuevoComentario = document.createElement('div');
        nuevoComentario.innerHTML = `<strong>${comentario.nombre}:</strong> <p>${comentario.comentario}</p><hr>`;
        listaComentarios.appendChild(nuevoComentario);
    });
}

// Mostrar los comentarios al cargar la página
document.addEventListener('DOMContentLoaded', mostrarComentarios);

