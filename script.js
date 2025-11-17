AOS.init();

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});
