const hamburger = document.getElementById("hamburger");
const fullScreenMenu = document.getElementById("fullScreenMenu");
const headerLogo = document.querySelector(".logo img");

headerLogo.addEventListener("click", () => {
  window.location.href = window.location.origin + "/index.html";
});

// Función única para cerrar el menú de forma limpia
const closeMenu = () => {
  fullScreenMenu.classList.remove("active");
  hamburger.classList.remove("open");
  document.body.style.overflow = "auto";
  fullScreenMenu.style.display = "none"; 
};

hamburger.addEventListener("click", () => {
  fullScreenMenu.classList.toggle("active");
  hamburger.classList.toggle("open");

  if (fullScreenMenu.classList.contains("active")) {
    fullScreenMenu.style.display = "inline-flex";
    document.body.style.overflow = "hidden"; 
  } else {
    closeMenu();
  }
});

const links = document.querySelectorAll(".full-screen-menu a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu(); 
  });
});

//Cookies

const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("cookie-accept");
const denyBtn = document.getElementById("cookie-deny");

if (localStorage.getItem("cookieConsent") === null) {
  banner.classList.remove("hidden");
}

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  banner.classList.add("hidden");
});

denyBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "denied");
  banner.classList.add("hidden");
});
