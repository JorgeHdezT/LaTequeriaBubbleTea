// Inicializamos un objeto para almacenar el ticket del usuario
let ticket = {
  tamaño: null,
  bebida: null,
  sirope: null, // Nuevo campo para el sirope
};

// Función para registrar la selección de tamaño
const seleccionarTamaño = (e) => {
  resetearResaltado('.opcion-tamaño');

  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  e.target.style.color = 'white';

  const tamañoSeleccionado = e.target.getAttribute('data-tamaño');
  const precioSeleccionado = e.target.nextElementSibling.getAttribute('data-precio'); // Precio de la misma fila
  ticket.tamaño = { tamaño: tamañoSeleccionado, precio: `${precioSeleccionado}€` };

  mostrarTicket();
};

// Función para registrar la selección de bebida
const seleccionarBebida = (e) => {
  resetearResaltado('.opcion-bebida');

  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  e.target.style.color = 'white';

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
    bebidaSeleccionada === "Earl Grey" ||
    bebidaSeleccionada === "Rojo" ||
    bebidaSeleccionada === "Rooibos"
  ) {
    ticket.bebida = "Té " + bebidaSeleccionada;
  } else {
    ticket.bebida = bebidaSeleccionada;
  }

  mostrarTicket();
};

// Nueva función para registrar la selección de sirope
const seleccionarSirope = (e) => {
  resetearResaltado('.opcion-sirope'); // Nuevo selector para sirope

  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

  const siropeSeleccionado = e.target.getAttribute('data-sirope'); // Usamos el atributo "data-sirope"
  ticket.sirope = siropeSeleccionado;

  mostrarTicket();
};

// Función para registrar la selección del topping
const seleccionarTopping = (e) => {
  resetearResaltado('.opcion-topping');
  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

  const toppingSeleccionado = e.target.getAttribute('data-topping');
  ticket.topping = toppingSeleccionado;

  mostrarTicket();
};

// Función para mostrar el ticket actualizado
const mostrarTicket = () => {
  const ticketTamaño = document.querySelector("#ticketTamaño");
  const ticketBebida = document.querySelector("#ticketBebida");
  const ticketSirope = document.querySelector("#ticketSirope"); // Nueva sección del ticket
  const ticketTopping = document.querySelector("#ticketTopping"); // Nueva sección del ticket
  const totalPedido = document.querySelector("#checkout");

  if (ticket.tamaño) {
    ticketTamaño.textContent = `${ticket.tamaño.tamaño}`;
  }
  if (ticket.bebida) {
    ticketBebida.textContent = ticket.bebida;
  }
  if (ticket.sirope) {
    ticketSirope.textContent = ticket.sirope;
  }
  if (ticket.topping) {
    ticketTopping.textContent = ticket.topping;
  }
  if (totalPedido) {
    totalPedido.textContent = "Total: " + ticket.tamaño.precio;
  }
};

// Mostrar el ticket
function showTicket() {
  const divTicket = document.querySelector("#ticket");
  divTicket.style.display = "flex";
}

// Ocultar el ticket
function hideTicket() {
  const divTicket = document.querySelector("#ticket");
  divTicket.style.display = "none";
}

// Función para eliminar el resaltado de los elementos
const resetearResaltado = (selector) => {
  const opciones = document.querySelectorAll(selector);
  opciones.forEach((opcion) => {
    opcion.style.backgroundColor = ''; 

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

// Añadir event listeners a las opciones de sirope
const opcionesSirope = document.querySelectorAll('.opcion-sirope'); // Corregido para usar la clase correcta
opcionesSirope.forEach((opcion) => {
  opcion.addEventListener('click', seleccionarSirope);
});

// Añadir event listeners a las opciones de topping
const opcionesTopping = document.querySelectorAll('.opcion-topping');
opcionesTopping.forEach((opcion) => {
  opcion.addEventListener('click', seleccionarTopping);
});

