# This function executes when the page loads,
# whether for the first time or through Turbolinks.
ready = ->
  # Navigation Bar
  $("#welcome-nav").scrollspy
    min: $("#welcome-nav").offset().top + 10
    onEnter: (element, position) ->
      $("#welcome-nav").addClass "mid-page"

    onLeave: (element, position) ->
      $("#welcome-nav").removeClass "mid-page"


  # Video Aspect Ratio
  setAspectRatio = ->
    $("iframe#vimeo").each ->
      $(this).css "height", jQuery(this).width() * 9 / 16

  setAspectRatio()
  jQuery(window).resize setAspectRatio


  # Twitter Feed
  d = document
  s = "script"
  id = "twitter-wjs"
  js = undefined
  fjs = d.getElementsByTagName(s)[0]
  unless d.getElementById(id)
    js = d.createElement(s)
    js.id = id
    js.src = "//platform.twitter.com/widgets.js"
    fjs.parentNode.insertBefore js, fjs


  # Testimonials background image parallax
  imgHeight = 853
  # The event is triggered based on the number of pixels that have
  #   * scrolled off the top of the screen. We use functions so that it
  #   * stays accurate even if the screen size changes or elements move
  #   * around
  min = ->
    $("#reviews").offset().top - $(window).height()

  max = ->
    $("#reviews").offset().top + $("#reviews").height()

  $("#reviews").scrollspy
    min: min
    max: max
    onTick: (element, position) ->
      percentage = (position.top - min()) / (max() - min())
      range = $("#reviews").height() - imgHeight
      $("#reviews").css "background-position", "0 " + (percentage * range) + "px"


$(document).ready(ready)
$(document).on('page:load', ready)
