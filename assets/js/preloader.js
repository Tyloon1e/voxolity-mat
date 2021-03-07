// SHOWING ELEMENTS WHEN PAGE IS DONE LOADING

$(window).on("load", function () {
  $(".progress").delay(200).fadeOut("quick");
  $(".hidden")
    .delay(600)
    .queue(function (next) {
      $(this).addClass("visible");
      $(this).addClass("fade-in");
      $(this).removeClass("hidden");
      next();
    });
});
