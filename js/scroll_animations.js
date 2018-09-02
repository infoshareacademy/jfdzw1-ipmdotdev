//SMOOTH SCROLLING TO SECTIONS VIA NAVBAR
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

//SLIDE IN ANIMATIONS FOR ITEMS
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 800) {
      $(this).addClass("slide");
    }
  });
});

//COLLAPSE NAVBAR AFTER CLICK
$('.navbar-collapse a').click(function (e) {
  if  (window.innerWidth < 768){
    $('.navbar-collapse').collapse('toggle');
  }
});



//COOKIE
jQuery(function($) {

    checkCookie_eu();

    function checkCookie_eu()
    {

        var consent = getCookie_eu("cookies_consent");

        if (consent == null || consent == "" || consent == undefined)
        {
            // show notification bar
            $('#cookie_directive_container').show();
        }

    }

    function setCookie_eu(c_name,value,exdays)
    {

        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie = c_name + "=" + c_value+"; path=/";

        $('#cookie_directive_container').hide('slow');
    }


    function getCookie_eu(c_name)
    {
        var i,x,y,ARRcookies=document.cookie.split(";");
        for (i=0;i<ARRcookies.length;i++)
        {
            x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x=x.replace(/^\s+|\s+$/g,"");
            if (x==c_name)
            {
                return unescape(y);
            }
        }
    }

    $("#cookie_accept a").click(function(){
        setCookie_eu("cookies_consent", 1, 30);
    });

});



