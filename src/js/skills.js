$(function () {
    'use strict';
    $('.progress-bar').each(function () {
        $(this).animate({
            width: $(this).attr('data-progress') + '%'
        }, 1000, function () {
            $(this).text($(this).attr('data-progress') + '%');
        });
    });
    $('.info .img img').css('left', ($('.info').innerWidth() - $('.img img').innerWidth()) / 2);
});
