// $(".nav-home li a").click(function () {
//   var id = $(this).attr("href");
//   $("html, body")
//     .stop()
//     .animate(
//       {
//         scrollTop: $("#" + id).offset().top,
//       },
//       500
//     );
// });

// $(window).scroll(function () {
//   var myArray = new Array();
//   $("section.sct").each(function () {
//     myArray.push($(this).offset().top);
//   });
//   for (var i = 0; i <= myArray.length; i++) {
//     if ($(this).scrollTop() >= myArray[i]) {
//       $(".nav-home li").removeClass("active");
//       $(".nav-home li").eq(i).addClass("active");
//     }
//   }
// });

// Somente para adicionar class .active (sem scroll):
// $(".nav-home li").click(function () {
//   $(".nav-home li").removeClass("active");
//   $(this).addClass("active");
// });

(function () {
  "use strict";

  var section = document.querySelectorAll(".sct");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector(".active").setAttribute("class", " ");
        document
          .querySelector("a[href*=" + i + "]")
          .setAttribute("class", "active");
      }
    }
  };
})();
