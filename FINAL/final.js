//index.html page links
$(document).ready(function() {
    var animationDuration = 2000;
    var delayBetweenBoxes = 500;
    $(".box").each(function(index) {
      $(this).delay(index * delayBetweenBoxes).animate({ bottom: "0", opacity: "1" }, animationDuration);
    });
});