// Inicializamos un objeto para almacenar el ticket del usuario
let ticket = {
  tamaño: null,
  bebida: null,
};

// Función para registrar la selección de tamaño
const seleccionarTamaño = (e) => {
  // Eliminar el fondo gris de las selecciones anteriores
  resetearResaltado('.opcion-tamaño');

  // Resaltar el tamaño seleccionado
  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  e.target.style.color = 'white';

  // Guardar el tamaño seleccionado en el ticket
  const tamañoSeleccionado = e.target.getAttribute('data-tamaño');
  const precioSeleccionado = e.target.nextElementSibling.getAttribute('data-precio'); // Precio de la misma fila
  ticket.tamaño = { tamaño: tamañoSeleccionado, precio: `${precioSeleccionado}€` };

  mostrarTicket();
};

// Función para registrar la selección de bebida
const seleccionarBebida = (e) => {
  // Eliminar el fondo gris de las selecciones anteriores
  resetearResaltado('.opcion-bebida');

  // Resaltar la bebida seleccionada
  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  e.target.style.color = 'white';

  // Guardar la bebida seleccionada en el ticket
  const bebidaSeleccionada = e.target.getAttribute('data-bebida');
  if (
    bebidaSeleccionada === "Entera" ||
    bebidaSeleccionada === "Sin lactosa" ||
    bebidaSeleccionada === "Soja" ||
    bebidaSeleccionada === "Avena"
  ) {
    ticket.bebida = "Leche " + bebidaSeleccionada;
  } else if (
    bebidaSeleccionada === "Jazmín" ||
    bebidaSeleccionada === "Earl Gray" ||
    bebidaSeleccionada === "Rojo" ||
    bebidaSeleccionada === "Rooibos"
  ) {
    ticket.bebida = "Té " + bebidaSeleccionada;
  } else {
    ticket.bebida = bebidaSeleccionada;
  }

  mostrarTicket();
};

// Función para mostrar el ticket actualizado
const mostrarTicket = () => {
  const ticketTamaño = document.querySelector("#ticketTamaño");
  const ticketBebida = document.querySelector("#ticketBebida");
  const totalPedido = document.querySelector("#checkout");


  // Actualizar el contenido del ticket
  if (ticket.tamaño) {
    ticketTamaño.textContent = `${ticket.tamaño.tamaño}`;
  }
  if (ticket.bebida) {
    ticketBebida.textContent = ticket.bebida;
  }
  if (totalPedido) {
    totalPedido.textContent = "Total: " + ticket.tamaño.precio;
  }

};

// Mostrar el ticket
function showTicket() {
  const divTicket = document.querySelector("#ticket");
  divTicket.style.display = "flex"; // Cambiar a "flex" para mostrar el ticket
}

// Ocultar el ticket
function hideTicket() {
  const divTicket = document.querySelector("#ticket");
  divTicket.style.display = "none"; // Cambiar a "none" para ocultar el ticket
}

// Función para eliminar el resaltado de los elementos
const resetearResaltado = (selector) => {
  const opciones = document.querySelectorAll(selector);
  opciones.forEach((opcion) => {
    opcion.style.backgroundColor = ''; // Restaurar fondo original
    opcion.style.color = ''; // Restaurar color de texto original
  });
};

// Añadir event listeners a las opciones de tamaño
const opcionesTamaño = document.querySelectorAll('.opcion-tamaño');
opcionesTamaño.forEach((opcion) => {
  opcion.addEventListener('click', seleccionarTamaño);
});

// Añadir event listeners a las opciones de bebida
const opcionesBebida = document.querySelectorAll('.opcion-bebida');
opcionesBebida.forEach((opcion) => {
  opcion.addEventListener('click', seleccionarBebida);
});
