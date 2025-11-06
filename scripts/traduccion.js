// Evento para alternar SVGs y "idiomas"
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const svgContainer = document.getElementById("svgContainer");

  toggleButton.addEventListener("click", () => {

    // Cambiar idioma
    if (currentLang === "es") {
      currentLang = "en";
      // Redirigir a la versión inglesa
      window.location.href = "/language/eng.html";
    } else {
      currentLang = "es";
      // Redirigir a la versión española
      window.location.href = "/index.html";
    }
    //   // Cambia el idioma
  //   currentLang = currentLang === "es" ? "en" : "es";
  //   // Cambiar el contenido del SVG según el idioma
  //   if (currentLang === "es") {
  //     svgContainer.innerHTML = `
  //       <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 473.68 473.68;" xml:space="preserve" width="50" height="50"><g><path style="fill:#29337A;" d="M4.403 10.834c-1.612 2.34 -2.837 4.967 -3.58 7.791h11.372z"/><path style="fill:#29337A;" d="M17.999 1.001a24.911 24.911 0 0 0 -7.897 3.923l7.897 7.897z"/><path style="fill:#29337A;" d="M10.689 45.493a24.869 24.869 0 0 0 7.31 3.506v-10.814z"/><path style="fill:#29337A;" d="M1.11 32.382c0.827 2.678 2.093 5.162 3.712 7.371l7.371 -7.371z"/></g><g><path style="fill:#FFFFFF;" d="M4.815 10.254a25.545 25.545 0 0 0 -0.413 0.581l7.792 7.791H0.823c-0.184 0.701 -0.335 1.416 -0.459 2.141h14.965z"/><path style="fill:#FFFFFF;" d="M10.109 45.08c0.19 0.142 0.386 0.277 0.58 0.413l7.31 -7.309v10.814c0.702 0.205 1.416 0.383 2.141 0.525V35.05z"/><path style="fill:#FFFFFF;" d="M0.554 30.241c0.155 0.725 0.338 1.44 0.555 2.141h11.084l-7.371 7.371a25.165 25.165 0 0 0 2.657 3.074L20.064 30.241z"/><path style="fill:#FFFFFF;" d="M17.999 1.001v11.82l-7.897 -7.897c-1.089 0.81 -2.106 1.708 -3.049 2.681l13.087 13.087V0.476c-0.725 0.143 -1.438 0.321 -2.141 0.525"/></g><g><path style="fill:#D32030;" points="170.511,306.056 169.8,306.771 170.511,306.771 	" d="M17.999 32.306L17.923 32.382L17.999 32.382Z"/><path style="fill:#D32030;" points="190.084,286.487 190.794,286.487 190.794,285.773 	" d="M20.065 30.241L20.14 30.241L20.14 30.165Z"/><path style="fill:#D32030;" points="281.229,196.737 280.545,196.737 280.545,197.425 	" d="M29.686 20.767L29.613 20.767L29.613 20.839Z"/><path style="fill:#D32030;" points="171.21,176.457 170.511,175.754 170.511,176.457 	" d="M18.072 18.626L17.999 18.552L17.999 18.626Z"/><path style="fill:#D32030;" points="190.794,196.037 190.794,196.737 191.494,196.737 	" d="M20.14 20.693L20.14 20.767L20.213 20.767Z"/></g><g><path style="fill:#252F6C;" d="M31.754 43.464v5.604a24.859 24.859 0 0 0 7.411 -3.472l-6.072 -6.072c-0.485 1.705 -0.663 2.586 -1.339 3.941"/><path style="fill:#252F6C;" d="m33.125 11.45 6.629 -6.629a24.901 24.901 0 0 0 -8 -3.89v5.757c0.78 1.561 0.845 2.747 1.371 4.762"/><path style="fill:#252F6C;" d="M45.076 39.899c1.669 -2.246 2.97 -4.781 3.816 -7.517h-11.333z"/><path style="fill:#252F6C;" d="M49.177 18.626c-0.759 -2.884 -2.021 -5.56 -3.684 -7.937l-7.938 7.937z"/></g><g><path style="fill:#E7E7E7;" d="m34.584 30.664 1.718 1.718 8.223 8.223c0.187 -0.234 0.372 -0.467 0.551 -0.706l-7.517 -7.517h11.333c0.216 -0.701 0.399 -1.416 0.554 -2.141H34.745c-0.024 0.304 -0.132 0.122 -0.161 0.423"/><path style="fill:#E7E7E7;" d="m32.865 12.704 7.453 -7.454a25.967 25.967 0 0 0 -0.565 -0.429l-6.629 6.629c0.069 0.262 -0.324 0.985 -0.26 1.254"/><path style="fill:#E7E7E7;" d="M31.754 6.227V0.93a24.911 24.911 0 0 0 -2.141 -0.499v2.584c0.797 0.864 1.511 1.948 2.141 3.212"/><path style="fill:#E7E7E7;" d="M34.416 20.767h15.221c-0.124 -0.725 -0.274 -1.439 -0.459 -2.141H37.556l7.938 -7.937a25.122 25.122 0 0 0 -2.595 -3.135l-8.941 8.94c0.241 1.622 0.349 2.563 0.457 4.273"/><path style="fill:#E7E7E7;" d="m32.732 39.162 6.434 6.435c1.07 -0.737 2.078 -1.557 3.018 -2.448l-8.463 -8.463c-0.27 1.565 -0.591 3.077 -0.989 4.476"/><path style="fill:#E7E7E7;" d="M29.613 46.688v2.88a24.7 24.7 0 0 0 2.141 -0.499v-5.604c-0.631 1.264 -1.345 2.361 -2.141 3.223"/></g><path style="fill:#D71F28;" d="m33.958 16.494 8.94 -8.94a25.017 25.017 0 0 0 -2.58 -2.305l-7.025 7.026c0.312 1.305 0.454 2.799 0.665 4.219"/><g><path style="fill:#D32030;" d="M23.752 0.031"/><path style="fill:#D32030;" d="M25 50c-0.416 0 -0.831 -0.011 -1.247 -0.032q0.62 0.031 1.247 0.032"/><path style="fill:#D32030;" d="M25 50c1.577 0 3.118 -0.153 4.614 -0.433v-2.88c-1.313 1.423 -2.849 3.312 -4.614 3.312"/></g><g><path style="fill:#D71F28;" d="M49.636 20.767H34.613c0.199 3.135 0.175 6.36 -0.072 9.474h14.905a25.08 25.08 0 0 0 0.554 -5.24c0 -1.444 -0.129 -2.856 -0.364 -4.234"/><path style="fill:#D71F28;" d="M34.584 30.664c-0.139 1.477 -0.623 2.628 -0.864 4.022l8.463 8.463a25.228 25.228 0 0 0 2.342 -2.543l-8.223 -8.224z"/></g><path style="fill:#D32030;" d="M29.613 3.201V0.432C28.118 0.153 26.577 0 25 0c1.764 0 3.3 1.778 4.614 3.201"/><g><path style="fill:#29337A;" d="M31.754 44.546c0.676 -1.355 1.256 -2.914 1.742 -4.619l-1.742 -1.742z"/><path style="fill:#29337A;" d="M33.712 10.862c-0.527 -2.015 -1.179 -3.846 -1.958 -5.408v7.365z"/></g><g><path style="fill:#FFFFFF;" d="M35.069 31.149c0.028 -0.302 0.054 -0.604 0.079 -0.908h-0.987z"/><path style="fill:#FFFFFF;" d="M31.754 12.82V5.455c-0.631 -1.264 -1.344 -2.349 -2.141 -3.212v13.712l4.3 -4.3a48.345 48.345 0 0 0 -0.201 -0.793z"/><path style="fill:#FFFFFF;" d="M29.686 20.767h5.534c-0.109 -1.709 -0.281 -3.391 -0.522 -5.012z"/><path style="fill:#FFFFFF;" d="M29.613 47.757c0.797 -0.864 1.51 -1.948 2.141 -3.212v-6.36l1.742 1.742c0.399 -1.4 0.735 -2.896 1.005 -4.461l-4.888 -4.888z"/></g><path style="fill:#E51D35;" d="M29.613 47.757V30.578l4.888 4.888c0.24 -1.394 0.43 -2.839 0.568 -4.317l-0.908 -0.908h0.987c0.247 -3.114 0.271 -6.338 0.072 -9.474h-5.534l5.012 -5.012c-0.211 -1.42 -0.472 -2.794 -0.785 -4.099l-4.299 4.3V2.243C28.3 0.819 26.764 0 25 0c-0.416 0 -0.831 0.011 -1.247 0.031a25.165 25.165 0 0 0 -3.613 0.445v20.217L7.052 7.606a25.228 25.228 0 0 0 -2.237 2.648l8.372 8.372 2.142 2.141H0.364C0.13 22.144 0 23.556 0 25c0 1.798 0.194 3.549 0.554 5.24h19.51L7.478 42.827a25.175 25.175 0 0 0 2.631 2.254l10.03 -10.03v14.473a25.228 25.228 0 0 0 3.613 0.445c0.416 0.02 0.831 0.032 1.247 0.032 1.764 0 3.301 -0.819 4.614 -2.243"/></svg>
  //     `;
  //   } else {
  //     svgContainer.innerHTML = `
  //       <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  //         x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="50" height="50">
  //         <path style="fill:#FFDA44;"
  //           d="M0 25c0 3.058 0.55 5.987 1.555 8.696L25 35.87l23.445 -2.174C49.45 30.987 50 28.058 50 25s-0.55 -5.987 -1.555 -8.696L25 14.13 1.555 16.304C0.55 19.013 0 21.942 0 25" />
  //         <g>
  //           <path style="fill:#D80027;" d="M48.445 16.304C44.913 6.784 35.749 0 25 0S5.087 6.784 1.555 16.304z" />
  //           <path style="fill:#D80027;" d="M1.555 33.696C5.087 43.216 14.251 50 25 50s19.913 -6.784 23.445 -16.304z" />
  //         </g>
  //       </svg>
  //     `;
  //   }

  //   changeLanguage(currentLang);
   });

});

// // Objeto con las traducciones
// const translations = {
//   es: {
//     happyHour: "DISFRUTA DE NUESTRA HAPPY HOUR",
//     secondBubble: "TU SEGUNDO BUBBLE TEA",
//     discount: "AL 50%",
//     thursday: "TODOS LOS JUEVES",
//     schedule: "NUESTRO HORARIO",
//     monday: "LUN",
//     tuesdayFriday: "MAR - VIER",
//     saturdaySunday: "SÁB & DOM",
//     closed: "CERRADO",
//     menu: "NUESTRA CARTA",
//     infoTitle: "BIENVENIDO/A A NUESTRA CARTA INTERACTIVA",
//     interactiveMenu: "Esta carta interactiva te permite organizar tu pedido de forma rápida y sencilla. <b>Puedes hacer click o tocar en cada opción (tamaño, sirope...) </b>para ver cómo se arma tu <b>ticket virtual</b>",
//     reminder: "Recuerda, esta herramienta <b>no sirve para pedidos online</b>, sino solo para ayudarte a decidir y agilizar el proceso cuando pidas en la barra.",
//     startOrdering: "¡Haz clic en las opciones para empezar a personalizar tu bubble tea y organizar tu pedido!",
//     step1: "PASO 1: ELIGE TAMAÑO",
//     ticketTamañoPequeño: "PEQUEÑO 500ML",
//     ticketTamañoGrande: "GRANDE 700ML",
//     step2: "PASO 2: ELIGE BEBIDA",
//     ticketTe: "TÉ",
//     ticketLeche: "LECHE",
//     ticketBebidaJazmin: "Jazmín",
//     ticketLecheEntera: "Entera",
//     ticketBebidaEarlGray: "Earl Grey",
//     ticketLecheSinLactosa: "Sin lactosa",
//     ticketBebidaRojo: "Rojo",
//     ticketLecheSoja: "Soja",
//     ticketBebidaRooibos: "Rooibos (sin teína)",
//     ticketLecheAvena: "Avena",
//     ticketLecheCoco: "Leche con coco",
//     step3: "PASO 3: ELIGE SIROPE",
//     ticketSiropeLimon: "Limón",
//     ticketSiropeMelonDulce: "Melón Dulce",
//     ticketSiropeManzanaVerde: "Manzana Verde",
//     ticketSiropeMaracuya: "Maracuyá",
//     ticketSiropePiña: "Piña",
//     ticketSiropeMango: "Mango",
//     ticketSiropeLichi: "Lichi",
//     ticketSiropeMelocoton: "Melocotón",
//     ticketSiropeFresa: "Fresa",
//     ticketSiropeFrambuesa: "Frambuesa",
//     ticketSiropeSandia: "Sandía",
//     ticketSiropeCereza: "Cereza",
//     ticketSiropeArandanos: "Arándanos",
//     step4: "PASO 4: ELIGE TOPPING",
//     ticketToppingMango: "Mango",
//     ticketToppingArandanos: "Arándanos",
//     ticketToppingCereza: "Cereza",
//     ticketToppingMaracuya: "Maracuyá",
//     ticketToppingGranada: "Granada",
//     ticketToppingManzanaVerde: "Manzana Verde",
//     ticketToppingFresa: "Fresa",
//     ticketToppingMelocoton: "Melocotón",
//     ticketToppingLichi: "Lichi",
//     ticketToppingSandia: "Sandía",
//     ticketToppingMelonDulce: "Melón Dulce",
//     ticketToppingLimon: "Limón",
//     ticketToppingCoco: "Coco",
//     ticketToppingPerlasCristal: "Perlas de Cristal",
//     ticketToppingPerlasBrownSugar: "Perlas Brown Sugar",
//     ticketToppingJellyMango: "Jelly (Mango)",
//     ticketToppingJellyLichi: "Jelly (Lichi)",
//     ticketToppingJellyArcoiris: "Jelly (Arcoiris)",
//     ticketToppingTapiocaNegra: "Tapioca Negra",
//     step5: "PASO 5: EXTRA TOPPING",
//     ticketExtraBolaBomba: "Bola Bomba",
//     ticketExtraPerlasCristal: "Perlas de Cristal",
//     ticketExtraTapiocaNegra: "Tapioca Negra",
//     ticketExtraJelly: "Jelly",
//     ticketExtraEspumaQueso: "Espuma de Queso",
//     showTicket: "MOSTRAR TICKET",
//     ticketMethod: "Saca una captura de esto y muestralo en la barra para hacer tu pedido.",
//     selections: "Tus Selecciones:",
//     total: "Total:",
//     ticketTamaño: "Tamaño: ",  // Español
//     ticketBebida: "Bebida: ",  // Español
//     ticketSirope: "Sirope: ",  // Español
//     ticketTopping: "Topping: ",  // Español
//     ticketExtras: "Extras: ",  // Español
//     specialTeas: "PRUEBA NUESTROS",
//     specialTeasTitle: "SPECIAL-TEAS",
//     viewTable: "VER LA TABLA",
//     drink: "Bebida",
//     ingredients: "Ingredientes",
//     price: "Precio (500ml/700ml)",
//     melonGranizado: "Melóncito (granizado)",
//     cremaMaracuya: "Crema de Maracuyá (granizado)",
//     delBosque: "Del Bosque (granizado)",
//     ponchePolinesia: "Ponche Polinesia (granizado)",
//     pinkLichi: "Pink Lichi (granizado)",
//     missFresa: "Miss Fresa (granizado)",
//     suenoMango: "Sueño de Mango (granizado)",
//     taroCoco: "TARO COCO",
//     matchaLatte: "MATCHA LATTE",
//     brownSugarMilktea: "Brown Sugar Milktea",
//     thaiMilktea: "Thai Milktea",
//     experience: "DEGUSTA LA EXPERIENCIA",
//     findUs: "ENCUÉNTRANOS",
//     copyright: "Copyright © Todos los derechos reservados",
//     viewTable: "VER LA TABLA",
//     showTable: "VER LA TABLA",
//     meloncito: "Melóncito (granizado)",
//     meloncitoIngredientes: "Té jazmín, melón dulce, perlas de cristal, espuma de queso",
//     meloncitoPrecio: "€5.00 / €5.50",
//     cremaMaracuya: "Crema de Maracuyá (granizado)",
//     cremaMaracuyaIngredientes: "Té jazmín, maracuyá, espuma de queso, perlas de cristal",
//     cremaMaracuyaPrecio: "€5.00 / €5.50",
//     delBosque: "Del Bosque (granizado)",
//     delBosqueIngredientes: "Té jazmín, frambuesa, perlas de cristal, espuma de queso",
//     delBosquePrecio: "€5.00 / €5.50",
//     ponchePolinesia: "Ponche Polinesia (granizado)",
//     ponchePolinesiaIngredientes: "Té jazmín, fresa, mango, piña, espuma de queso, perlas de cristal",
//     ponchePolinesiaPrecio: "€5.00 / €5.50",
//     pinkLichi: "Pink Lichi (granizado)",
//     pinkLichiIngredientes: "Té jazmín, lichi, espuma de queso, perlas de cristal",
//     pinkLichiPrecio: "€5.00 / €5.50",
//     missFresa: "Miss Fresa (granizado)",
//     missFresaIngredientes: "Té jazmín, fresa, perlas de cristal, espuma de queso",
//     missFresaPrecio: "€5.00 / €5.50",
//     suenoMango: "Sueño de Mango (granizado)",
//     suenoMangoIngredientes: "Té jazmín, mango, perlas de cristal, espuma de queso",
//     suenoMangoPrecio: "€5.00 / €5.50",
//     taroCoco: "TARO COCO",
//     taroCocoIngredientes: "Taro, leche, coco",
//     taroCocoPrecio: "€4.50 / €5.00",
//     matchaLatte: "MATCHA LATTE",
//     matchaLatteIngredientes: "Matcha leche",
//     matchaLattePrecio: "€5.00 / €5.50",
//     brownSugarMilktea: "Brown Sugar Milktea",
//     brownSugarMilkteaIngredientes: "Té negro con leche, sirope de azúcar morena, tapioca y cheesefoam",
//     brownSugarMilkteaPrecio: "€4.50 / €5.00",
//     thaiMilktea: "Thai Milktea",
//     thaiMilkteaIngredientes: "Té Thai con leche",
//     thaiMilkteaPrecio: "€4.50 / €5.00",
//     followUs: "¡Síguenos en redes!",
//   },
//   en: {
//     happyHour: "ENJOY OUR HAPPY HOUR",
//     secondBubble: "YOUR SECOND BUBBLE TEA",
//     discount: "AT 50%",
//     thursday: "EVERY THURSDAY",
//     schedule: "OUR SCHEDULE",
//     tuesdayFriday: "TUE - FRI",
//     saturdaySunday: "SAT & SUN",
//     monday: "MON",
//     closed: "CLOSED",
//     menu: "OUR MENU",
//     infoTitle: "WELCOME TO OUR INTERACTIVE MENU",
//     interactiveMenu: "This interactive menu allows you to organize your order quickly and easily. <b>You can click or tap on each option (size, syrup...)</b> to see how your <b>virtual ticket</b> is created.",
//     reminder: "Remember, this tool <b>is not for online orders</b>; it’s only to help you decide and speed up the process when ordering at the counter.",
//     startOrdering: "Click on the options to start customizing your bubble tea and organizing your order!",
//     step1: "STEP 1: CHOOSE SIZE",
//     ticketTamañoPequeño: "SMALL 500ML",
//     ticketTamañoGrande: "LARGE 700ML",
//     step2: "STEP 2: CHOOSE DRINK",
//     ticketTe: "TEA",
//     ticketLeche: "MILK",
//     ticketBebidaJazmin: "Jasmine",
//     ticketLecheEntera: "Whole milk",
//     ticketBebidaEarlGray: "Earl Grey",
//     ticketLecheSinLactosa: "Lactose-free",
//     ticketBebidaRojo: "Red",
//     ticketLecheSoja: "Soy Milk",
//     ticketBebidaRooibos: "Rooibos (Without Teiine)",
//     ticketLecheAvena: "OatMilk",
//     ticketLecheCoco: "Milk with coconut",
//     step3: "STEP 3: CHOOSE SYRUP",
//     ticketSiropeLimon: "Lemon",
//     ticketSiropeMelonDulce: "Honeydew Melon",
//     ticketSiropeManzanaVerde: "Green Apple",
//     ticketSiropeMaracuya: "Passion Fruit",
//     ticketSiropePiña: "Pineapple",
//     ticketSiropeMango: "Mango",
//     ticketSiropeLichi: "Lychee",
//     ticketSiropeMelocoton: "Peach",
//     ticketSiropeFresa: "Strawberry",
//     ticketSiropeFrambuesa: "Raspberry",
//     ticketSiropeSandia: "Watermelon",
//     ticketSiropeCereza: "Cherry",
//     ticketSiropeArandanos: "Blueberry",
//     step4: "STEP 4: CHOOSE TOPPING",
//     ticketToppingMango: "Mango",
//     ticketToppingArandanos: "Blueberry",
//     ticketToppingCereza: "Cherry",
//     ticketToppingMaracuya: "Passion Fruit",
//     ticketToppingGranada: "Pomegranate",
//     ticketToppingManzanaVerde: "Green Apple",
//     ticketToppingFresa: "Strawberry",
//     ticketToppingMelocoton: "Peach",
//     ticketToppingLichi: "Lychee",
//     ticketToppingSandia: "Watermelon",
//     ticketToppingMelonDulce: "Honeydew Melon",
//     ticketToppingLimon: "Lemon",
//     ticketToppingCoco: "Coconut",
//     ticketToppingPerlasCristal: "Crystal Pearls",
//     ticketToppingPerlasBrownSugar: "Brown Sugar Pearls",
//     ticketToppingJellyMango: "Jelly (Mango)",
//     ticketToppingJellyLichi: "Jelly (Lychee)",
//     ticketToppingJellyArcoiris: "Jelly (Rainbow)",
//     ticketToppingTapiocaNegra: "Black Tapioca",
//     step5: "STEP 5: EXTRA TOPPING",
//     ticketExtraBolaBomba: "Popping Boba",
//     ticketExtraPerlasCristal: "Crystal Pearls",
//     ticketExtraTapiocaNegra: "Tapioca",
//     ticketExtraJelly: "Jelly",
//     ticketExtraEspumaQueso: "CheeseFoam",
//     showTicket: "SHOW TICKET",
//     ticketMethod: "Take a screenshot of this and show it at the counter when placing your order.",
//     selections: "Your Selections:",
//     total: "Total:",
//     ticketTamaño: "Size: ",  // Inglés
//     ticketBebida: "Drink: ",  // Inglés
//     ticketSirope: "Syrup: ",  // Inglés
//     ticketTopping: "Topping: ",  // Inglés
//     ticketExtras: "Extras: ",  // Inglés
//     specialTeas: "TRY OUR",
//     specialTeasTitle: "SPECIAL-TEAS",
//     viewTable: "VIEW THE TABLE",
//     drink: "Drink",
//     ingredients: "Ingredients",
//     price: "Price (500ml/700ml)",
//     melonGranizado: "Meloncito (Frozen)",
//     cremaMaracuya: "Passionfruit Cream (Frozen)",
//     delBosque: "Del Bosque (Frozen)",
//     ponchePolinesia: "Polynesian Punch (Frozen)",
//     pinkLichi: "Pink Lichi (Frozen)",
//     missFresa: "Miss Strawberry (Frozen)",
//     suenoMango: "Mango Dream (Frozen)",
//     taroCoco: "TARO COCO",
//     matchaLatte: "MATCHA LATTE",
//     brownSugarMilktea: "Brown Sugar Milktea",
//     thaiMilktea: "Thai Milktea",
//     experience: "TASTE THE EXPERIENCE",
//     findUs: "FIND US",
//     copyright: "Copyright © All rights reserved",
//     viewTable: "VIEW TABLE",
//     showTable: "SEE THE TABLE",
//     meloncito: "Melóncito (Slush)",
//     meloncitoIngredientes: "Jasmine tea, Honeydew melon, Crystal pearls, Cheese foam",
//     meloncitoPrecio: "€5.00 / €5.50",
//     cremaMaracuya: "Crema de Maracuyá (Slush)",
//     cremaMaracuyaIngredientes: "Jasmine tea, passion fruit, cheese foam, crystal pearls",
//     cremaMaracuyaPrecio: "€5.00 / €5.50",
//     delBosque: "Del Bosque (Slush)",
//     delBosqueIngredientes: "Jasmine tea, raspberry, crystal pearls, cheese foam",
//     delBosquePrecio: "€5.00 / €5.50",
//     ponchePolinesia: "Ponche Polinesia (Slush)",
//     ponchePolinesiaIngredientes: "Jasmine tea, strawberry, mango, pineapple, cheese foam, crystal pearls",
//     ponchePolinesiaPrecio: "€5.00 / €5.50",
//     pinkLichi: "Pink Lichi (Slush)",
//     pinkLichiIngredientes: "Jasmine tea, lychee, cheese foam, crystal pearls",
//     pinkLichiPrecio: "€5.00 / €5.50",
//     missFresa: "Miss Fresa (Slush)",
//     missFresaIngredientes: "Jasmine tea, strawberry, crystal pearls, cheese foam",
//     missFresaPrecio: "€5.00 / €5.50",
//     suenoMango: "Sueño de Mango (Slush)",
//     suenoMangoIngredientes: "Jasmine tea, mango, crystal pearls, cheese foam",
//     suenoMangoPrecio: "€5.00 / €5.50",
//     taroCoco: "TARO COCO",
//     taroCocoIngredientes: "Taro, milk, coconut",
//     taroCocoPrecio: "€4.50 / €5.00",
//     matchaLatte: "MATCHA LATTE",
//     matchaLatteIngredientes: "Matcha, milk",
//     matchaLattePrecio: "€5.00 / €5.50",
//     brownSugarMilktea: "Brown Sugar Milktea",
//     brownSugarMilkteaIngredientes: "Black tea with milk, brown sugar syrup, tapioca, and cheese foam",
//     brownSugarMilkteaPrecio: "€4.50 / €5.00",
//     thaiMilktea: "Thai Milktea",
//     thaiMilkteaIngredientes: "Thai milk tea",
//     thaiMilkteaPrecio: "€4.50 / €5.00",
//     followUs: "Follow us!",

//   },
// };

// // Función para cambiar el idioma
// function changeLanguage(lang) {
//   document.querySelector("#modal h3").textContent = translations[lang].happyHour;
//   document.querySelector("#modal #tusegundobubble").textContent = translations[lang].secondBubble;
//   document.querySelector("#modal #descuento").textContent = translations[lang].discount;
//   document.querySelector("#modal h3:nth-of-type(2)").textContent = translations[lang].thursday;
//   document.querySelector(".horario-container .titulo").textContent = translations[lang].schedule;
//   document.querySelector(".fila:nth-of-type(1) .dias").textContent = translations[lang].tuesdayFriday;
//   document.querySelector(".fila:nth-of-type(2) .dias").textContent = translations[lang].saturdaySunday;
//   document.querySelector(".fila:nth-of-type(3) .dias").textContent = translations[lang].monday;
//   document.querySelector(".fila:nth-of-type(3) .cerrado").textContent = translations[lang].closed;
//   document.querySelector("#tablaPrecios .titulo").textContent = translations[lang].menu;
//   document.querySelector("#infoModal h2").innerHTML = translations[lang].infoTitle;
//   document.querySelector("#infoModal p:nth-of-type(1)").innerHTML = translations[lang].interactiveMenu;
//   document.querySelector("#infoModal p:nth-of-type(2)").innerHTML = translations[lang].reminder;
//   document.querySelector("#infoModal p:nth-of-type(3)").innerHTML = translations[lang].startOrdering;
//   document.querySelector("#contenedorDetalles details:nth-of-type(1) summary").textContent = translations[lang].step1;
//   document.querySelector("#ticketTamañoPequeño").textContent = translations[lang].ticketTamañoPequeño;
//   document.querySelector("#ticketTamañoGrande").textContent = translations[lang].ticketTamañoGrande;
//   document.querySelector("#ticketTe").textContent = translations[lang].ticketTe;
//   document.querySelector("#ticketLeche").textContent = translations[lang].ticketLeche;
//   document.querySelector("#ticketBebidaJazmin").textContent = translations[lang].ticketBebidaJazmin;
//   document.querySelector("#ticketLecheEntera").textContent = translations[lang].ticketLecheEntera;
//   document.querySelector("#ticketBebidaEarlGray").textContent = translations[lang].ticketBebidaEarlGray;
//   document.querySelector("#ticketLecheSinLactosa").textContent = translations[lang].ticketLecheSinLactosa;
//   document.querySelector("#ticketBebidaRojo").textContent = translations[lang].ticketBebidaRojo;
//   document.querySelector("#ticketLecheSoja").textContent = translations[lang].ticketLecheSoja;
//   document.querySelector("#ticketBebidaRooibos").textContent = translations[lang].ticketBebidaRooibos;
//   document.querySelector("#ticketLecheAvena").textContent = translations[lang].ticketLecheAvena;
//   document.querySelector("#ticketLecheCoco").textContent = translations[lang].ticketLecheCoco;
//   document.querySelector("#ticketSiropeLimon").textContent = translations[lang].ticketSiropeLimon;
//   document.querySelector("#ticketSiropeMelonDulce").textContent = translations[lang].ticketSiropeMelonDulce;
//   document.querySelector("#ticketSiropeManzanaVerde").textContent = translations[lang].ticketSiropeManzanaVerde;
//   document.querySelector("#ticketSiropeMaracuya").textContent = translations[lang].ticketSiropeMaracuya;
//   document.querySelector("#ticketSiropePiña").textContent = translations[lang].ticketSiropePiña;
//   document.querySelector("#ticketSiropeMango").textContent = translations[lang].ticketSiropeMango;
//   document.querySelector("#ticketSiropeLichi").textContent = translations[lang].ticketSiropeLichi;
//   document.querySelector("#ticketSiropeMelocoton").textContent = translations[lang].ticketSiropeMelocoton;
//   document.querySelector("#ticketSiropeFresa").textContent = translations[lang].ticketSiropeFresa;
//   document.querySelector("#ticketSiropeFrambuesa").textContent = translations[lang].ticketSiropeFrambuesa;
//   document.querySelector("#ticketSiropeSandia").textContent = translations[lang].ticketSiropeSandia;
//   document.querySelector("#ticketSiropeCereza").textContent = translations[lang].ticketSiropeCereza;
//   document.querySelector("#ticketToppingMango").textContent = translations[lang].ticketToppingMango;
//   document.querySelector("#ticketToppingArandanos").textContent = translations[lang].ticketToppingArandanos;
//   document.querySelector("#ticketToppingCereza").textContent = translations[lang].ticketToppingCereza;
//   document.querySelector("#ticketToppingMaracuya").textContent = translations[lang].ticketToppingMaracuya;
//   document.querySelector("#ticketToppingGranada").textContent = translations[lang].ticketToppingGranada;
//   document.querySelector("#ticketToppingManzanaVerde").textContent = translations[lang].ticketToppingManzanaVerde;
//   document.querySelector("#ticketToppingFresa").textContent = translations[lang].ticketToppingFresa;
//   document.querySelector("#ticketToppingMelocoton").textContent = translations[lang].ticketToppingMelocoton;
//   document.querySelector("#ticketToppingLichi").textContent = translations[lang].ticketToppingLichi;
//   document.querySelector("#ticketToppingSandia").textContent = translations[lang].ticketToppingSandia;
//   document.querySelector("#ticketToppingMelonDulce").textContent = translations[lang].ticketToppingMelonDulce;
//   document.querySelector("#ticketToppingLimon").textContent = translations[lang].ticketToppingLimon;
//   document.querySelector("#ticketToppingCoco").textContent = translations[lang].ticketToppingCoco;
//   document.querySelector("#ticketToppingPerlasCristal").textContent = translations[lang].ticketToppingPerlasCristal;
//   document.querySelector("#ticketToppingPerlasBrownSugar").textContent = translations[lang].ticketToppingPerlasBrownSugar;
//   document.querySelector("#ticketToppingJellyMango").textContent = translations[lang].ticketToppingJellyMango;
//   document.querySelector("#ticketToppingJellyLichi").textContent = translations[lang].ticketToppingJellyLichi;
//   document.querySelector("#ticketToppingJellyArcoiris").textContent = translations[lang].ticketToppingJellyArcoiris;
//   document.querySelector("#ticketToppingTapiocaNegra").textContent = translations[lang].ticketToppingTapiocaNegra;
//   document.querySelector("#ticketSiropeArandanos").textContent = translations[lang].ticketSiropeArandanos;
//   document.querySelector("#contenedorDetalles details:nth-of-type(2) summary").textContent = translations[lang].step2;
//   document.querySelector("#contenedorDetalles details:nth-of-type(3) summary").textContent = translations[lang].step3;
//   document.querySelector("#contenedorDetalles details:nth-of-type(4) summary").textContent = translations[lang].step4;
//   document.querySelector("#contenedorDetalles details:nth-of-type(5) summary").textContent = translations[lang].step5;
//   document.querySelector("#ticketExtraBolaBomba").textContent = translations[lang].ticketExtraBolaBomba;
//   document.querySelector("#ticketExtraPerlasCristal").textContent = translations[lang].ticketExtraPerlasCristal;
//   document.querySelector("#ticketExtraTapiocaNegra").textContent = translations[lang].ticketExtraTapiocaNegra;
//   document.querySelector("#ticketExtraJelly").textContent = translations[lang].ticketExtraJelly;
//   document.querySelector("#ticketExtraEspumaQueso").textContent = translations[lang].ticketExtraEspumaQueso;
//   document.querySelector("#mostrarTicket").textContent = translations[lang].showTicket;
//   document.querySelector("#ticket h3").textContent = translations[lang].selections;
//   document.querySelector("#ticket i").textContent = translations[lang].ticketMethod;
//   document.querySelector("#checkout").textContent = translations[lang].total;
//   document.querySelector("#ticketTextoTamaño").textContent = translations[lang].ticketTamaño;
//   document.querySelector("#ticketTextoBebida").textContent = translations[lang].ticketBebida;
//   document.querySelector("#ticketTextoSirope").textContent = translations[lang].ticketSirope;
//   document.querySelector("#ticketTextoTopping").textContent = translations[lang].ticketTopping;
//   document.querySelector("#ticketTextoExtras").textContent = translations[lang].ticketExtras;
//   document.querySelector("#specialTeas h3").textContent = translations[lang].specialTeas;
//   document.querySelector("#imagenes .titulo").textContent = translations[lang].experience;
//   document.querySelector("#ubicacion .titulo").textContent = translations[lang].findUs;
//   document.querySelector("footer p").textContent = translations[lang].copyright;


//   // Cambiar los títulos
//   document.querySelector("#specialTeas h3").textContent = translations[lang].specialTeas;
//   document.querySelector("#specialTeas h2").textContent = translations[lang].specialTeasTitle;
//   document.querySelector("#specialTeas details summary").textContent = translations[lang].viewTable;

//   // Cambiar los encabezados de la tabla
//   document.querySelector("#tablaSpecialTeas thead th:nth-of-type(1)").textContent = translations[lang].drink;
//   document.querySelector("#tablaSpecialTeas thead th:nth-of-type(2)").textContent = translations[lang].ingredients;
//   document.querySelector("#tablaSpecialTeas thead th:nth-of-type(3)").textContent = translations[lang].price;

//   // Cambiar las filas de la tabla
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(1) td:nth-of-type(1)").textContent = translations[lang].melonGranizado;
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(2) td:nth-of-type(1)").textContent = translations[lang].cremaMaracuya;
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(3) td:nth-of-type(1)").textContent = translations[lang].delBosque;
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(4) td:nth-of-type(1)").textContent = translations[lang].ponchePolinesia;
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(5) td:nth-of-type(1)").textContent = translations[lang].pinkLichi;
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(6) td:nth-of-type(1)").textContent = translations[lang].missFresa;
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(7) td:nth-of-type(1)").textContent = translations[lang].suenoMango;
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(8) td:nth-of-type(1)").textContent = translations[lang].taroCoco;
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(9) td:nth-of-type(1)").textContent = translations[lang].matchaLatte;
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(10) td:nth-of-type(1)").textContent = translations[lang].brownSugarMilktea;
//   document.querySelector("#tablaSpecialTeas tbody tr:nth-of-type(11) td:nth-of-type(1)").textContent = translations[lang].thaiMilktea;

//   document.querySelector("#footer h3").textContent = translations[lang].followUs;

//   // Fila de Melóncito (granizado)
//   document.querySelector("#ticketMeloncito").textContent = translations[lang].meloncito;
//   document.querySelector("#ticketMeloncitoIngredientes").textContent = translations[lang].meloncitoIngredientes;


//   // Fila de Crema de Maracuyá (granizado)
//   document.querySelector("#ticketCremaMaracuya").textContent = translations[lang].cremaMaracuya;
//   document.querySelector("#ticketCremaMaracuyaIngredientes").textContent = translations[lang].cremaMaracuyaIngredientes;


//   // Fila de Del Bosque (granizado)
//   document.querySelector("#ticketDelBosque").textContent = translations[lang].delBosque;
//   document.querySelector("#ticketDelBosqueIngredientes").textContent = translations[lang].delBosqueIngredientes;


//   // Fila de Ponche Polinesia (granizado)
//   document.querySelector("#ticketPonchePolinesia").textContent = translations[lang].ponchePolinesia;
//   document.querySelector("#ticketPonchePolinesiaIngredientes").textContent = translations[lang].ponchePolinesiaIngredientes;


//   // Fila de Pink Lichi (granizado)
//   document.querySelector("#ticketPinkLichi").textContent = translations[lang].pinkLichi;
//   document.querySelector("#ticketPinkLichiIngredientes").textContent = translations[lang].pinkLichiIngredientes;


//   // Fila de Miss Fresa (granizado)
//   document.querySelector("#ticketMissFresa").textContent = translations[lang].missFresa;
//   document.querySelector("#ticketMissFresaIngredientes").textContent = translations[lang].missFresaIngredientes;


//   // Fila de Sueño de Mango (granizado)
//   document.querySelector("#ticketSuenoMango").textContent = translations[lang].suenoMango;
//   document.querySelector("#ticketSuenoMangoIngredientes").textContent = translations[lang].suenoMangoIngredientes;


//   // Fila de TARO COCO
//   document.querySelector("#ticketTaroCoco").textContent = translations[lang].taroCoco;
//   document.querySelector("#ticketTaroCocoIngredientes").textContent = translations[lang].taroCocoIngredientes;


//   // Fila de MATCHA LATTE
//   document.querySelector("#ticketMatchaLatte").textContent = translations[lang].matchaLatte;
//   document.querySelector("#ticketMatchaLatteIngredientes").textContent = translations[lang].matchaLatteIngredientes;


//   // Fila de Brown Sugar Milktea
//   document.querySelector("#ticketBrownSugarMilktea").textContent = translations[lang].brownSugarMilktea;
//   document.querySelector("#ticketBrownSugarMilkteaIngredientes").textContent = translations[lang].brownSugarMilkteaIngredientes;


//   // Fila de Thai Milktea
//   document.querySelector("#ticketThaiMilktea").textContent = translations[lang].thaiMilktea;
//   document.querySelector("#ticketThaiMilkteaIngredientes").textContent = translations[lang].thaiMilkteaIngredientes;



// }



//--------------------  

