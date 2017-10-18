$(function () {
    $('.panel__trigger').on('click', function () {
        $(this).animate({height:'toggle', padding:'toggle'}, 350);
        $('.panel__wrap').delay(350).fadeIn();
        return false;
    });

    $('#close').on('click', function () {
        $('.panel__wrap').fadeOut(350);
        $('.panel__trigger').delay(350).animate({height:'toggle', padding:'toggle'}, 350);
    })

});