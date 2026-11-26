/* La Téquería Bubble Tea — main.js
   Un único script (defer). Cada bloque se activa solo si existen sus elementos.
   1. Año del copyright   2. Menú móvil   3. Cabecera y scroll-spy
   4. Animaciones de scroll   5. "Crea tu bubble tea" interactivo */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* 1. Año ------------------------------------------------------------- */
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  /* 2. Menú móvil ------------------------------------------------------ */
  const burger = $("#hamburger");
  const nav = $("#fullScreenMenu");
  if (burger && nav) {
    const setMenu = (open) => {
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? burger.dataset.close : burger.dataset.open);
      nav.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
    };
    burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("click", (e) => e.target.closest("a") && setMenu(false));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setMenu(false);
        burger.focus();
      }
    });
    matchMedia("(min-width: 768px)").addEventListener("change", (e) => e.matches && setMenu(false));
  }

  /* 3. Sombra de cabecera y enlace activo ------------------------------ */
  const header = $(".navbar");
  if (header) {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        header.classList.toggle("scrolled", scrollY > 8);
        ticking = false;
      });
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  const spyLinks = $$('.nav-desktop a[href^="#"]');
  if (spyLinks.length && "IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          spyLinks.forEach((a) => {
            if (a.getAttribute("href") === "#" + en.target.id) a.setAttribute("aria-current", "location");
            else a.removeAttribute("aria-current");
          });
        }),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    $$("#promociones, #recompensas, #bubble-menu, #special-teas, #encuentranos").forEach((s) => spy.observe(s));
  }

  /* 4. Animaciones de scroll ------------------------------------------- */
  // Navegadores sin animation-timeline: las piezas .sd-* usan el revelado normal.
  if (!(window.CSS && CSS.supports("animation-timeline", "view()"))) {
    $$(".sd-left, .sd-right, .sd-pop").forEach((n) => n.classList.add("reveal"));
  }
  const reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );
    reveals.forEach((n) => io.observe(n));
  } else {
    reveals.forEach((n) => n.classList.add("in"));
  }

  /* 5. Crea tu bubble tea ---------------------------------------------- */
  const root = $("#builder");
  if (!root) return;
  const t = root.dataset; // textos traducibles (data-*) para ES / EN
  const order = $("#order");
  const linesEl = $("#order-lines");
  const totalEl = $("#order-total");
  const copyBtn = $("#order-copy");
  const status = $("#order-status");
  const liquid = $("#cup-liquid");
  const foam = $("#cup-foam");
  const pearls = $("#cup-pearls");
  const steps = $$("details[data-step]", root);
  const milkSet = $("#milk-set");
  const fmt = (n) => n.toFixed(2).replace(".", t.decimal) + "€";
  const checked = (name) => $(`input[name="${name}"]:checked`, root);
  const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const mix = (a, b, k) => {
    const x = hex(a);
    const y = hex(b);
    return "#" + x.map((v, i) => Math.round(v + (y[i] - v) * k).toString(16).padStart(2, "0")).join("");
  };

  function update(animate) {
    const size = checked("size");
    const drink = checked("drink");
    const cold = !!(drink && "cold" in drink.dataset);
    if (milkSet) {
      milkSet.disabled = cold;
      if (cold) $('input[name="milk"][value=""]', root).checked = true;
    }
    const milk = checked("milk");
    const syrup = checked("syrup");
    const top = checked("topping");
    const extras = $$('input[name="extra"]:checked', root);

    // Lista del pedido
    const lines = [size.dataset.label];
    if (drink) lines.push(drink.dataset.label);
    if (milk && milk.value) lines.push(`${t.milkLabel}: ${milk.dataset.label}`);
    if (syrup && syrup.value) lines.push(`${t.syrupLabel}: ${syrup.dataset.label}`);
    if (top && top.value) lines.push(`${t.toppingLabel}: ${top.dataset.label}`);
    extras.forEach((x) => lines.push("+ " + x.dataset.label));
    linesEl.innerHTML = lines.map((l) => `<li></li>`).join("") + (drink ? "" : `<li class="hint-line"></li>`);
    $$("li", linesEl).forEach((li, i) => (li.textContent = i < lines.length ? lines[i] : t.hint));

    const total = Number(size.dataset.price) + extras.reduce((s, x) => s + Number(x.dataset.price), 0);
    totalEl.textContent = fmt(total);

    // Resumen en cada paso del acordeón
    const sel = {
      size: size.dataset.label,
      drink: drink ? drink.dataset.label + (milk && milk.value ? " + " + milk.dataset.label : "") : "",
      syrup: syrup && syrup.value ? syrup.dataset.label : "",
      topping: top && top.value ? top.dataset.label : "",
      extra: extras.map((x) => x.dataset.label).join(", "),
    };
    steps.forEach((d) => {
      const v = sel[d.dataset.step];
      $(".sel", d).textContent = v;
      d.classList.toggle("done", !!v);
    });

    // Vaso: color del líquido, espuma y perlas
    let color = drink ? drink.dataset.color : "#e6d5f7";
    if (syrup && syrup.value) color = mix(color, syrup.dataset.color, 0.65);
    if (milk && milk.value) color = mix(color, "#fbf1e4", 0.45);
    liquid.style.fill = color;
    foam.style.opacity = extras.some((x) => "foam" in x.dataset) ? 1 : 0;
    const pearlSrc = (top && top.value && top) || extras.find((x) => x.dataset.color);
    pearls.style.opacity = pearlSrc ? 1 : 0;
    if (pearlSrc) $$("circle", pearls).forEach((c) => (c.style.fill = pearlSrc.dataset.color));

    if (animate) {
      order.classList.remove("bump");
      void order.offsetWidth;
      order.classList.add("bump");
    }
    return { lines: lines.slice(), total };
  }

  function openNext(current) {
    const i = steps.indexOf(current);
    const next = steps[i + 1];
    if (!next) return;
    current.open = false;
    next.open = true;
    setTimeout(() => next.scrollIntoView({ block: "nearest", behavior: "smooth" }), 120);
  }

  root.addEventListener("change", () => update(true));
  root.addEventListener("click", (e) => {
    const input = e.target;
    if (!(input instanceof HTMLInputElement) || input.type !== "radio") return;
    const step = input.closest("details[data-step]");
    if (!step) return;
    const name = input.name;
    // Avanza automáticamente: tamaño, sirope y topping; en bebida, al elegir leche o Cold Brew
    if (name === "size" || name === "syrup" || name === "topping" || name === "milk" || "cold" in input.dataset) {
      openNext(step);
    }
  });

  $("#order-reset").addEventListener("click", () => {
    $$("input", root).forEach((i) => (i.checked = i.defaultChecked));
    steps.forEach((d, i) => (d.open = i === 0));
    update(true);
  });

  copyBtn.addEventListener("click", async () => {
    const { lines, total } = update(false);
    const text = `${t.intro} ${lines.join(", ")}. ${t.totalLabel}: ${fmt(total)}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    const original = copyBtn.textContent;
    copyBtn.textContent = t.copied;
    status.textContent = t.copied;
    setTimeout(() => {
      copyBtn.textContent = original;
      status.textContent = "";
    }, 1800);
  });

  update(false);
})();
