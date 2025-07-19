ScrollReveal().reveal(".team-container .box", {
  origin: "top",
  distance: "30px",
  rotate: { x: 0, y: 80, z: 0 },
  duration: 1e3,
  interval: 200,
  opacity: 0,
  scale: 1,
  easing: "ease-in-out",
  reset: !0,
  interval: 150,
}),
  ScrollReveal().reveal(".footer-container .footer-column", {
    origin: "bottom",
    distance: "50px",
    duration: 800,
    delay: 200,
    interval: 100,
  }),
  ScrollReveal().reveal(".heading", {
    delay: 400,
    origin: "left",
    distance: "-1000px",
  }),
  ScrollReveal().reveal(".heading", {
    delay: 400,
    origin: "left",
    distance: "-1000px",
  }),
  ScrollReveal().reveal(".details img", {
    delay: 200,
    origin: "left",
    distance: "100px",
  }),
  ScrollReveal().reveal(".details h3", {
    delay: 400,
    origin: "bottom",
    distance: "30px",
  }),
  ScrollReveal().reveal(".details p", {
    delay: 600,
    origin: "right",
    distance: "50px",
  }),
  document.addEventListener("scroll", function () {
    document.querySelectorAll("section").forEach((e) => {
      const a = e.getBoundingClientRect().top,
        l = e.offsetHeight;
      a < window.innerHeight && a > -l
        ? (e.classList.add("fade-in"), e.classList.remove("fade-out"))
        : (e.classList.add("fade-out"), e.classList.remove("fade-in"));
    });
  });
