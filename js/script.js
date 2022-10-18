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
      slidesToShow: 4,
      arrows:true,
      speed:1000,
    });
  }); 

  $(document).ready(function(){
    $('.sliderBottom').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows:true,
        speed:1000,
      });
    });

    const factory = document.getElementById('button');
    if(factory){
        const isHeder = document.getElementById('ultext');
        factory.addEventListener("click", function(e){
            isHeder.classList.toggle('_activee');
        }); 
    }

    const deletet = document.getElementById('button');
    if(factory){
        const isHeder = document.getElementById('buttonClik');
        factory.addEventListener("click", function(e){
            isHeder.classList.toggle('_activee');
        }); 
    }

    const commit = document.getElementById('button');
    if(factory){
        const isHeder = document.getElementById('texLogin');
        factory.addEventListener("click", function(e){
            isHeder.classList.toggle('_activee');
        }); 
    }

    const header = document.getElementById('button');
    if(factory){
        const isHeder = document.getElementById('heder');
        factory.addEventListener("click", function(e){
            isHeder.classList.toggle('_activee');
        }); 
    }

    const text = document.getElementById('button');
    if(factory){
        const isHeder = document.getElementById('text');
        factory.addEventListener("click", function(e){
            isHeder.classList.toggle('_activee');
        }); 
    }

    const spantext = document.getElementById('button');
    if(factory){
        const isHeder = document.getElementById('spantext');
        factory.addEventListener("click", function(e){
            isHeder.classList.toggle('_activee');
        }); 
    }

    const button = document.getElementById('button');
    if(factory){
        const isHeder = document.getElementById('button');
        factory.addEventListener("click", function(e){
            isHeder.classList.toggle('_activee');
        }); 
    }

    const burgerspan = document.getElementById('button');
    if(factory){
        const isHeder = document.getElementById('burgerSpan');
        factory.addEventListener("click", function(e){
            isHeder.classList.toggle('_activee');
        }); 
    }

    const heder = document.getElementById('button');
    if(factory){
        const isHeder = document.getElementById('divHeder');
        factory.addEventListener("click", function(e){
            isHeder.classList.toggle('_activee');
        }); 
    }