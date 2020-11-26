// SHOWING ELEMENTS WHEN PAGE IS DONE LOADING

$(window).on("load", function () {
  $(".progress").fadeOut("quick");
  $(".hidden").queue(function (next) {
    $(this).addClass("visible");
    $(this).addClass("fade-in");
    $(this).removeClass("hidden");
    next();
  });
});
