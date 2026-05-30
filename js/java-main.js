function animateParallax() {
  var parallaxDivs = $('div.parallax');
  var parallaxSpeed = 0.2;
  var backgroundSizeAbsolute = 80  + (1080/window.innerWidth)*20;

  if(window.innerWidth > 1080) {
  // Параллакс
  for(var i = 0; i < parallaxDivs.length; i++){
    parallaxDivs.eq(i).css('background-position', 'center ' + ((scrolled*parallaxSpeed - parallaxDivs.eq(i).offset().top*parallaxSpeed) - 200) + 'px');
    //parallaxDivs.eq(i).css('background-size', backgroundSizeAbsolute + Math.abs(Math.sin(scrolled/800))*15 + '%');
  }
  }
}



document.addEventListener('scroll', function (event) {



    doColorChange();

	var progress = Math.abs(scrolled*100/$('body').height());

	$('#progressbar').css('height', 100 - progress + '%');
	$('#progressbar').css('top', progress + '%');

  animateParallax();




  // progress bar animation
  //var backgroundSizeAbsolute = 90 + (1080 / window.innerWidth) * 20;



  allDivs = document.getElementById("item");
  var fade = (1 - scrolled / 500);
  //$('#welcomePad').css('opacity', fade.toFixed(5));
  //	$('#zeroFuckedPad').css('opacity', scrolled/200-0.5);


}, true /*Capture event*/);
