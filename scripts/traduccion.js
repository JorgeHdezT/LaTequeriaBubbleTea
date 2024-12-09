
  // Objeto con las traducciones
  const translations = {
    es: {
      happyHour: "DISFRUTA DE NUESTRA HAPPY HOUR",
      secondBubble: "TU SEGUNDO BUBBLE TEA",
      discount: "AL 50%",
      thursday: "TODOS LOS JUEVES",
      schedule: "NUESTRO HORARIO",
      monday: "LUN",
      tuesdayFriday: "MAR - VIER",
      saturdaySunday: "SÁB & DOM",
      closed: "CERRADO",
      menu: "NUESTRA CARTA",
      infoTitle: "BIENVENIDO/A A NUESTRA CARTA INTERACTIVA",
      interactiveMenu: "Esta carta interactiva te permite organizar tu pedido de forma rápida y sencilla. <b>Puedes hacer click o tocar en cada opción (tamaño, sirope...) </b>para ver cómo se arma tu <b>ticket virtual</b>",
      reminder: "Recuerda, esta herramienta <b>no sirve para pedidos online</b>, sino solo para ayudarte a decidir y agilizar el proceso cuando pidas en la barra.",
      startOrdering: "¡Haz clic en las opciones para empezar a personalizar tu bubble tea y organizar tu pedido!",
      step1: "PASO 1: ELIGE TAMAÑO",
      step2: "PASO 2: ELIGE BEBIDA",
      step3: "PASO 3: ELIGE SIROPE",
      step4: "PASO 4: ELIGE TOPPING",
      step5: "PASO 5: EXTRA TOPPING",
      showTicket: "MOSTRAR TICKET",
      ticketMethod: "",
      selections: "Tus Selecciones:",
      total: "Total:",
      specialTeas: "PRUEBA NUESTROS Special-Teas",
      experience: "DEGUSTA LA EXPERIENCIA",
      findUs: "ENCUÉNTRANOS",
      copyright: "Copyright © Todos los derechos reservados",
      viewTable: "VIEW TABLE",
    },
    en: {
      happyHour: "ENJOY OUR HAPPY HOUR",
      secondBubble: "YOUR SECOND BUBBLE TEA",
      discount: "AT 50%",
      thursday: "EVERY THURSDAY",
      schedule: "OUR SCHEDULE",
      tuesdayFriday: "TUE - FRI",
      saturdaySunday: "SAT & SUN",
      monday: "MON",
      closed: "CLOSED",
      menu: "OUR MENU",
      infoTitle: "WELCOME TO OUR INTERACTIVE MENU",
      interactiveMenu: "This interactive menu allows you to organize your order quickly and easily. <b>You can click or tap on each option (size, syrup...)</b> to see how your <b>virtual ticket</b> is created.",
      reminder: "Remember, this tool <b>is not for online orders</b>; it’s only to help you decide and speed up the process when ordering at the counter.",
      startOrdering: "Click on the options to start customizing your bubble tea and organizing your order!",
      step1: "STEP 1: CHOOSE SIZE",
      step2: "STEP 2: CHOOSE DRINK",
      step3: "STEP 3: CHOOSE SYRUP",
      step4: "STEP 4: CHOOSE TOPPING",
      step5: "STEP 5: EXTRA TOPPING",
      showTicket: "SHOW TICKET",
      ticketMethod: "Take a screenshot of this and show it at the counter when placing your order.",
      selections: "Your Selections:",
      total: "Total:",
      specialTeas: "TRY OUR",
      experience: "ENJOY THE EXPERIENCE",
      findUs: "FIND US",
      copyright: "Copyright © All rights reserved",
      viewTable: "VIEW TABLE"

    },
  };

  // Función para cambiar el idioma
  function changeLanguage(lang) {
    document.querySelector("#modal h3").textContent = translations[lang].happyHour;
    document.querySelector("#modal #tusegundobubble").textContent = translations[lang].secondBubble;
    document.querySelector("#modal #descuento").textContent = translations[lang].discount;
    document.querySelector("#modal h3:nth-of-type(2)").textContent = translations[lang].thursday;
    document.querySelector(".horario-container .titulo").textContent = translations[lang].schedule;
    document.querySelector(".fila:nth-of-type(1) .dias").textContent = translations[lang].tuesdayFriday;
    document.querySelector(".fila:nth-of-type(2) .dias").textContent = translations[lang].saturdaySunday;
    document.querySelector(".fila:nth-of-type(3) .dias").textContent = translations[lang].monday;
    document.querySelector(".fila:nth-of-type(3) .cerrado").textContent = translations[lang].closed;
    document.querySelector("#tablaPrecios .titulo").textContent = translations[lang].menu;
    document.querySelector("#infoModal h2").innerHTML = translations[lang].infoTitle;
    document.querySelector("#infoModal p:nth-of-type(1)").innerHTML = translations[lang].interactiveMenu;
    document.querySelector("#infoModal p:nth-of-type(2)").innerHTML = translations[lang].reminder;
    document.querySelector("#infoModal p:nth-of-type(3)").innerHTML = translations[lang].startOrdering;
    document.querySelector("#contenedorDetalles details:nth-of-type(1) summary").textContent = translations[lang].step1;
    document.querySelector("#contenedorDetalles details:nth-of-type(2) summary").textContent = translations[lang].step2;
    document.querySelector("#contenedorDetalles details:nth-of-type(3) summary").textContent = translations[lang].step3;
    document.querySelector("#contenedorDetalles details:nth-of-type(4) summary").textContent = translations[lang].step4;
    document.querySelector("#contenedorDetalles details:nth-of-type(5) summary").textContent = translations[lang].step5;
    document.querySelector("#mostrarTicket").textContent = translations[lang].showTicket;
    document.querySelector("#ticket h3").textContent = translations[lang].selections;
    document.querySelector("#ticket i").textContent = translations[lang].ticketMethod;
    document.querySelector("#checkout").textContent = translations[lang].total;
    document.querySelector("#specialTeas h3").textContent = translations[lang].specialTeas;
    document.querySelector("#imagenes .titulo").textContent = translations[lang].experience;
    document.querySelector("#ubicacion .titulo").textContent = translations[lang].findUs;
    document.querySelector("#ubicacion p").textContent = translations[lang].copyright;
    document.querySelector("#specialTeas details summary").textContent = translations[lang].viewTable;
  }

  // Evento para alternar idiomas
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "EN";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    let currentLang = "es";
    toggleButton.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      changeLanguage(currentLang);
      toggleButton.textContent = currentLang.toUpperCase();
    });
  });
