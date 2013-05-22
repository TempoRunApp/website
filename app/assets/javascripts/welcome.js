$(document).ready(function() {
  $('#nav').scrollspy({
    min: $('#nav').offset().top + 10,
    onEnter: function(element, position) {
      $("#nav").addClass('mid-page');
    },
    onLeave: function(element, position) {
      $("#nav").removeClass('mid-page');
    }
  });
});

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
