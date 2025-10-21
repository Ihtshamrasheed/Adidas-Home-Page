$(document).ready(function(){
    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<img src="./img/hero-slider-left-arrow.png" class="hero-arrow left" />',
        nextArrow: '<img src="./img/hero-slider-right-arrow.png" class="hero-arrow right" />',
        dots: true,
        customPaging: function(slider, i) {
            return '<div class="indicator"></div>';
        },
        dotsClass: 'hero-indicators'
    });
});

$('.thumbnail-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<img src="./img/hero-slider-left-arrow.png" class="thumb-arrow left" />',
    nextArrow: '<img src="./img/hero-slider-right-arrow.png" class="thumb-arrow right" />',
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 940,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
