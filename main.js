$(document).mousemove(function(e) {
    var percentY = e.clientY / $(window).height();
    var percentX = e.clientX / $(window).width();
    $('body, html').scrollTop($(document).height() * percentY);
    $('body, html').scrollLeft($(document).width() * percentX);
});

$('.container').on('click', function(event){
	var note = prompt('Add a note:') || '';
	var marker = '<img title="'+note+'" class="marker" src="http://iprovweb.com/wp-content/uploads/2012/09/blue-pin.png"></img>'
	var css = {
		position : 'absolute',
		left : event.pageX,
		top : event.pageY,
		height : '24px',
		width : '24px',
		zIndex : '999'
	};
	$('body').append($(marker).css(css));
});

$(document).on('mousewheel', function(event){
	return false;
});

$(document).on('click', '.marker', function(event){
	event.preventDefault();
	event.stopPropagation();
	$(this).remove();
});