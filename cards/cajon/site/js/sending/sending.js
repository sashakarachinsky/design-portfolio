window.setInterval(function(){scrollDaemon();}, 12);
didScroll = false;


// offset vars
function getOffsets() {

			this.scrolled = window.pageYOffset;
}

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
		
			if(window.innerWidth > 1080) { //kills parallax on mobile devices
				
			$('#padIntroID').css('background-position', 'center ' + scrolled*(0.2) +'px');
			$('#padDeliveryID').css('background-position', 'center ' + (scrolled*(0.1) - 220) + 'px');
			$('#padArtur').css('background-position', 'center ' + (scrolled*(0.1) - 260) + 'px');
			$('#padKarina').css('background-position', 'left ' + (scrolled*(0.2) - 580) + 'px');
			$('#padSasha').css('background-position', 'right ' + (scrolled*(0.2) - 800) + 'px');
			$('#padCustom').css('background-position', 'center ' + (scrolled*(0.1) - 460) + 'px');
			$('#commercialPad').css('background-position', 'center ' + (scrolled*(0.3) - 610) + 'px');
			
		
			} else
			{
			
			$('#padIntroID').css('background-position', 'center');
			$('#padDeliveryID').css('background-position', 'center');
			$('#padArtur').css('background-position', 'left');
			$('#padKarina').css('background-position', 'center');
			$('#padSasha').css('background-position', 'center');
			$('#padCustom').css('background-position', 'right');
			$('#commercialPad').css('background-position', 'center');
				
			}
	
		
  }

// Анимация скролла

	$(function() {
		$('#frame-sim').click(function(e) { 
			if( e.target != this ) 
				return false;
			$("#frame-sim").fadeOut(300);
		});
		
		$('#padSuccess').click(function(e) { 
			if( e.target != this ) 
				return false;
			$("#padSuccess").fadeOut(300);
		});
		
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 500);
			return false;
		  }
		}
	  });
	  
	  //$('#mainBG').css('background-position', 
	  
	  //alert(wi);
	  
	});
	


function scrollTopLocal() {
	 $("html, body").animate({ scrollTop:0 }, 
        {
            duration: 1200,
            easing: "easeInOut"
        });
	  }
  

// SIM
function OpenSIMRequest(cajonType) {
    
	
	
	$('#frame-sim-name').val("");
    $('#frame-sim-address').val("");
    $('#frame-sim-email').val("");
    $('#frame-sim-comm').val("");
    $('#frm-sim-send').css("opacity", 0.2);
    
	
	// PayPal Item Identifier & Div header change
	
	 switch (cajonType) { 
		case "Sand": 
			$('input[name=hosted_button_id]').val('VQ2LV5WPAKN8Q'); 
			$('#labelCajonType').text('Buy a Sand Cajon');
		break;
		case "Fingerpad": 
			$('input[name=hosted_button_id]').val('AHU67NN9Z4CAN'); 
			$('#labelCajonType').text('Buy a Fingerpad');
		break;
		case "Snare": 
			$('input[name=hosted_button_id]').val('ZU2P2LL6EBR6Q'); 
			$('#labelCajonType').text('Buy a Snare Cajon');
		break;
	}
	
	
	
	// Show div
	
    $('#frame-sim').fadeIn(200);
	
	
}

function CloseSIMRequest() {
    $('#frame-sim').fadeOut(200);
}

function CheckEmail() {
    if (isValidEmailAddress($('#frame-sim-email').val()) == true) {
        $('#frm-sim-send').css("opacity", 1);
    } else {
        $('#frm-sim-send').css("opacity", 0.2);
    }
}

function SendSIMRequest() {
   
   
    // Generate OrderID
	
	var orderID = '#3314';
	
	
	// Assigning Order ID to invisible label
	
	$('input[name=on0]').val(orderID);
	
	//$('#labelCajonType').val($('input[name=on0]').val());
	//var test = $('#labelCajonType').text();
	//alert(test);
	
	if ($('#frm-sim-send').css("opacity") == 1) {
        $.post("api/feedback.php",
	       {sim: "sim",
	       name: $('#frame-sim-name').val(),
	       email: $('#frame-sim-email').val(),
	       comm: $('#frame-sim-comm').val(),
		   address: $('#frame-sim-address').val(),
		   labelCajonType: $('#labelCajonType').text(),
		   orderID: $('input[name=on0]').val()
	       }); //.done(function( data ) {    alert( "Data Loaded: " + data ); });
    }
    CloseSIMRequest();
    $('#padSuccess').show();
	$("#payPalForm").submit();
}



// CONSULTATION
function OpenConRequest() {
    $('#frame-con-name').val("");
    $('#frame-con-addres').val("");
    $('#frame-con-email').val("");
    $('#frm-con-comm').val("");
    $('#frm-con-send').css("opacity", 0.2);
    
    $('#frame-con').show();
}

function CloseConRequest() {
    $('#frame-con').hide();
}

function CloseSuccess() {
    $('#padSuccess').fadeOut(300);
}

function CheckConEmail() {
    if (isValidEmailAddress($('#frame-con-email').val()) == true) {
        $('#frm-con-send').css("opacity", 1);
    } else {
        $('#frm-con-send').css("opacity", 0.2);
    }
}

/*function SendConRequest() {
    if ($('#frm-con-send').css("opacity") == 1) {
        $.post("api/feedback.php",
	       {con: "con",
	       name: $('#frame-con-name').val(),
	       phone: $('#frame-con-phone').val(),
	       email: $('#frame-con-email').val(),
	       comm: $('#frm-con-comm').val(),
		   articul: $('input[name=on0]').val()
	       });
    }
    CloseConRequest();
    $('#frame-done').show();
}*/







function CloseDonePopup() {
    $('#frame-done').hide();
}




function isValidEmailAddress(emailAddress) {
	var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	
    return pattern.test(emailAddress);
};
