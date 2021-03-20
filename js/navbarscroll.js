$(document).ready(function () {
  $(window).scroll(function () {
    var height = $(".home").height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= height - 40) {
      $(".nav-home").addClass("solid-nav");
    } else {
      $(".nav-home").removeClass("solid-nav");
    }
  });
});
