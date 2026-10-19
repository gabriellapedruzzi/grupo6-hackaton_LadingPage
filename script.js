// Carrossel da seção "Como funciona" da Fio
(() => {
  const carousel = document.querySelector("#como-funciona .carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const previousButton = carousel.querySelector(".carousel-prev");
  const nextButton = carousel.querySelector(".carousel-next");
  const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
  const counter = carousel.querySelector(".carousel-counter");
  let currentIndex = 0;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", String(slideIndex !== currentIndex));
    });

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === currentIndex;
      dot.classList.toggle("is-active", isActive);
      if (isActive) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });

    counter.textContent = `${currentIndex + 1} / ${slides.length}`;
  }

  previousButton.addEventListener("click", () => showSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => showSlide(currentIndex + 1));
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  // Permite navegar pelas etapas usando as setas do teclado.
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(currentIndex + 1);
    }
  });

  showSlide(0);
})();

// FORMULÁRIO DE CONTATO — FIO

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#contact-status");

  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#contact-name").value.trim();
    const email = document.querySelector("#contact-email").value.trim();
    const subject = document.querySelector("#contact-subject").value.trim();
    const message = document.querySelector("#contact-message").value.trim();

    if (!name || !email || !subject || !message) {
      status.textContent = "Preencha todos os campos.";
      return;
    }

    const destination = "gabriellapedruzzi@gmail.com";

    const emailSubject = encodeURIComponent(
      `[Contato pelo site Fio] ${subject}`
    );

    const emailBody = encodeURIComponent(
      `Nome: ${name}\n` +
      `E-mail para resposta: ${email}\n\n` +
      `Mensagem:\n${message}`
    );

    const mailtoLink =
      `mailto:${destination}?subject=${emailSubject}&body=${emailBody}`;

    status.textContent =
      "Abrindo seu aplicativo de e-mail para você enviar a mensagem.";

    window.location.href = mailtoLink;
  });
});