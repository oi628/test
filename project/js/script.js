$('#giftButton').click(function(){
	$("#giftPage").fadeOut(1500);
	$('#wishH1').addClass('animation-start');
	var song = document.getElementById('audio');
	song.currentTime = 0;
	song.play();
	setTimeout(function() {
      $("#giftPage").fadeIn(1500);
	  setTimeout(function() {
		$('#wishH1').removeClass('animation-start');
	  },1000);
    }, 30000);
});
