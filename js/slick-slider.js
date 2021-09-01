$(document).ready(function(){

  $('.house-slider').slick({
    dots: true,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  });

  $('.room-slider').slick({
    dots: true,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  });
  
});