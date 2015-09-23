$(document).ready(function(){

	$(".scroll-to").click(function() {
	    var offset = -50; //Offset of 20px
	    var element = "#" + $(this).attr('goto');
	    console.log(element);

	    $('html, body').animate({
	        scrollTop: $(element).offset().top + offset
	    }, 500);
	    event.preventDefault();
	});

	$(".thumb-container").click(function() {
		console.log('thumb container clicked...')
		var go_to = $(this).attr('go-video');
		var current = $('#main-video-player').attr('src');
		if (go_to !== current) {
			$('.white-cover').show();
			$('#main-video-player').css('visibility', "hidden");
			$('.thumb-container').removeClass('video-selected');
			$(this).addClass('video-selected');	
			$('#main-video-player').attr('src', go_to);
			window.setTimeout(function(){
				$('#main-video-player').css('visibility', "visible");
				$('.white-cover').fadeOut(500);
			},1000);
		}
	});

});

/*
// Mute Volume
$("#video-bg-volume span").click(function() {
	var $v = $('#main-video-bg');
	$v.attr('muted', 'false');
	if ($v[0].muted == true) {
		$v[0].muted = false;
		$v[0].volume = 0;
		$v.animate({volume: 1}, 1500);
		$(this).removeClass('glyphicon-volume-off');
		$(this).addClass('glyphicon-volume-up');
	} else {
		$v.animate({volume: 0}, 300);
		$(this).removeClass('glyphicon-volume-up');
		$(this).addClass('glyphicon-volume-off');
		window.setTimeout(function(){
			$v[0].muted = true;
		}, 300);
	}
});


*/

