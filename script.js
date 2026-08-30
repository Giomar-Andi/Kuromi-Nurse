/* =========================================================================
   CONFIG — EDITA SOLO ESTA SECCIÓN CON LA INFORMACIÓN DE TU AMIGA
   No necesitas tocar el resto del archivo para personalizar la página.
   ========================================================================= */
const CONFIG = {
  nombre: "[Nombre]",

  // Frase corta debajo del título principal
  heroSub: "Preparé algo especial para la enfermera más increíble que conozco.",

  // 6 tarjetas volteables — "icon" es un emoji, "label" el título corto,
  // "texto" es lo que aparece al voltear la tarjeta.
  datos: [
    { icon: "🩺", label: "Profesión", texto: "Cuida vidas todos los días con el corazón por delante." },
    { icon: "🎀", label: "Estilo", texto: "Tierna por fuera, con carácter por dentro. Igual que Kuromi." },
    { icon: "🖤", label: "Color favorito", texto: "[Su color favorito]" },
    { icon: "🎶", label: "Canción favorita", texto: "[Su canción favorita]" },
    { icon: "🍰", label: "Antojo favorito", texto: "[Su comida o postre favorito]" },
    { icon: "✨", label: "Superpoder", texto: "Hacer que un mal día se sienta mejor." },
  ],

  // Collage de "fotos" — reemplaza src por la ruta de la imagen real,
  // por ejemplo "fotos/foto1.jpg". Si dejas src vacío se muestra un
  // marco decorativo esperando la imagen. "nota" es el mensajito oculto.
  fotos: [
    { src: "", caption: "Uno", nota: "Ese día me reí muchísimo contigo 🖤" },
    { src: "", caption: "Dos", nota: "Aquí se nota lo increíble que eres." },
    { src: "", caption: "Tres", nota: "[Escribe un recuerdo bonito]" },
    { src: "", caption: "Cuatro", nota: "[Escribe un recuerdo bonito]" },
    { src: "", caption: "Cinco", nota: "[Escribe un recuerdo bonito]" },
    { src: "", caption: "Seis", nota: "Gracias por siempre estar 🎀" },
  ],

  // Lista tipo "ficha clínica" — motivos por los que la admiras
  razones: [
    "Cuidas a tus pacientes como si fueran de tu familia.",
    "Nunca te rindes, ni en los turnos más difíciles.",
    "Tienes el corazón más grande que conozco.",
    "Siempre sacas una sonrisa aunque estés cansada.",
    "Eres la amiga que todos quisieran tener.",
    "[Agrega otro motivo aquí]",
  ],

  // Carta final — puedes usar varios párrafos separados por \n\n
  carta: "Hoy es tu día y quiero que sepas lo mucho que admiro todo lo que haces. " +
         "Gracias por tu entrega, tu paciencia y tu cariño con cada persona que cuidas.\n\n" +
         "[Escribe aquí el resto de tu mensaje para ella]",
  firma: "Con cariño, [Tu nombre] 🖤",

  fecha: "30 de agosto · Día de la Enfermera Peruana",
};

/* =========================================================================
   A partir de aquí no es necesario editar nada — solo lógica de la página
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  aplicarConfig();
  crearDestellos();
  crearTarjetas();
  crearCollage();
  crearFicha();
  configurarSobre();
  configurarScrollSpy();
  configurarMascotaParallax();

  document.getElementById("ctaStart").addEventListener("click", () => {
    document.getElementById("datos").scrollIntoView({ behavior: "smooth" });
  });
});

function aplicarConfig() {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };
  setText("nombreHero", CONFIG.nombre);
  setText("heroSub", CONFIG.heroSub);
  setText("fichaNombre", CONFIG.nombre);
  setText("footerNombre", CONFIG.nombre);
  setText("footerFecha", CONFIG.fecha);
  setText("letterSign", CONFIG.firma);

  const letterEl = document.getElementById("letterText");
  letterEl.innerHTML = "";
  CONFIG.carta.split("\n\n").forEach((parrafo) => {
    const p = document.createElement("p");
    p.textContent = parrafo;
    letterEl.appendChild(p);
  });
}

/* ---------- Fondo de destellos ---------- */
function crearDestellos() {
  const field = document.getElementById("sparkleField");
  const colores = ["", "pink", "gold"];
  const total = window.innerWidth < 600 ? 35 : 60;
  for (let i = 0; i < total; i++) {
    const s = document.createElement("div");
    const size = Math.random() * 3 + 1.5;
    s.className = "sparkle " + colores[Math.floor(Math.random() * colores.length)];
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.animationDelay = Math.random() * 3.5 + "s";
    s.style.animationDuration = 2.5 + Math.random() * 3 + "s";
    field.appendChild(s);
  }
}

/* ---------- Tarjetas volteables ---------- */
function crearTarjetas() {
  const grid = document.getElementById("cardsGrid");
  CONFIG.datos.forEach((dato) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Voltear tarjeta: " + dato.label);
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-face flip-front">
          <span class="flip-icon">${dato.icon}</span>
          <span class="label">${dato.label}</span>
        </div>
        <div class="flip-face flip-back">${dato.texto}</div>
      </div>`;
    const toggle = () => card.classList.toggle("flipped");
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    grid.appendChild(card);
  });
}

/* ---------- Collage de polaroids ---------- */
function crearCollage() {
  const board = document.getElementById("polaroidBoard");
  const angulos = [-6, 4, -3, 7, -8, 3];
  CONFIG.fotos.forEach((foto, i) => {
    const angle = angulos[i % angulos.length];
    const card = document.createElement("div");
    card.className = "polaroid";
    card.style.transform = `rotate(${angle}deg)`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Voltear foto " + (i + 1));

    const fotoContenido = foto.src
      ? `<img src="${foto.src}" alt="${foto.caption}">`
      : `<span>🎀<br>Coloca aquí<br>tu foto</span>`;

    card.innerHTML = `
      <div class="polaroid-inner">
        <div class="polaroid-photo">${fotoContenido}</div>
        <div class="polaroid-note">${foto.nota}</div>
      </div>
      <div class="polaroid-caption">${foto.caption}</div>`;

    const toggle = () => card.classList.toggle("flipped");
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    board.appendChild(card);
  });
}

/* ---------- Ficha / lista tipo clipboard ---------- */
function crearFicha() {
  const list = document.getElementById("chartList");
  CONFIG.razones.forEach((razon) => {
    const li = document.createElement("li");
    li.className = "chart-item";
    li.tabIndex = 0;
    li.setAttribute("role", "checkbox");
    li.setAttribute("aria-checked", "false");
    li.innerHTML = `<span class="chart-check">✓</span><span class="chart-text">${razon}</span>`;
    const toggle = () => {
      const checked = li.classList.toggle("checked");
      li.setAttribute("aria-checked", String(checked));
    };
    li.addEventListener("click", toggle);
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    list.appendChild(li);
  });
}

/* ---------- Sobre / carta final ---------- */
function configurarSobre() {
  const envelope = document.getElementById("envelope");
  const hint = document.getElementById("envelopeHint");
  envelope.addEventListener("click", () => {
    const abierto = envelope.classList.toggle("open");
    if (abierto) {
      hint.textContent = "Con cariño, para ti 🖤";
      lanzarConfeti();
    } else {
      hint.textContent = "Toca el sobre para abrirlo";
    }
  });
}

function lanzarConfeti() {
  const layer = document.getElementById("confettiLayer");
  const simbolos = ["🎀", "🖤", "💜", "✨", "🦇", "⭐"];
  const total = 40;
  for (let i = 0; i < total; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDuration = 2.5 + Math.random() * 2 + "s";
    piece.style.fontSize = 14 + Math.random() * 14 + "px";
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

/* ---------- Puntos de navegación (scroll spy) ---------- */
function configurarScrollSpy() {
  const dots = Array.from(document.querySelectorAll(".dot"));
  const sections = dots.map((d) => document.getElementById(d.dataset.target));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      document.getElementById(dot.dataset.target).scrollIntoView({ behavior: "smooth" });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = sections.indexOf(entry.target);
          dots.forEach((d) => d.classList.remove("active"));
          if (dots[idx]) dots[idx].classList.add("active");
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => s && observer.observe(s));
}

/* ---------- Parallax suave de la mascota ---------- */
function configurarMascotaParallax() {
  const mascot = document.getElementById("mascot");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const mover = (x, y) => {
    const relX = (x / window.innerWidth - 0.5) * 14;
    const relY = (y / window.innerHeight - 0.5) * 10;
    mascot.style.transform = `translate(${relX}px, ${relY}px) rotate(${relX / 4}deg)`;
  };

  window.addEventListener("mousemove", (e) => mover(e.clientX, e.clientY));
  window.addEventListener("touchmove", (e) => {
    if (e.touches[0]) mover(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
}
