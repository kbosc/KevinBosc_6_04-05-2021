// ------------CONTENT BTN----------------
window.addEventListener("scroll", (e) => {
  last_known_scroll_position = window.scrollY;
  const btn = document.getElementById("content");
  if (btn.offsetTop < last_known_scroll_position) {
    btn.style.opacity = 1;
  } else {
    btn.style.opacity = 0;
  }
});
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 10) {
//     btn.classList.add(".active");
//     btn.style.opacity = 0.1;
//   }
// });
