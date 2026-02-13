const preloader = document.getElementById("preloader");
const navToggle = document.getElementById("navToggle");
const navClose = document.getElementById("navClose");
const nav = document.getElementById("nav");

const closeNav = () => document.body.classList.remove("nav-open");

if (navToggle) {
  navToggle.addEventListener("click", () => document.body.classList.add("nav-open"));
}

if (navClose) {
  navClose.addEventListener("click", closeNav);
}

if (nav) {
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

AOS.init({
  duration: 700,
  easing: "ease-out",
  once: true,
});

new Swiper(".banner-swiper", {
  loop: true,
  speed: 900,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const isMobile = window.innerWidth <= 768;
const delay = isMobile ? 1200 : 200;

setTimeout(() => {
  document.body.classList.add("loaded");
  setTimeout(() => {
    if (preloader) {
      preloader.style.display = "none";
    }
  }, 800);
}, delay);
