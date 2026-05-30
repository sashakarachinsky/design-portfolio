// Глобально

var parallaxShift = 100;

// Звук клика

//var soundClick = new Audio("/sounds/click.wav" ) ;
//soundClick.volume = 0.5;

window.onmousedown = function() {
  //soundClick.play();
}

// После загрузки

function pageLoaded(){

	doScroll();
	//alert('pageLoaded');

	}


// Анимация скролла

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 820);
			return false;
		  }
		}
	  });
	});

//



// offset vars
function getOffsets() {

			this.scrolled = window.pageYOffset;
			var scrolled = window.pageYOffset;

}

function resize() {
			var canvasSize = $(window).width();
}



function scrollTopLocal() {
	 $("html, body").animate({ scrollTop:0 },
        {
            duration: 1200,
            easing: "easeInOut"
        });
	  }






window.onscroll = function() {getOffsets(); doScroll();}

function doScroll(){


	var parallaxDivs = $('div.parallax');
	var parallaxSpeed = 0.5;
	var backgroundSizeAbsolute = 100  + (1080/window.innerWidth)*20;

	//Если не мобильник
	if(window.innerWidth > 1080) {
	// Параллакс
	for(var i = 0; i < parallaxDivs.length; i++){
		parallaxDivs.eq(i).css('background-position', 'center ' + (scrolled*parallaxSpeed - parallaxDivs.eq(i).offset().top*parallaxSpeed) +'px');
		//parallaxDivs.eq(i).css('background-size', backgroundSizeAbsolute + Math.abs(Math.sin(scrolled/800))*15 + '%');
	}
	}

		getOffsets();
		allDivs = document.getElementById("item");
		var welcomeTop = -scrolled*2;
		var fade = (1 - scrolled/500);
			//$('#welcomePad').css('opacity', fade.toFixed(5));


			$('#sCloud').css('opacity', scrolled/500+0.8);






}
