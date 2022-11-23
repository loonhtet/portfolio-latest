// Start Grade js Section

window.addEventListener("load", function () {
  Grade(document.querySelectorAll(".gradient-wrap"));
});

function autograde() {
  Grade(document.querySelectorAll(".gradient-wrap"));
}

setInterval(autograde, 0);

Grade(
  document.querySelectorAll(".gradient-wrap"),
  null,
  function (gradientData) {
    // sample contents of `gradientData` can be inspected here https://jsonblob.com/57c4601ee4b0dc55a4f180f1
  }
);

// End Grade js Section

// Start Project image Section

var getheader = document.querySelector(".prjimgeffects");
var prjimgbg = document.querySelector(".prjimgbgs");

function* genfun() {
  let index = 1;

  while (true) {
    yield index++;

    if (index >= 3) {
      index = 1;
    }
  }
}

var getgen = genfun();

getheader.src = `./img/test/prj${getgen.next().value}.png`;

function autoload() {
  getheader.src = `./img/test/prj${getgen.next().value}.png`;
}

setInterval(autoload, 6000);

// End Project image Section
