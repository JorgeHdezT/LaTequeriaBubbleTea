const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("cookie-accept");
const denyBtn = document.getElementById("cookie-deny");

if (localStorage.getItem("cookieConsent") === null) {
  banner.classList.remove("hidden");
  alert("no hay cookies");
}

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  banner.classList.add("hidden");
});

denyBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "denied");
  banner.classList.add("hidden");
});