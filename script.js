/* =========================================================================
   CONFIG — EDITA SOLO ESTA SECCIÓN CON LA INFORMACIÓN DE TU AMIGA
   No necesitas tocar el resto del archivo para personalizar la página.
   ========================================================================= */
const CONFIG = {
  nombre: "Jazmin",

  // Frase corta debajo del título principal
  heroSub: "Preparé algo especial para una de las enfermeras más increíbles de este mundo.",

  // 6 tarjetas volteables.
  // "icono" debe ser una de estas claves: stetoscopio, moño, corazon, musica, pastel, estrella
  // "fondo": deja "" para el fondo por defecto, o pon una ruta de imagen (ej: "img/tarjeta1.jpg")
  //          para que esa tarjeta muestre tu foto de fondo en vez del color.
  datos: [
    { icono: "stetoscopio", label: "Profesión", texto: "Demuestras en cada practica que tienes la vocación para ello, mujer de grande corazon y de manos bendecidas.", fondo: "img/Kuromi obstetra.jpg" },
    { icono: "moño", label: "Estilo", texto: "Mujer de mucho carácter, con destellos de ternura y amor, persistente. Igual que Kuromi.", fondo: "img/kuromi study.jpg" },
    { icono: "corazon", label: "Color favorito", texto: "Aun por descubrirlo", fondo: "img/kuromi gamer.jpg" },
    { icono: "musica", label: "Banda favorita", texto: "Queen, Los cafres, Norick, Guerreros del bajo, Canserbero, etc.", fondo: "img/kuromi phone.jpg" },
    { icono: "pastel", label: "Antojo favorito", texto: "Tallarines verdes", fondo: "img/kuromi sleep.jpg" },
    { icono: "estrella", label: "Superpoder", texto: "Realmente me haz demostrado que a pesar de todos los problemas que te afligen, puedes superarlos con tu esfuerzo y voluntad.", fondo: "img/kuromi ninja.jpg" },
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

  // Lista tipo "ficha clínica" — motivos por los que la admiras.
  // Cuando se marcan TODOS, aparece el aviso "PERFIL CLÍNICO PERFECTO".
  razones: [
    "Cuidas a tus pacientes como si fueran de tu familia.",
    "Nunca te rindes, ni en los turnos más difíciles.",
    "Tienes el corazón más grande que conozco.",
    "Siempre sacas una sonrisa aunque estés cansada o triste.",
    "Luchas constantemente contra tus problemas y sales de ellos con firmeza.",
    "Te esfuerzas constantemente por mejorar, jamás te rindes.",
  ],

  // Carta final — puedes usar varios párrafos separados por \n\n
  carta: "Hoy es tu día y quiero que sepas lo mucho que admiro todo lo que haces. " +
         "Gracias por tu entrega, tu paciencia y tu cariño con cada persona que cuidas. " +
         "Es un camino relativamente duro, horas de estudio sin dormir para cumplir un sueño " +
         "muy grande y esperanzador para cada persona que llegue a tus manos, demuestras con amor que " +
         "es un trabajo humanizado que no solo requiere de agallas y mente fría, sino tambien de empatia " +
         "y paciencia. Reconozco tu valor como profesional y admiro la calidad de persona que eres. \n\n" +
         "Dios bendiga enormemente tu camino, bendiga tus manos milagrosas y llene de paz tu corazón. " +
         "Cada día seré duro, unos de mucha alegría, otros de frustración, unos de mucho dolor y pena. " +
         "Conozco tu corazón lo suficiente como para saber que cada una de esas situaciones lo sentirás " +
         "con intensidad, me encantaría acompañarte en los buenos momentos así como en los malos, " +
         "sin embargo se que en tus tristezas hay mucho que no quieras contar, si yo no \n\n" +
         "puedo estar o quiza quieras intentar hacerlo sola rezo por ti para que Dios te acompañe en esos momentos y te de la fuerza para \n\n" +
         "superarte cada día, como siempre lo haces. \n\n" +
         "Con paciencia, porque Dios te recompensará todo enormemente, el te mira, te escucha, reconoce tu esfuerzo, mucho animooooooo. \n\n" +
         "Dios te bendiga siempre y cuide a tu familia y amigos. AMÉN.", 
  firma: "Con cariño, Andi 🖤 Numeros 6:24-26",

  fecha: "30 de agosto · Feliz día de la enfermera Peruana.",
};

/* =========================================================================
   ÍCONOS — estilo lineal, serio y minimalista (tipo favicon), no emojis
   ========================================================================= */
const ICONOS = {
  stetoscopio: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v7a4 4 0 0 0 8 0V3"/><path d="M11 14v3a6 6 0 0 0 12 0v-2"/><circle cx="23" cy="13" r="2.1"/><circle cx="7" cy="3" r="1.3"/><circle cx="15" cy="3" r="1.3"/></svg>',
  "moño": '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M14 14 L4 7 Q2 14 4 21 Z"/><path d="M14 14 L24 7 Q26 14 24 21 Z"/><circle cx="14" cy="14" r="2.1" fill="currentColor" stroke="none"/></svg>',
  corazon: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M14 23C6 17 2 12.5 2 8.5A5.5 5.5 0 0 1 14 6.5 5.5 5.5 0 0 1 26 8.5C26 12.5 22 17 14 23Z"/></svg>',
  musica: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20V6l12-2v14"/><circle cx="8" cy="21" r="3"/><circle cx="20" cy="18" r="3"/></svg>',
  pastel: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 24h20v-6a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4Z"/><path d="M4 18h20"/><path d="M14 14V8"/><path d="M14 8c-1.4 0-1.9-1.4-.9-2.4S14 3 14 3s1 1.6 1 2.6-.6 2.4-1 2.4Z"/></svg>',
  estrella: '<svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M14 3 16.5 11 25 14 16.5 17 14 25 11.5 17 3 14 11.5 11Z"/></svg>',
};

/* =========================================================================
   A partir de aquí no es necesario editar nada — solo lógica de la página
   ========================================================================= */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

/* ---------- Tarjetas volteables (con ícono serio y fondo opcional) ---------- */
function crearTarjetas() {
  const grid = document.getElementById("cardsGrid");
  CONFIG.datos.forEach((dato, i) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.style.animationDelay = (i * 0.3) + "s";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", "Voltear tarjeta: " + dato.label);

    const tieneFondo = dato.fondo && dato.fondo.trim() !== "";
    const iconoSvg = ICONOS[dato.icono] || ICONOS.estrella;

    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-face flip-front${tieneFondo ? " has-bg" : ""}"${tieneFondo ? ` style="background-image:url('${dato.fondo}')"` : ""}>
          <div class="flip-content">
            <span class="icon-badge">${iconoSvg}</span>
            <span class="label">${dato.label}</span>
          </div>
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
      : `<span>Coloca aquí<br>tu foto</span>`;

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
  const items = [];

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
      verificarFichaCompleta(items);
    };
    li.addEventListener("click", toggle);
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    list.appendChild(li);
    items.push(li);
  });
}

function verificarFichaCompleta(items) {
  const todasMarcadas = items.every((li) => li.classList.contains("checked"));
  if (todasMarcadas) {
    mostrarToastClinico();
  }
}

function mostrarToastClinico() {
  const toast = document.getElementById("clinicalToast");
  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove("show"), 3200);
}

/* ---------- Sobre / carta final ---------- */
let cartaEscrita = false;

function configurarSobre() {
  const envelope = document.getElementById("envelope");
  const hint = document.getElementById("envelopeHint");
  const closeBtn = document.getElementById("letterClose");
  const hugBtn = document.getElementById("hugBtn");

  const abrir = () => {
    envelope.classList.add("open");
    hint.textContent = "Con cariño, para ti 🖤";
    lanzarConfeti();
    if (!cartaEscrita) escribirCarta();
  };
  const cerrar = () => {
    envelope.classList.remove("open");
    hint.textContent = "Toca el sobre para abrirlo";
  };

  envelope.addEventListener("click", (e) => {
    if (envelope.classList.contains("open")) return; // se cierra solo con la X
    abrir();
  });
  closeBtn.addEventListener("click", (e) => { e.stopPropagation(); cerrar(); });
  hugBtn.addEventListener("click", (e) => { e.stopPropagation(); lanzarAbrazo(); });
}

function escribirCarta() {
  cartaEscrita = true;
  const contenedor = document.getElementById("letterText");
  const hugBtn = document.getElementById("hugBtn");
  contenedor.innerHTML = "";
  hugBtn.classList.remove("visible");

  const parrafos = CONFIG.carta.split("\n\n");

  if (prefersReducedMotion) {
    parrafos.forEach((texto) => {
      const p = document.createElement("p");
      p.textContent = texto;
      contenedor.appendChild(p);
    });
    hugBtn.classList.add("visible");
    return;
  }

  let pi = 0;
  const escribirParrafo = () => {
    if (pi >= parrafos.length) {
      hugBtn.classList.add("visible");
      return;
    }
    const texto = parrafos[pi];
    const p = document.createElement("p");
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";
    cursor.textContent = "\u00A0";
    p.appendChild(cursor);
    contenedor.appendChild(p);

    let ci = 0;
    const velocidad = 18;
    const escribirCaracter = () => {
      if (ci < texto.length) {
        cursor.insertAdjacentText("beforebegin", texto[ci]);
        ci++;
        setTimeout(escribirCaracter, velocidad);
      } else {
        cursor.remove();
        pi++;
        setTimeout(escribirParrafo, 250);
      }
    };
    escribirCaracter();
  };
  escribirParrafo();
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

function lanzarAbrazo() {
  const layer = document.getElementById("confettiLayer");
  const corazones = ["🤍", "💜", "🖤"];
  for (let i = 0; i < 16; i++) {
    const heart = document.createElement("span");
    heart.className = "hug-heart";
    heart.textContent = corazones[Math.floor(Math.random() * corazones.length)];
    heart.style.left = 35 + Math.random() * 30 + "vw";
    heart.style.animationDelay = Math.random() * 0.4 + "s";
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
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
