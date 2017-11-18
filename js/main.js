$( document ).ready(function() {

	// top menu
	var oSidebar = document.getElementById('sidbar');
	var oMenu = document.getElementById('menu-switcher');
	var checkbox = document.getElementById('rotate');

	oMenu.addEventListener('click', function(e){
	      if(checkbox.checked === false){
	        oSidebar.style.left = "-99999px";  
	        oSidebar.style.opacity = "0";  
	      }else{
	        oSidebar.style.left = "0";
	        oSidebar.style.opacity = "1";

	      }
	});

// end top menu

// ajax

$("#form-reg").submit(function(e) {
  var postData = $(this).serialize(); 					
  var url = "/API-request.php"; 										
  $.ajax({
  	url: 	url,
    type: "POST", 																	
    data: postData, 
    success: function(data){
      alert(data); 
    },
    complete: function(){														
    	$(this).find('input').val('');
    	$('#form-reg').trigger('reset');
    }
	});

    e.preventDefault();
});

//end ajax

// sticky menu 
	function reinit(){
		var test = $('.custom-nav');
		var top = test.height();
		$('body').offset({top:top});
	};

	reinit();

	$( window ).resize(function() {
		reinit();
	});
	// end sticky menu 

	// error msg
	$('.btn-reg').click(function(){
		if ( $(".btn-reg").hasClass("disabled") ) {
			$(".form-msg").css({'bottom' : '0', 'opacity':'1', 'left':'0'});
		} else {

		};
	});
	// end error msg

	// mobile  menu

	$('.menu-aside_item').on("click",function(){
	    $(this).find(".submenu-aside").show();
	    $(this).siblings().find(".sub-nav").hide();
  });
  
	// end mobile  menu


});