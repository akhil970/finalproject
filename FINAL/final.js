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