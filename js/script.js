/**
 * Script para manejar la funcionalidad de acordeones interactivos
 * Agrega interactividad a las secciones de la guía de comandos Git
 */
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los encabezados de acordeones
    const accordions = document.querySelectorAll('.accordion-header');

    // Añade un evento de clic a cada acordeón
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            // Alterna la clase 'active' para cambiar el estilo del ícono
            this.classList.toggle('active');
            
            // Selecciona el contenido del acordeón
            const content = this.nextElementSibling;

            // Expande o contrae el contenido del acordeón
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Abre el primer acordeón por defecto al cargar la página
    if (accordions.length > 0) {
        accordions[0].click();
    }
});