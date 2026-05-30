// Ты вообще зачем сюда зашел?


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


window.setInterval(function(){scrollDaemon();}, 12);


// offset vars
function getOffsets() {

			this.scrolled = window.pageYOffset;
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
  
	var didScroll = false;


function backClick() {
	
	
	if (history.length === 1) {
    	window.location.href = '../../../index.html';
	} else {
    	
		history.back()
	}
	
	};


function scrollDaemon() {
    didScroll = true;
	 getOffsets()
	 doScroll();
	
}

setInterval(function() {
if(didScroll) {
        didScroll = false;
    }
}, 1);

   function doScroll() {
		
		//var fade = (1 - scrolled/500);
			//$('#welcomePad').css('opacity', fade.toFixed(5));
			
	//	if(window.innerWidth > 1080) {
			
		$('#intro').css('margin-bottom', -Math.round(window.pageYOffset/2) +'px');
		
		//}
	
		
  }