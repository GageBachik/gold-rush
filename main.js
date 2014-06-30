$(document).mousemove(function(e) {
    var percentY = e.clientY / $(window).height();
    var percentX = e.clientX / $(window).width();
    $('body, html').scrollTop($(document).height() * percentY);
    $('body, html').scrollLeft($(document).width() * percentX);
});