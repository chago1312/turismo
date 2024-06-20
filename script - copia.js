// Aquí podrías añadir scripts de interactividad, validación de formularios, etc.
// Por ejemplo:

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí podrías añadir la lógica para enviar el formulario, por ejemplo mediante AJAX.
    // Este es solo un ejemplo básico de prevención del envío por defecto del formulario.
});




// Agrega un listener a todas las imágenes dentro de la galería
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        this.classList.toggle('zoomed');
    });
});
