

$(document).ready(function(){

	$(".scroll-to").click(function(event) {
	    var offset = -50; //Offset of 20px
	    var element = "#" + $(this).attr('goto');
	    console.log(element);

	    $('html, body').animate({
	        scrollTop: $(element).offset().top + offset
	    }, 500);
	    event.preventDefault();
	});

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

	$(".thumb-container").click(function() {
		console.log('thumb container clicked...')
		var go_to = $(this).attr('go-video');
		var current = $('#main-video-player').attr('src');
		if (go_to !== current) {
			$('.white-cover').stop(true, true).fadeIn(100);
			$('.thumb-container').removeClass('video-selected');
			$(this).addClass('video-selected');	
			$('#main-video-player').attr('src', go_to);
			window.setTimeout(function(){
				$('.white-cover').fadeOut(1500);
			},500);
		}
	});


});

