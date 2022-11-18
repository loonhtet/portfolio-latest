const hamburgerbtn = document.getElementById("hamburgerbtn");
const topbar = document.querySelector(".top");
const midbar = document.querySelector(".mid");
const bottombar = document.querySelector(".bottom");

hamburgerbtnhref = document.querySelectorAll("#abtn");
// console.log(hamburgerbtnhref);

hamburgerbtn.addEventListener("click", () => {
  hamburgerbtn.classList.toggle("active");
  topbar.classList.toggle("active");
  midbar.classList.toggle("active");
  bottombar.classList.toggle("active");

  hamburgerbtnhref.forEach(function (e) {
    e.classList.toggle("active");
  });
});

const options = {
  continuousScrolling: Boolean,
  damping: 0.08,
};

// var Scrollbar = window.Scrollbar;

// Scrollbar.init(document.querySelector("#my-scrollbar"), options);
