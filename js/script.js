$(document).ready(function(){
$('.slider').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows:true,
    dots:true,
    speed:1000,
  });
});

$(document).ready(function(){
  $('.slider_2').slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      arrows:true,
      speed:1000,
    });
  }); 

  $(document).ready(function(){
    $('.sliderBottom').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows:true,
        speed:1000,
      });
    });