// Obtener el modal y el botón
var modal = document.getElementById("infoModal");
var btn = document.getElementById("infoButton");
var span = document.getElementsByClassName("close")[0];

// Abrir el modal cuando el usuario haga clic en el botón
btn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal cuando el usuario haga clic en la "X"
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
