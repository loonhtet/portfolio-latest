const hamburgerbtn = document.getElementById("hamburgerbtn");
const topbar = document.querySelector(".top");
const midbar = document.querySelector(".mid");
const bottombar = document.querySelector(".bottom");

hamburgerbtn.addEventListener("click", () => {
  hamburgerbtn.classList.toggle("active");
  topbar.classList.toggle("active");
  midbar.classList.toggle("active");
  bottombar.classList.toggle("active");
});
