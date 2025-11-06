// Initialize ticket object
let ticket = {
  tamaño: null,
  bebida: null,
  sirope: null,
  extras: [], // Multiple extras allowed
  topping: null, // Only one topping can be selected
};

// Function: select size
const seleccionarTamaño = (e) => {
  resetearResaltado('.opcion-tamaño');

  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  e.target.style.color = 'white';

  const tamañoSeleccionado = e.target.getAttribute('data-tamaño');
  const precioSeleccionado = parseFloat(e.target.nextElementSibling.getAttribute('data-precio'));
  ticket.tamaño = { tamaño: tamañoSeleccionado, precio: precioSeleccionado };

  mostrarTicket();
};

// Function: select drink
const seleccionarBebida = (e) => {
  resetearResaltado('.opcion-bebida');

  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  e.target.style.color = 'white';

  const bebidaSeleccionada = e.target.getAttribute('data-bebida');
  if (
    bebidaSeleccionada === "Whole" ||
    bebidaSeleccionada === "Lactose-free" ||
    bebidaSeleccionada === "Soy" ||
    bebidaSeleccionada === "Oat"
  ) {
    ticket.bebida = "Milk " + bebidaSeleccionada;
  } else if (
    bebidaSeleccionada === "Jasmine" ||
    bebidaSeleccionada === "Earl Grey" ||
    bebidaSeleccionada === "Red" ||
    bebidaSeleccionada === "Rooibos"
  ) {
    ticket.bebida = "Tea " + bebidaSeleccionada;
  } else {
    ticket.bebida = bebidaSeleccionada;
  }

  mostrarTicket();
};

// Function: select syrup
const seleccionarSirope = (e) => {
  resetearResaltado('.opcion-sirope');

  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';

  const siropeSeleccionado = e.target.getAttribute('data-sirope');
  ticket.sirope = siropeSeleccionado;

  mostrarTicket();
};

// Function: select topping (only one)
const seleccionarTopping = (e) => {
  const toppingSeleccionado = e.target.getAttribute('data-topping');

  if (ticket.topping === toppingSeleccionado) {
    ticket.topping = null;
    e.target.style.backgroundColor = '';
  } else {
    ticket.topping = toppingSeleccionado;
    resetearResaltado('.opcion-topping');
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  }

  mostrarTicket();
};

// Function: select extras (multiple)
const seleccionarExtra = (e) => {
  const extraSeleccionado = e.target.getAttribute('data-topping');
  const precioCelda = e.target.parentElement.querySelector('.opcion-extra-precio');
  const precioExtra = parseFloat(precioCelda.textContent);

  const index = ticket.extras.findIndex(extra => extra.topping === extraSeleccionado);

  if (index !== -1) {
    ticket.extras.splice(index, 1);
    e.target.style.backgroundColor = '';
  } else {
    ticket.extras.push({ topping: extraSeleccionado, precio: precioExtra });
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
  }

  mostrarTicket();
};

// Function: show updated ticket (in English)
const mostrarTicket = () => {
  const ticketTamaño = document.querySelector("#ticketTamaño");
  const ticketBebida = document.querySelector("#ticketBebida");
  const ticketSirope = document.querySelector("#ticketSirope");
  const ticketExtras = document.querySelector("#ticketExtras");
  const ticketTopping = document.querySelector("#ticketTopping");
  const totalPedido = document.querySelector("#checkout");

  if (ticket.tamaño) ticketTamaño.textContent = `${ticket.tamaño.tamaño}`;
  if (ticket.bebida) ticketBebida.textContent = ticket.bebida;
  if (ticket.sirope) ticketSirope.textContent = ticket.sirope;

  if (ticket.extras.length > 0) {
    ticketExtras.innerHTML = ticket.extras
      .map((extra) => `${extra.topping} (${extra.precio}€)`)
      .join('<br>');
  } else {
    ticketExtras.innerHTML = "No extras";
  }

  if (ticket.topping) {
    ticketTopping.textContent = `${ticket.topping}`;
  } else {
    ticketTopping.textContent = "No topping";
  }

  // Calculate total
  let total = ticket.tamaño ? ticket.tamaño.precio : 0;
  ticket.extras.forEach((extra) => (total += extra.precio));

  totalPedido.textContent = `Total: ${total.toFixed(2)}€`;
};

// Show / hide ticket
function showTicket() {
  const divTicket = document.querySelector("#ticket");
  divTicket.style.display = "flex";
}
function hideTicket() {
  const divTicket = document.querySelector("#ticket");
  divTicket.style.display = "none";
}

// Reset highlights
const resetearResaltado = (selector) => {
  document.querySelectorAll(selector).forEach((opcion) => {
    opcion.style.backgroundColor = '';
  });
};

// Event listeners
document.querySelectorAll('.opcion-tamaño').forEach(el => el.addEventListener('click', seleccionarTamaño));
document.querySelectorAll('.opcion-bebida').forEach(el => el.addEventListener('click', seleccionarBebida));
document.querySelectorAll('.opcion-sirope').forEach(el => el.addEventListener('click', seleccionarSirope));
document.querySelectorAll('.opcion-topping').forEach(el => el.addEventListener('click', seleccionarTopping));
document.querySelectorAll('.opcion-extra').forEach(el => el.addEventListener('click', seleccionarExtra));
