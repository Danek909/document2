$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        speed: 1000,
    });
});

$(document).ready(function () {
    $('.slider_2').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: false,
        speed: 1000,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },

            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToShow: 2,
                }
            },


            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 2,
                    slidesToShow: 1.03,
                }
            },

            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesToShow: 1.06,
                }
            },
        ]
    });
});


$(document).ready(function () {
    $('.sliderBottom').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: false,
        speed: 1000,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToShow: 3,
                }
            },


            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                }
            },


            {
                breakpoint: 610,
                settings: {
                    slidesToShow: 2,
                    slidesToShow: 1.03,
                }
            },

            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    slidesToShow: 1.06,
                }
            },


        ]
    });
});

const factory = document.getElementById('button');
if (factory) {
    const isHeder = document.getElementById('ultext');
    factory.addEventListener("click", function (e) {
        isHeder.classList.toggle('_activee');
    });
}

const header = document.getElementById('button');
if (factory) {
    const isHeder = document.getElementById('heder');
    factory.addEventListener("click", function (e) {
        isHeder.classList.toggle('_activee');
    });
}

const text = document.getElementById('button');
if (factory) {
    const isHeder = document.getElementById('text');
    factory.addEventListener("click", function (e) {
        isHeder.classList.toggle('_activee');
    });
}

const spantext = document.getElementById('button');
if (factory) {
    const isHeder = document.getElementById('spantext');
    factory.addEventListener("click", function (e) {
        isHeder.classList.toggle('_activee');
    });
}

const body = document.getElementById('button');
if (factory) {
    const isHeder = document.getElementById('lock');
    factory.addEventListener("click", function (e) {
        isHeder.classList.toggle('_activee');
    });
}