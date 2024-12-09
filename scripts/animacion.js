window.onload = function () {
  setTimeout(() => {
    const modal = document.getElementById('modal');

    // Verifica que el modal exista
    if (modal) {
      
      // Añade la clase 'hidden' para hacer la transición de opacidad
      modal.classList.add('hidden');

      // Después de la transición de opacidad, cambiamos el display a 'none'
      modal.addEventListener('transitionend', () => {
        modal.style.display = 'none'; // Ahora ocultamos completamente el modal
      });
    }
  }, 5000); // Tiempo inicial antes de ocultar (5 segundos)
};