// Mbile Menu
// A $( document ).ready() block.
$(document).ready(function () {
  $(document).ready(function () {
    $(".mobile-button").click(function () {
      $(".mobile-button").toggleClass("active");
      $(".mobile-menu").toggleClass("active");
    });
  });
});

// Slick Slider
$(document).ready(function () {
  $('.slider-container').slick({
    autoplay: true,
    pauseOnHover: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: false
  });
});