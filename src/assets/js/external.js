$(document).ready(function () {
  var header = $(".purpheader");
 
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 30) {
      header.addClass("opaqueheader");
     
    } else {
      header.removeClass("opaqueheader");
     
    }
  });
});