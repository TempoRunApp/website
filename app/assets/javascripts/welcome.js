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

/* In order for box shadows on each section to work properly,
 * the sections need to be placed in descending z-index order. */
$(document).ready(function() {
  $('.section').each(function(index) {
        zindex = index * -1;
           $(this).css('zIndex', zindex);
  });
});
