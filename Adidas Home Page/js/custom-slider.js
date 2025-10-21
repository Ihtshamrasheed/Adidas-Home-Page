$(document).ready(function(){
    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><img src="./img/hero-slider-left-arrow.png" alt="Left Arrow" /></div>',
        nextArrow: '<div class="slick-next"><img src="./img/hero-slider-right-arrow.png" alt="Right Arrow" /></div>',
        dots: true,
        appendDots: $('.hero-indicators'),
        customPaging: function(slider, i) {
            return '<div class="indicator"></div>';
        },
        autoplay: true,
        autoplaySpeed: 5000,
    });

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });
});
