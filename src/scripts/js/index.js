function stickyNavbar() {
  const t = document.querySelector(".navigation"),
    e = document.querySelector(".logo");
  window.scrollY > 50
    ? (t.classList.add("sticky"),
      (e.style.width = "100px"),
      (e.style.height = "100px"))
    : (t.classList.remove("sticky"),
      (e.style.width = "150px"),
      (e.style.height = "150px"));
}
(window.onscroll = function () {
  stickyNavbar();
}),
  document.addEventListener("DOMContentLoaded", function () {
    const t = document.querySelector(".toggle-box"),
      e = document.querySelector(".menu");
    t.addEventListener("click", function () {
      e.style.display = "block" === e.style.display ? "none" : "block";
    });
  });
