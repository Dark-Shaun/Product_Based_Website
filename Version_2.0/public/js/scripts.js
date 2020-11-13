
    (function($) {
  "use strict"; // Start of use strict

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 500) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('.pop-up').magnificPopup({
    // delegate: 'a',
    type: 'image',
    closeOnContentClick: true,
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      // verticalFit: true
    }

  });

})(jQuery); // End of use strict


$("#navbarDropdown").on("click", function(){
  $(".dropdown-menu").slideToggle(300);
});

$(".card").on("mouseover", function(){
  $(this).find(".hide-link").addClass("card-hovered");
  // $(this).children(".hidden-tab").removeClass("invisible");
});

$(".card").on("mouseout", function(){
  $(this).find(".hide-link").removeClass("card-hovered");
  // $(this).children(".hidden-tab").addClass("invisible");

});

//Tooltip
$('[data-toggle="tooltip"]').tooltip()



$(function() {
  $(document).scroll(function(){
  var arrow = $(".fa-2x");
  arrow.toggleClass("scrolled",$(this).scrollTop() > arrow.height());
});







$(".masthead .container .row").animate({
  "opacity":"1",
  "transform":"translateY(100px)"
},800);


$(window).scroll( function(){
  
  $('.container-fluid .row').each( function(i){
      
      var bottom_of_object = $(this).position().top -200; 
      //+ $(this).outerHeight(); 
      // $(this).position().top +
      var bottom_of_window = $(window).scrollTop()+220;
      //+ $(window).height();
      
      if( bottom_of_window > bottom_of_object ){
          
          $(this).animate({opacity:1},0);
          // $(this).fadeIn();
              
      }
      
  }); 
 

});
});




var arrow = document.querySelector(".arrow.bounce");

arrow.addEventListener("click", function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
});





