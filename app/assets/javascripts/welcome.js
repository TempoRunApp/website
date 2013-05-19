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
