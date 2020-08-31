$(function () {
   $(".navbar-toggler").click(function(){
       $(this).toggleClass('open');
      
   })
   $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("body").addClass("animate");
    } else {
        $("body").removeClass("animate");
    }
});
   $("body,html").animate({
    scrollTop: 1
    }, 0);
});
AOS.init({
    duration: 1200,
  })
