// Start SmoothScrollbar Area

const options = {
  continuousScrolling: Boolean,
  damping: 0.08,
};

var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector("#my-scrollbar"), options);

// End SmoothScrollbar Area

// Start Project image Section

var getheader = document.querySelector(".prjimgeffects");
var prjimgbg = document.querySelector(".prjimgbgs");
// console.log(colorStates[0]);
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

prjimgeffect.style.backgroundImage = `url("../img/test/prj${
  getgen.next().value
}.png")`;

function autoload() {
  prjimgeffect.style.backgroundImage = `url("../img/test/prj${
    getgen.next().value
  }.png")`;
}

setInterval(autoload, 6000);

// End Project image Section

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
