// ------ Scroll ------
// Enables the click and scroll functionality
$(document).ready(function (){
    $("#go-home").click(function (){
        $("#home").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-home2").click(function (){
        $("#home").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-about").click(function (){
        $("#about2").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-pricing").click(function (){
        $("#pricing").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-pricing2").click(function (){
        $("#pricing").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-seo").click(function (){
        $("#seo").velocity("scroll", { 
            duration: 1000,
        });
    });
     $("#go-seo2").click(function (){
        $("#seo").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-faq").click(function (){
        $("#faq").velocity("scroll", { 
            duration: 1000,
        });
    });
    $("#go-contact").click(function (){
        $("#contact").velocity("scroll", { 
            duration: 1000,
        });
    });
     $("#go-plans").click(function (){
        $("#plans").velocity("scroll", { 
            duration: 1000,
        });
    });
    // ----  Popover settings  -----
    $('a.session-box').click(function(e){
        // Prevents scrolling to the top of the page when clicking a tag with href="#"
        e.preventDefault();
    });
});


//Script to fade out the caption when scrolled past
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = ($(window).height() / 1.7); //1.7 previous
    $('.caption').css({

        'opacity': ((height - scrollTop) / (height))
    });
});

//Script to fade out the gif when scrolled past
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = ($(window).height() / 8); //1.7 previous
    $('.icon-scroll').css({

        'opacity': ((height - scrollTop) / (height))
    });
});


//collapse the navbar upon selection from hamburger menu
$(document).on('click','.navbar-collapse.in',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	    $(this).collapse('hide');
	}
});

$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 550px, adds/removes solid class
          if($(this).scrollTop() > 550) { 
              $('.navbar-default-home').addClass('solid');

          } else {
              $('.navbar-default-home').removeClass('solid');

          }
        });
});