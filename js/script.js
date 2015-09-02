$(document).ready(function(){

	$(".scroll-to").click(function() {
	    var offset = -50; //Offset of 20px
	    var element = "#" + $(this).attr('goto');
	    console.log(element);

	    $('html, body').animate({
	        scrollTop: $(element).offset().top + offset
	    }, 500);
	});

	// Mute Volume
	$("#video-bg-volume span").click(function() {
		var $v = $('#main-video-bg');
		$v.attr('muted', 'false');
		if ($v[0].muted == true) {
			$v[0].muted = false;
			$v[0].volume = 0;
			$v.animate({volume: 1}, 1500);
			$(this).removeClass('glyphicon-volume-up');
			$(this).addClass('glyphicon-volume-off');
		} else {
			$v.animate({volume: 0}, 300);
			$(this).removeClass('glyphicon-volume-off');
			$(this).addClass('glyphicon-volume-up');
			window.setTimeout(function(){
				$v[0].muted = true;
			}, 300);
		}
	});



});

