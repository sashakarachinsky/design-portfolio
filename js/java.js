const getTitle = (url) => {
  return fetch(`https://crossorigin.me/${url}`)
    .then((response) => response.text())
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const title = doc.querySelectorAll('title')[0];
      return title.innerText;
    });
};


// Листаем проекты с клавиатуры
//setInterval(function(){
//document.documentElement.style.setProperty('--colorFilter', getRandomColor()); }, 600);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        // ←
        window.open("../../" + prevDir + "index.html","_self")

    }
    else if (e.keyCode == '39') {
        // →
        window.open("../../" + nextDir + "index.html","_self")
    }

}


/* листаем свайпом на мобиле

document.addEventListener("touchstart", startTouch, false);
document.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
        window.open("../../" + nextDir + "index.html","_self");
    } else {
      // swiped right
        window.open("../../" + prevDir + "index.html","_self");
    }
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      //console.log("swiped up");
    } else {
      // swiped down
    //  console.log("swiped down");
    }
  }

  initialX = null;
  initialY = null;

  e.preventDefault();
};
*/


// Next Prev Project cards

var path = window.location.pathname.split('/');
//var currentDir = path.substring(path.indexOf('/'), path.lastIndexOf('/'));

var currentDir = path[path.length-3] + '/' + path[path.length-2];
var nextDir = '';
var prevDir = '';
var nextDirName = '';
var prevDirName = '';



var cardsList = new Array();
var cardName = new Array();
var cardNameEn = new Array();

cardsList [48] = 'portal/all';
cardName [48] = 'Портал Карго';
cardNameEn [48] = 'Portal Cargo';

cardsList [47] = 'samana/identity';
cardName [47] = 'Samana';
cardNameEn [47] = 'Samana';

cardsList [46] = 'hiken/logo';
cardName [46] = 'Хайкен';
cardNameEn [46] = 'Hiken';

cardsList [45] = 'bo/all';
cardName [45] = 'Белые Облака';
cardNameEn [45] = 'Beliye Oblaka';

cardsList [44] = 'prostaya/all';
cardName [44] = 'Простая школа';
cardNameEn [44] = 'Prostaya shkola';

cardsList [43] = 'solit/www';
cardName [43] = 'Солит Клаудс';
cardNameEn [43] = 'Solit Clouds';

cardsList [42] = 'neohippie/v1';
cardName [42] = 'Шрифт NeoHippie';
cardNameEn [42] = 'NeoHippie Font';


cardsList [41] = 'chinastraat/logo';
cardName [41] = 'Chinastraat';
cardNameEn [41] = 'Chinastraat';

cardsList [40] = 'avtoban_digital/brand';
cardName [40] = 'Айдентика Автобан Диджитал';
cardNameEn [40] = 'Avtoban Digital Identity';

cardsList [39] = 'artlikbez/style';
cardName [39] = 'Фирменный стилья art.likbez';
cardNameEn [39] = 'art.likbez Identity';


cardsList [38] = 'accel/logo';
cardName [38] = 'Логотип ACCEL';
cardNameEn [38] = 'ACCEL Logo';

cardsList [37] = 'alchemy-portrait/logo';
cardName [37] = 'Лого Алхимического портрета';
cardNameEn [37] = 'Alchemy Portrait Logo';

cardsList [36] = 'mybusiness/all';
cardName [36] = 'Мой Бизнес';
cardNameEn [36] = 'My Business';

cardsList [35] = 'azbuka/site';
cardName [35] = 'Сайт азбуки Петра Фролова';
cardNameEn [35] = 'Frolov Alphabet Book Website';

cardsList [34] = 'address/all';
cardName [34] = 'Приложение Address'
cardNameEn [34] = 'Address App'

cardsList [33] = 'somatika/site';
cardName [33] = 'Сайт Соматики';
cardNameEn [33] = 'Somatika Website';


cardsList [32] = 'lorus/site';
cardName [32] = 'Сайт Lorus SCM';
cardNameEn [32] = 'Lorus SCM website';

cardsList [31] = 'players/logo';
cardName [31]= 'Лого P&C';
cardNameEn [31]= 'P&C Logo';

cardsList [30] = 'sanatorium/app';
cardName [30] = 'Приложение Sanatorium';
cardNameEn [30] = 'Sanatorium App';

cardsList [29] = 'vershinina/site';
cardName [29] = 'Сайты школы Елены Вершининой';
cardNameEn [29] = 'Vershinina School webstite';

cardsList [28] = 'befit/tender';
cardName [28] = 'Ребрендинг ОЖ';
cardNameEn [28] = 'OJ Rebranding';

cardsList [27] = 'rfg/all';
cardName [27] = 'Логотип Retro-Future Generation';
cardNameEn [27] = 'RFG Logo';

cardsList [26] = 'surya/logo';
cardName [26] = 'Логотип Сурья-феста';
cardNameEn [26] = 'Surya Fest Logo';

cardsList [25] = 'ontheroofs/all';
cardName [25] = 'Приложение и лого OnTheRoofs';
cardNameEn [25] = 'OnTheRoofs app & Logo';

cardsList [24] = '162/logo';
cardName [24] = 'Айдентика бренда 1.62';
cardNameEn [24] = '1.62 identity';

cardsList [23] = 'human-tuning/logo';
cardName [23] = 'Лого Хьюман-Тюнинг';
cardNameEn [23] = 'Human Tuning Logo';

cardsList [22] = 'nuts/pack';
cardName [22] = 'Упаковка Активированных орешков';
cardNameEn [22] = 'Activated Nuts package design';

cardsList [21] = 'creator/all';
cardName [21] = 'Цифровой релиз WAYVES';
cardNameEn [21] = 'WAYVES release design';

cardsList [20] = 'ostrov/all';
cardName [20] = 'Много всего для The Ostrov';
cardNameEn [20] = 'The Ostrov';

cardsList [19] = 'zs/all';
cardName [19] = 'Приложение и стиль для ZS';
cardNameEn [19] = 'ZS app';

cardsList [18] = 'foodfox/logo';
cardName [18] = 'Логотип Foodfox';
cardNameEn [18] = 'Foodfox Logo';

cardsList [17] = 'wayves/all';
cardName [17] = 'Бренд WAYVES';
cardNameEn [17] = 'WAYVES brand';


cardsList [16] = 'uplus/logo';
cardName [16] = 'Лого университета U+';
cardNameEn [16] = 'U+ Unicersity Logo';

cardsList [15] = 'digger/logo';
cardName [15] = 'Логотип Диггера';
cardNameEn [15] = 'Digger Logo';

cardsList [14] = 'mansion/logo';
cardName [14] = 'Фитнес-клуб Мэншн';
cardNameEn [14] = 'Mansion Fitness Logo';

cardsList [13] = 'nelo/logo';
cardName [13] = 'Айдентика Нэло';
cardNameEn [13] = 'Nelo Identity';

cardsList [12] = 'network/all';
cardName [12] = 'Логотип Нетворк';
cardNameEn [12] = 'Network Logo';

cardsList [11] = 'simplesystems/all';
cardName [11] = 'Симпл Системс';
cardNameEn [11] = 'Simple Systems';

cardsList [10] = 'logus/all';
cardName [10] = 'Logus The Box';
cardNameEn [10] = 'Logus The Box Logo';

cardsList [9] = 'mosevent/logo';
cardName [9] = 'Логотипы МосЭвента';
cardNameEn [9] = 'MosEvent Logo';

cardsList [8] = 'alun/logo';
cardName [8] = 'Лого ALUN';
cardNameEn [8] = 'ALUN Logo';

cardsList [7] = 'yarrco/logo';
cardName [7] = 'Бренд Яррко';
cardNameEn [7] = 'Yarrco Logo';

cardsList [6] = 'avatar/logo';
cardName [6] = 'Лого Аватара';
cardNameEn [6] = 'Avatar Logo';

cardsList [5] = 'czech-chandelier/logo';
cardName [5] = 'Чешские люстры';
cardNameEn [5] = 'Czech Chandelier Logo';

cardsList [4] = 'breezik/logo';
cardName [4] = 'Лого Breezik';
cardNameEn [4] = 'Breezik Logo';

cardsList [3] = 'ciaoamo/logo';
cardName [3] = 'Лого Ciaoamo';
cardNameEn [3] = 'Ciaoamo Logo';

cardsList [2] = 'lendnest/logo';
cardName [2] = 'Лого Lendnest';
cardNameEn [2] = 'Lendnest Logo';

cardsList [1] = 'procket/logo';
cardName [1] = 'Лого Pocket Rocket';
cardNameEn [1] = 'Pocket Rocket Logo';

cardsList [0] = 'potok/logo';
cardName [0] = 'Лого Potok';
cardNameEn [0] = 'Potok Logo';



var i = cardsList.length-1;

  while(i >= 0){



         if (cardsList[i] == currentDir) {
         prevDir = cardsList[i+1] + "/";
         prevDirName = cardName[i+1];
         prevDirNameEn = cardNameEn[i+1];
         nextDir = cardsList[i-1] + "/";
         nextDirName = cardName[i-1];
         nextDirNameEn = cardNameEn[i-1];


         if (i == cardsList.length-1) { prevDir = cardsList[0] + "/"; prevDirName = cardName[0]; prevDirNameEn = cardNameEn[0]; }
         if (i == 0) { nextDir = cardsList[cardsList.length-1] + "/"; nextDirName = cardName[cardsList.length-1]; nextDirNameEn = cardNameEn[cardsList.length-1];}
       }

        i--;

 }












// Глобально

var parallaxShift = 100;
this.scrolled = window.pageYOffset;
var scrolled = window.pageYOffset;
var autoScroll = false;

// Звук клика

//var soundClick = new Audio("/sounds/click.wav" ) ;
//soundClick.volume = 0.5;


function moveScreenPreview() {

  //	$('#screenPreview').css('left', window.mouse-x);


}

//window.onmousedown = function() {
//soundClick.play();
//




// После загрузки

function pageLoaded() {



  /* Фильтр дивов по классу

  	var $mediaElements = $('.filtered');

  			$('.filter_link').click(function() {
  				var filterVal = $(this).data('filter');

  				if(filterVal === 'filterAll'){
  					$mediaElements.fadeIn(500);

  				}else{
  					 // hide all then filter the ones to show
  					 $mediaElements.fadeOut(100);
  					 $mediaElements.filter('.' + filterVal).fadeIn(500);
  				}

  			});
  */

}




$(window).keypress(function(e) {
  if (e.which === 32) {

    autoscrollStop();

  }
});






function autoscrollStop() {

  autoScroll = false;

}

function autoscrollStart() {

  autoScroll = true;
  autoscrollDo();


}

function getRandomColor() {
  var letters = '0123445789ABCDEF';
  var color = '#ffcc';
  for (var i = 0; i < 2; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function autoscrollDo() {



  var scrollSpeed = 3;
  //document.getElementById('naviLabel').innerText = scrollSpeed;

  if (autoScroll) {
    window.scrollBy(0, scrollSpeed);
  }
}

function padContactShow() {

  $('#padContact').fadeToggle("fast");

}

function padContactHide() {

  $('#padContact').fadeToggle("fast");

}

// Анимация скролла



$(function() {




  // $(".item").mouseleave(function() {
  //			     bgColorChanger('#d4bda8','black');
  //});



  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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
function getScrolled() {

  this.scrolled = window.pageYOffset;
  var scrolled = window.pageYOffset;

}

function resize() {
  var canvasSize = $(window).width();
}



function scrollTopLocal() {
  $("html, body").animate({
    scrollTop: 0
  }, {
    duration: 1200,
    easing: "easeInOut"
  });
}


function backClick() {


  if (history.length === 1) {
    window.location.href = '../../../index.html';
  } else {

    history.back();
  }

}




function bgColorChanger(bgColor, textColor) {


  if ($("body").css("background-color") !== hexToRGB(bgColor.substr(1))) {



  $('body').css('background-color', bgColor);
  $('projectDescription').css('background-color', bgColor+'!important');
  $('#projectDescription').css('color', textColor);
  $('h2').css('color', textColor);
  $('h3').css('color', textColor);

  $('.menuLeft a').css('color', textColor);



}

}





function hexToRGB(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return 'rgb(' + r + ", " + g + ", " + b+')';
}

function doColorChange() {

  var colorChangeOffset = 200;

  var colorChange1 = jQuery('.colorChange1').offset().top - colorChangeOffset;
  var colorChange2 = jQuery('.colorChange2').offset().top - colorChangeOffset;
  var colorChange3 = jQuery('.colorChange3').offset().top - colorChangeOffset;
  var colorChange4 = jQuery('.colorChange4').offset().top - colorChangeOffset;
	var colorChange45 = jQuery('.colorChange45').offset().top - colorChangeOffset;
  var colorChange5 = jQuery('.colorChange5').offset().top - colorChangeOffset;
  var colorChange6 = jQuery('.colorChange6').offset().top - colorChangeOffset;
  var colorChange7 = jQuery('.colorChange7').offset().top - colorChangeOffset;
  var colorChange8 = jQuery('.colorChange8').offset().top - colorChangeOffset;
  var colorChange9 = jQuery('.colorChange9').offset().top - colorChangeOffset;

  var colorYellow = '#ffb639';
  var colorPurple = '#4300cc';
  var colorDefaultBG = '#000000';
  var colorCyan = '#f1d900';
  var colorGreen = "#3ef86e";
  var colorBright = "#d4bda8";





  if (scrolled < colorChange1) { bgColorChanger(colorDefaultBG, 'white');} else

  if (scrolled < colorChange2) { bgColorChanger(colorDefaultBG, 'white');}  else

  if (scrolled < colorChange3) { bgColorChanger(colorDefaultBG, 'white');} else

  if (scrolled < colorChange4) {  bgColorChanger(colorDefaultBG, 'white');} else

  //if (scrolled < colorChange44) { bgColorChanger(colorPurple, 'white');} else

  if (scrolled < colorChange45) { bgColorChanger(colorYellow, 'white');} else

  if (scrolled < colorChange5) { bgColorChanger(colorYellow, 'white');} else

  //if (scrolled < colorChange6) { bgColorChanger(colorDefaultBG, 'white');} else

  if (scrolled < colorChange7) { bgColorChanger(colorDefaultBG, 'white');} else

  if (scrolled < colorChange8) { bgColorChanger(colorDefaultBG, 'white'); } else

  if (scrolled < colorChange9) { bgColorChanger(colorBright, 'white'); } else

  if (scrolled < 999999) { bgColorChanger(colorDefaultBG, 'white');}

}







function doScroll() {







  getScrolled();
  autoscrollDo();




  if (scrolled < 200) {


    $('.btnTop').css('margin-top', scrolled / -200 + 'px');
    $('.btnTop').css('opacity', scrolled / 200);

    $('#btnMail').css('opacity', 0);

    $('.menuLeft').css('display', 'none');


  } else {
      if (scrolled < 700) {
    $('.btnTop').css('margin-top', 0);
    $('.btnTop').css('opacity', '1');

    $('#btnMail').css('opacity', (scrolled - 500) / 200);

    $('.menuLeft').css('display', 'block');
    $('.menuLeft').css('opacity', (scrolled - 500) / 200);
    }
    else {
      $('.btnTop').css('margin-top', 0);
      $('.btnTop').css('opacity', '1');

      $('#btnMail').css('opacity', '1');

      $('.menuLeft').css('display', 'block');
      $('.menuLeft').css('opacity', '1');

      }
    }







  // Logo Animation

  $('.logoAnimatedCircleHalf1').css('transform', 'rotate(' + Math.abs(scrolled / 8) + 'deg)');
  $('.logoAnimatedCircleHalf2').css('transform', 'rotate(' + (-scrolled / 6) + 'deg)');
  $('.logoAnimatedCircleHalf3').css('transform', 'rotate(' + scrolled / 4 + 'deg)');

  $('.logoAnimatedCircleHalf4').css('transform', 'rotate(' + scrolled / 8 + 'deg)');
  $('.logoAnimatedCircleHalf5').css('transform', 'rotate(' + (-scrolled / 6) + 'deg)');
  $('.logoAnimatedCircleHalf6').css('transform', 'rotate(' + scrolled / 4 + 'deg)');

  var periodParam = Math.sin(scrolled / 400) * 10 + 5;

  $('.logoAnimatedTri1').css('opacity', periodParam / 4);
  $('.logoAnimatedTri2').css('opacity', periodParam / 8);
  $('.logoAnimatedTri3').css('opacity', periodParam / 12);

  $('.logoAnimatedTri4').css('opacity', periodParam / 4);
  $('.logoAnimatedTri5').css('opacity', periodParam / 8);
  $('.logoAnimatedTri6').css('opacity', periodParam / 12);







}


window.onscroll = function() {
//$(document.body).css('filter', 'sepia(0.1) hue-rotate(' + Math.random()*4+ 'deg)');

  doScroll();
}
