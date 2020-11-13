// SHOWING ELEMENTS WHEN PAGE IS DONE LOADING

$(window).on("load", function () {
  $(".progress").delay(500).fadeOut("quick");
  $(".hidden")
    .delay(1000)
    .queue(function (next) {
      $(this).addClass("visible");
      $(this).addClass("fade-in");
      $(this).removeClass("hidden");
      next();
    });
});
