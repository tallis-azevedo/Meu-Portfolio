const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open");
});

document.querySelectorAll(".nav-links li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

ScrollReveal().reveal("section", {
  distance: "40px",
  duration: 800,
  origin: "bottom",
  interval: 150,
});

emailjs.init("nHk_2KGvNWvsRgi_K");
const form = document.getElementById("form-contato");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  emailjs
    .sendForm("service_qnnc7yz", "template_676fuod", this)
    .then(() => {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    })
    .catch((err) => {
      console.error(err);
      alert("Erro ao enviar. Tente novamente.");
    });
});
