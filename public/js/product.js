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
    
    document.getElementById(this.id).classList.toggle('pink');
  });
});
//-----------------------------------------------------------------------------------------()
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$("#navbarDropdown").on("click", function(){
  $(".dm_2").slideToggle(300);
});

$("#navbarDropdown_1").on("click", function(){
  $(".dm_1").slideToggle(300);
});

// --------------------------------------------------------------------------------------------(Modal Effects)


 
