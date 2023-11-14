//index.html page links
$(document).ready(function() {
    var animationDuration = 2000;
    var delayBetweenBoxes = 500;
    $(".box").each(function(index) {
      $(this).delay(index * delayBetweenBoxes).animate({ bottom: "0", opacity: "1" }, animationDuration);
    });
});

//about.html page data
$(document).ready(function () {
  function animateExperienceRows() {
    $('.experience-row').each(function (index) {
      $(this).delay(200 * index).fadeIn(400);
    });
  }
  animateExperienceRows();
});

//about page footer
$(document).ready(function () {
  var currentYear = new Date().getFullYear();
  $('.copyright-year').text(currentYear);
});

//services page animation
$(document).ready(function () {
  function animateServicesOnScroll() {
    var services = $('.service-item');
    var windowHeight = $(window).height();
    $(window).scroll(function () {
      var scrollPos = $(window).scrollTop() + windowHeight;
      services.each(function () {
        var offset = $(this).offset().top;
        if (scrollPos > offset) {
          $(this).animate({ opacity: 1 }, 50);
        }
      });
    });
  }
  animateServicesOnScroll();
});

/*Contact page*/
function showAlert() {
  alert('Thank you for contacting me, I will get in touch with you soon.');
}




