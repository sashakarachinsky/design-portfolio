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
		
});
		
	  

// SIM
function showOrderForm() {
    
	
	
	 $('#formClientName').val("");
    $('#formClientEmail').val("");
    $('#formServiceType').val("");
    $('#formComment').val("");
    $('#frm-con-send').css("opacity", 0.2);
    
	
	
	
	
	
	// Show div
	
    $('#frame-sim').fadeIn(200);
	
	
}

function CloseSIMRequest() {
    $('#frame-sim').fadeOut(200);
}

function CheckEmail() {
    if (isValidEmailAddress($('#formClientEmail').val()) == true) {
        $('#frm-sim-send').css("opacity", 1);
    } else {
        $('#frm-sim-send').css("opacity", 0.2);
    }
}

function SendSIMRequest() {
   
   
 
	
	
	
	
	if ($('#frm-sim-send').css("opacity") == 1) {
        $.post("api/feedback.php",
	       {sim: "sim",
	       name: $('#formClientName').val(),
	       email: $('#formClientEmail').val(),
	       comm: $('#formServiceType').val(),
		   address: $('#formComment').val()
	       }); 
    }
    CloseSIMRequest();
    $('#padSuccess').show();
	$("#payPalForm").submit();
}



// CONSULTATION
function OpenConRequest() {
    $('#formClientName').val("");
    $('#formClientEmail').val("");
    $('#formServiceType').val("");
    $('#formComment').val("");
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
    if (isValidEmailAddress($('#formClientEmail').val()) == true) {
        $('#frm-con-send').css("opacity", 1);
    } else {
        $('#frm-con-send').css("opacity", 0.5);
    }
}

function SendConRequest() {
	
    if ($('#frm-con-send').css("opacity") == 1) {
        $.post("api/feedback.php",
	       {con: "con",
	       name: $('#formClientName').val(),
	       email: $('#formClientEmail').val(),
	       service: $('#formService').val(),
	       comm: $('#formComment').val()
	       });
    }
    CloseConRequest();
    $('#frame-done').show();
}







function CloseDonePopup() {
    $('#frame-done').hide();
}




function isValidEmailAddress(emailAddress) {
	var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	
    return pattern.test(emailAddress);
}