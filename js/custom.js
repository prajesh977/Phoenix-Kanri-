$(function () {
   $(".navbar-toggler").click(function(){
       $(this).toggleClass('open');
      
   })
  
});
var UIComponent = (function () {
    $(function () {
        $(window).resize(function () {
            ResponsiveUI();
        });
        function ResponsiveUI() {
            var size = $(window).width();
            if (size < 768)
                $('.tab').addClass('accordion tabToAccor').removeClass('tab');
            else
                $('.tabToAccor').addClass('tab').removeClass('accordion');
            UIComponent.tabs();
            UIComponent.accordion();
        };
        UIComponent.tabs();
        UIComponent.accordion();
    });
    return {
        tabs: function () {
            $('.tab .card-header').off('click').on('click', function () {
                var $ths = $(this);
                var $pr = $ths.parent();
                $pr.find('>.active').removeClass('active');
                $pr.find('>.show').removeClass('show');
                $ths.addClass('active');
                $ths.next('.collapse').addClass('show');
            });
        },
        accordion: function () {
            $('.accordion .card-header').off('click').on('click', function () {
                var $ths = $(this);
                var $pr = $ths.parent();
                $pr.find('>.active').not($ths).removeClass('active');
                var $tar = $ths.next('.collapse');
                $pr.find('>.collapse').not($tar).slideUp(350);
                $ths.toggleClass('active');
                $tar.slideToggle(350);
            });
        },
    }
})();