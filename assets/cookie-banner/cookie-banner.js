/* Banner de cookies (opcional, NO está enlazado en las páginas).
   Para activarlo: enlaza cookie-banner.css, añade el HTML del banner (ver README.md)
   y carga este script con defer. */
(() => {
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;
  const save = (value) => {
    try {
      localStorage.setItem("cookieConsent", value);
    } catch {}
    banner.classList.add("hidden");
  };
  let stored = null;
  try {
    stored = localStorage.getItem("cookieConsent");
  } catch {}
  if (stored === null) banner.classList.remove("hidden");
  document.getElementById("cookie-accept")?.addEventListener("click", () => save("accepted"));
  document.getElementById("cookie-deny")?.addEventListener("click", () => save("denied"));
})();
