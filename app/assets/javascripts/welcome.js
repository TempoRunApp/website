/* Navigation Bar */
$(document).ready(function() {
  $('#welcome-nav').scrollspy({
    min: $('#welcome-nav').offset().top + 10,
    onEnter: function(element, position) {
      $("#welcome-nav").addClass('mid-page');
    },
    onLeave: function(element, position) {
      $("#welcome-nav").removeClass('mid-page');
    }
  });
});

/* Video Aspect Ratio */
jQuery(function() {
  function setAspectRatio() {
    $('iframe#vimeo').each(function() {
      $(this).css('height',jQuery(this).width()*9/16);
    });
  }

  setAspectRatio();
  jQuery(window).resize(setAspectRatio);
});

/* Twitter Feed */
$(document).ready(function() {
  var d = document
  var s = "script"
  var id= "twitter-wjs"
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)) {
    js=d.createElement(s);
    js.id=id;
    js.src="//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);
  }
});

/* Testimonials background image parallax */
$(document).ready(function() {
  var imgHeight = 853;
  /* The event is triggered based on the number of pixels that have
   * scrolled off the top of the screen. We use functions so that it
   * stays accurate even if the screen size changes or elements move
   * around */
  var min = function() { return $('#reviews').offset().top - $(window).height(); }
  var max = function() { return $('#reviews').offset().top + $('#reviews').height(); }
  $('#reviews').scrollspy({
    min: min,
    max: max,
    onTick: function(element, position) {
      var percentage = (position.top - min()) / (max() - min());
      var range = $('#reviews').height() - imgHeight;
      $("#reviews").css('background-position', "0 " + ( percentage * range) + "px");
    },
  });
});
