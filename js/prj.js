// Start Grade js Section

// window.addEventListener("load", function () {
//   Grade(document.querySelectorAll(".gradient-wrap"));
// });

// function autograde() {
//   Grade(document.querySelectorAll(".gradient-wrap"));
// }

// setInterval(autograde, 0);

// Grade(
//   document.querySelectorAll(".gradient-wrap"),
//   null,
//   function (gradientData) {}
// );

// End Grade js Section

// Start Project image Section

var getheader = document.querySelector(".prjimgeffects");
var prjimgbg = document.querySelector(".prjimgbgs");
var prjimgeffect = document.querySelector(".prjimgeffects");

function* genfun() {
  let index = 1;

  while (true) {
    yield index++;

    if (index >= 5) {
      index = 1;
    }
  }
}

var getgen = genfun();

// getheader.src = `./img/test/prj${getgen.next().value}.png`;
// prjimgeffect.style.backgroundImage(`../img/test/prj${getgen.next().value}.png`);
prjimgeffect.style.backgroundImage = `url("../img/test/prj${
  getgen.next().value
}.png")`;

function autoload() {
  // getheader.src = `./img/test/prj${getgen.next().value}.png`;

  prjimgeffect.style.backgroundImage = `url("../img/test/prj${
    getgen.next().value
  }.png")`;
}

setInterval(autoload, 6000);

// End Project image Section

// Start Glide Area

// var glide = new Glide(".glide", {
//   type: "carousel",
//   slidesToShow: 1,
//   preView: 2,
//   slidesToScroll: 1,
// });

// new Glide(".glide").mount();

// End Glide Area

// Start Granim Area

var granimInstance = new Granim({
  element: "#canvas-interactive",
  name: "interactive-gradient",
  elToSetClassOn: ".canvas-interactive-wrapper",
  direction: "diagonal",
  isPausedWhenNotInView: true,
  stateTransitionSpeed: 500,
  states: {
    "default-state": {
      gradients: [["#B3FFAB", "#12FFF7"]],
    },
    "violet-state": {
      gradients: [["#9D50BB", "#6E48AA"]],
    },
    "orange-state": {
      gradients: [["#FF4E50", "#F9D423"]],
    },
  },
});

let colorStates = ["default-state", "violet-state", "orange-state"];
// console.log(colorStates[0]);

function* changeState() {
  let idx = 0;

  while (true) {
    yield idx++;

    if (idx >= colorStates.length) {
      idx = 0;
    }
  }
}

var getstate = changeState();

granimInstance.changeState(`${colorStates[getstate.next().value]}`);

function autochangestate() {
  granimInstance.changeState(`${colorStates[getstate.next().value]}`);
}

setInterval(autochangestate, 6000);

// document
//   .getElementById("default-state-cta")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     granimInstance.changeState("default-state");
//   });

// document
//   .getElementById("violet-state-cta")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     granimInstance.changeState("violet-state");
//   });

// document
//   .getElementById("orange-state-cta")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     granimInstance.changeState("orange-state");
//   });
// End Granim Area
