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
        if ($(this).scrollTop() > 800) {
            $('article').addClass('animated fadeInDown');
        }
    });

    $('.arrowUp__up').on('click', function () {
        $('body,html').animate({scrollTop:0},800);
    });

    $('#but1').on('click', function () {
        $('.guidelines__but-item').removeClass('guidelines__but-item--active');
        $(this).addClass('guidelines__but-item--active');
        $('.guidelines__img').slideUp(800);
        $('#slide1').delay(599).slideDown(800);
    });

    $('#but2').on('click', function () {
        $('.guidelines__but-item').removeClass('guidelines__but-item--active');
        $(this).addClass('guidelines__but-item--active');
        $('.guidelines__img').slideUp(800);
        $('#slide2').delay(599).slideDown(800);
    });

    $('#but3').on('click', function () {
        $('.guidelines__but-item').removeClass('guidelines__but-item--active');
        $(this).addClass('guidelines__but-item--active');
        $('.guidelines__img').slideUp(800);
        $('#slide3').delay(599).slideDown(800);
    });

    $('#but4').on('click', function () {
        $('.guidelines__but-item').removeClass('guidelines__but-item--active');
        $(this).addClass('guidelines__but-item--active');
        $('.guidelines__img').slideUp(800);
        $('#slide4').delay(599).slideDown(800);
    });

    $('.header__nav-mobile').on('click', function () {
        $('.header__nav-mobile-list').slideToggle(700);
    })









});