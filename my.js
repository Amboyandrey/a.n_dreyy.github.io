$(document).ready(function() {
  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  $(window).scroll(function() {
    if ($(window).scrollTop()) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });

  var typed = new Typed(".typing", {
    strings: ["Web Developer", "App Developer", "UI/UX Designer"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
  });

  const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener('mousemove', handleOnMouseMove);
  });

  function sendEmail() {
    var emailAddress = "andreyamboy13@gmail.com";
    var emailSubject = "Website Inquiry";
    var emailBody = "Hi, I'm interested in getting a website/application created. Can you please provide me with more information?";
    var mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  }

  const emailButton = document.getElementById("emailButton");
  if (emailButton) {
    emailButton.addEventListener("click", sendEmail);
  }
});
