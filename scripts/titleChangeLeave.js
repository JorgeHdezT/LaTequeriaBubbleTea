// Guardamos el título original
let originalTitle = document.title;

// Detectamos cuando la página pierde y recobra el foco
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Cuando el usuario abandona la página (la pestaña o la ventana se ocultan)
    if (currentLang === "es") {
      document.title = "¡Te olvidas de tu Bubble Tea!";
    } else if (currentLang === "en") {
      document.title = "You forget your Bubble Tea!";
    }
  } else {
    // Cuando el usuario vuelve a la página
    document.title = originalTitle;
  }
});