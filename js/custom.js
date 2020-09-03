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


  (function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation(); 
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
    })();

   