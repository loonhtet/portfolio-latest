// Start Grade js Section

window.addEventListener("load", function () {
  /*
          A NodeList of all your image containers (Or a single Node).
          The library will locate an <img /> within each
          container to create the gradient from.
       */
  Grade(document.querySelectorAll(".gradient-wrap"));
});

Grade(
  document.querySelectorAll(".gradient-wrap"),
  null,
  function (gradientData) {
    // sample contents of `gradientData` can be inspected here https://jsonblob.com/57c4601ee4b0dc55a4f180f1
  }
);

// End Grade js Section
