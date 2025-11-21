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
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    // Sticky header on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#site-header').addClass('sticky');
        } else {
            $('#site-header').removeClass('sticky');
        }
    });

    // Mobile sidebar toggle
    $(document).on('click', '.sidebar-toggler', function(e) {
        e.preventDefault();
        var sidebarId = $(this).data('sidebar');
        $('#' + sidebarId).toggleClass('open');
        $('.sidebar-overlay').toggle();
    });

    // Close sidebar when clicking on overlay
    $(document).on('click', '.sidebar-overlay', function() {
        $('.sidebar-nav').removeClass('open');
        $('.sidebar-overlay').hide();
    });
});



/*function toggleSidebar() {
        $('.sidebar-toggler').click(function(e) {
            var attr = $(this).attr('data-target');
            var target_sidebar = $(this).attr('data-sidebar');
            $(this).toggleClass('open');
            if (!(typeof attr !== typeof undefined && attr !== !1)) {
                e.preventDefault();
                $('#' + target_sidebar).toggleClass('open');
                $('.sidebar-overlay').fadeIn()
            }
        });
        $('.sidebar-overlay').click(function() {
            $('.sidebar-toggler').removeClass('open');
            $('.sidebar-nav').removeClass('open');
            $(this).fadeOut()
        })
    }*/