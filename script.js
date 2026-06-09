const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const dialog = document.querySelector("#contact-dialog");
const dialogKind = document.querySelector("#dialog-kind");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll(".support-card").forEach((card) => {
  card.addEventListener("click", () => {
    dialogKind.textContent = card.dataset.kind;
    dialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
document.querySelector(".dialog-ok").addEventListener("click", () => dialog.close());

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".project-card, .support-card, .concept > *, .committee > *").forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(18px)";
  item.style.transition = "opacity .65s ease, transform .65s ease";
  observer.observe(item);
});

document.head.insertAdjacentHTML("beforeend", `<style>.visible{opacity:1!important;transform:translateY(0)!important}@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important}}</style>`);
