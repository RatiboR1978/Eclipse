$(function () {
    $('.panel__trigger').on('click', function () {
        $(this).animate({height:'toggle', padding:'toggle'}, 350);
        $('.panel__wrap').delay(350).fadeIn();
        return false;
    });

    $('#close').on('click', function () {
        $('.panel__wrap').fadeOut(350);
        $('.panel__trigger').delay(350).animate({height:'toggle', padding:'toggle'}, 350);
    });

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > 2000) {
            $('.arrowUp__up').css('display', 'block');
        } else if ($(this).scrollTop() < 2000) {
            $('.arrowUp__up').css('display', 'none');
        }
    });

    $('.arrowUp__up').on('click', function () {
        $('body,html').animate({scrollTop:0},800);
    });

});