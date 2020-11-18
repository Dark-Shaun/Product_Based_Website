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
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 75
  // });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
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
// ---------------------------------------------------------------------------------(For scrolling)
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      
      return;
    } else {
      console.log(entry);
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });

},
  appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ---------------------------------------------------------------------------------------(Navbar Change)

// --------------------------------------------------------------------------------------------(Like button)
// const like = $('.like')
// like.on('click', function(){

//   var clickedID = this.id;
//   // console.log(clickedID);
//   $('#' + clickedID).toggleClass('pink');

// });
document.querySelectorAll('.like').forEach(function(el){
  el.addEventListener('click', function(){
    document.getElementById(this.id).classList.toggle('pink_1');
    // var cart_no=parseInt(document.getElementById("badge-heart").innerHTML)+1;
    // document.getElementById("badge-heart").innerHTML=""+cart_no +"";
  });
});
//-----------------------------------------------------------------------------------------()

$("#navbarDropdown").on("click", function(){
  $(".dm_2").slideToggle(300);
});

$("#navbarDropdown_1").on("click", function(){
  $(".dm_1").slideToggle(300);
});

// --------------------------------------------------------------------------------------------()
// document.querySelectorAll(".cart").forEach(function(el){
//   el.addEventListener("click",function(){
//   var cart_no=parseInt(document.getElementById("badge-cart").innerHTML)+1;
//   document.getElementById("badge-cart").innerHTML=""+cart_no +"";
// })
// });



 
