// Inicializamos un objeto para almacenar el ticket del usuario
let ticket = {
  tamaño: null,
  bebida: null,
  sirope: null,
  extras: [], // Nuevo campo para los extras
  topping: null, // Solo un topping puede ser seleccionado
};

// Función para registrar la selección de tamaño
const seleccionarTamaño = (e) => {
  resetearResaltado('.opcion-tamaño');

  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  e.target.style.color = 'white';

  const tamañoSeleccionado = e.target.getAttribute('data-tamaño');
  const precioSeleccionado = parseFloat(e.target.nextElementSibling.getAttribute('data-precio')); // Precio como número
  ticket.tamaño = { tamaño: tamañoSeleccionado, precio: precioSeleccionado };

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
  resetearResaltado('.opcion-sirope');

  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

  const siropeSeleccionado = e.target.getAttribute('data-sirope');
  ticket.sirope = siropeSeleccionado;

  mostrarTicket();
};

// Función para registrar la selección de un topping
const seleccionarTopping = (e) => {
  const toppingSeleccionado = e.target.getAttribute('data-topping');

  // Si ya hay un topping seleccionado, lo deseleccionamos
  if (ticket.topping === toppingSeleccionado) {
    ticket.topping = null; // Deseleccionamos el topping
    e.target.style.backgroundColor = ''; // Quitar resaltado
  } else {
    ticket.topping = toppingSeleccionado; // Seleccionamos el nuevo topping
    resetearResaltado('.opcion-topping'); // Limpiamos el resaltado en todas las opciones
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // Resaltamos el nuevo topping
  }

  mostrarTicket(); // Actualizar el ticket
};

// Función para registrar la selección de un extra
const seleccionarExtra = (e) => {
  const extraSeleccionado = e.target.getAttribute('data-topping');

  // Encontrar el precio correspondiente al extra
  const precioCelda = e.target.parentElement.querySelector('.opcion-extra-precio');
  const precioExtra = parseFloat(precioCelda.textContent); // Obtener precio como número

  // Verificar si el extra ya está en el ticket
  const index = ticket.extras.findIndex(extra => extra.topping === extraSeleccionado);

  if (index !== -1) {
    // Si ya está seleccionado, lo deseleccionamos
    ticket.extras.splice(index, 1); // Eliminar del array
    e.target.style.backgroundColor = ''; // Quitar resaltado
  } else {
    // Si no está seleccionado, lo añadimos
    ticket.extras.push({ topping: extraSeleccionado, precio: precioExtra });
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // Resaltar
  }

  mostrarTicket(); // Actualizar el ticket
};

// Función para mostrar el ticket actualizado
const mostrarTicket = () => {
  const ticketTamaño = document.querySelector("#ticketTamaño");
  const ticketBebida = document.querySelector("#ticketBebida");
  const ticketSirope = document.querySelector("#ticketSirope");
  const ticketExtras = document.querySelector("#ticketExtras"); // Nueva sección para los extras
  const ticketTopping = document.querySelector("#ticketTopping"); // Sección para el topping
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
  if (ticket.extras.length > 0) {
    // Mostrar todos los extras seleccionados, uno debajo del otro
    ticketExtras.innerHTML = ticket.extras
      .map((extra) => `${extra.topping} (${extra.precio}€)`)
      .join('<br>'); // Usamos <br> para separar cada extra en una nueva línea
  } else {
    ticketExtras.innerHTML = "Sin extras";
  }
  if (ticket.topping) {
    ticketTopping.textContent = `${ticket.topping}`;
  } else {
    ticketTopping.textContent = "Sin topping";
  }

  // Calcular el total
  let total = ticket.tamaño ? ticket.tamaño.precio : 0;
  ticket.extras.forEach((extra) => {
    total += extra.precio;
  });
  // No sumamos el topping, ya que no tiene precio asociado por defecto

  totalPedido.textContent = `Total: ${total.toFixed(2)}€`;
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
const opcionesSirope = document.querySelectorAll('.opcion-sirope');
opcionesSirope.forEach((opcion) => {
  opcion.addEventListener('click', seleccionarSirope);
});

// Añadir event listeners a las opciones de topping (solo uno)
const opcionesTopping = document.querySelectorAll('.opcion-topping');
opcionesTopping.forEach((opcion) => {
  opcion.addEventListener('click', seleccionarTopping);
});

// Añadir event listeners a las opciones de extra (varios posibles)
const opcionesExtra = document.querySelectorAll('.opcion-extra');
opcionesExtra.forEach((opcion) => {
  opcion.addEventListener('click', seleccionarExtra);
});
