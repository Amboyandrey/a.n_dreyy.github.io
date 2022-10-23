$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

$(window).scroll(function(){
  if($(window).scrollTop()){
    $("nav").addClass("black");
  }
  else{
    $("nav").removeClass("black");
  }
});
