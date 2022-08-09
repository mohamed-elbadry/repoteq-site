$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$(document).ready(function () {
    $('.slickslider').slick({
        rtl: true,
        margin: 10,
        autoplay: true,
        autoplayspeed: 1000,
        cssEase: 'linear',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true

    });
});