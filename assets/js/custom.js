// ENABLING MATERIALIZE COMPONENTS

$(function () {
  $(".sidenav").sidenav();
  $(".fixed-action-btn").floatingActionButton();
  $(".tooltipped").tooltip();
  $(".parallax").parallax();
  $(".materialboxed").materialbox();
  $(".slider").slider();
  $(".modal").modal();

  $(".collapsible").collapsible({
    accordion: false,
  });
});

// COPYING SERVER IP

$(function () {
  $("#action").click(function () {
    var $text = $("<input>");
    $("body").append($text);
    $text.val($("#action").text()).select();
    document.execCommand("copy");
    $text.remove();

    actionToast();
  });
});

// SENDING SERVER IP TOAST

function actionToast() {
  M.toast({
    html: "IP-adressen blev kopieret!",
    displayLength: "1500",
    inDuration: "400",
    outDuration: "400",
    classes: "blue-grey darken-4 hoverable",
    activationPercent: "0.5",
  });
}
