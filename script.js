const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Abrir y cerrar el menú móvil
menuToggle.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", abierto);
  menuToggle.setAttribute(
    "aria-label",
    abierto ? "Cerrar menú" : "Abrir menú"
  );
  menuToggle.textContent = abierto ? "✕" : "☰";
});

// Cerrar el menú después de elegir una sección
document.querySelectorAll("#navLinks a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

// Actualizar automáticamente el año del footer
document.getElementById("year").textContent =
  new Date().getFullYear();

// Animaciones al aparecer las secciones en pantalla
const elementos = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.12
  });

  elementos.forEach((elemento) => {
    observador.observe(elemento);
  });
} else {
  elementos.forEach((elemento) => {
    elemento.classList.add("visible");
  });
}

// CONFIGURAR WHATSAPP
// Reemplazá el número de ejemplo por el del local.
// Usá código de país, sin +, espacios ni guiones.
const telefono = "5491140677852";

document.getElementById("whatsappLink").href =
  `https://wa.me/1140677852?text=Buenas! Quisiera tener mas informacion sobre la merienda y el tarot. Muchas gracias!`; 

 
// CARRUSEL DE LA GALERÍA
document.addEventListener("DOMContentLoaded", () => {
  const galeria = document.getElementById("galeriaCarousel");

  if (!galeria) {
    console.error("No se encontró la galería.");
    return;
  }

  const track = galeria.querySelector(".carousel-track");
  const slides = galeria.querySelectorAll(".carousel-slide");
  const btnAnterior = galeria.querySelector(".prev");
  const btnSiguiente = galeria.querySelector(".next");
  const actual = document.getElementById("galeriaActual");
  const total = document.getElementById("galeriaTotal");

  if (!track || slides.length === 0 || !btnAnterior || !btnSiguiente) {
    console.error("Falta algún elemento del carrusel.");
    return;
  }

  let indice = 0;

  total.textContent = slides.length;

  function mostrarImagen() {
    track.style.transform =
      `translateX(-${indice * 100}%)`;

    actual.textContent = indice + 1;
  }

  btnSiguiente.addEventListener("click", () => {
    indice = (indice + 1) % slides.length;
    mostrarImagen();
  });

  btnAnterior.addEventListener("click", () => {
    indice = (indice - 1 + slides.length) % slides.length;
    mostrarImagen();
  });

  mostrarImagen();
});
