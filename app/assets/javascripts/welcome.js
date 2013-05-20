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


/* In order for box shadows on each section to work properly,
 * the sections need to be placed in descending z-index order. */
$(document).ready(function() {
  $('.section').each(function(index) {
    zindex = index * -1;
    $(this).css('zIndex', zindex);
  });
});
