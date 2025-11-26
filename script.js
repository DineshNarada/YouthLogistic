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
            0:{ items:1 },
            600:{ items:2 },
            1000:{ items:3 }
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

    // Mobile sidebar toggle - support both original and renamed classes
    $(document).on('click', '.sidebar-toggler, .navbar-menu-toggle', function(e) {
        e.preventDefault();
        // if using data-sidebar attribute (original), use it; otherwise target #left-sidebar
        var sidebarId = $(this).data('sidebar') || 'left-sidebar';
        $('#' + sidebarId).toggleClass('open');
        // overlay class in markup is .mobile-menu-overlay
        $('.mobile-menu-overlay, .sidebar-overlay').toggle();
    });

    // Close sidebar when clicking on overlay
    $(document).on('click', '.mobile-menu-overlay, .sidebar-overlay', function() {
        $('.sidebar-nav, #left-sidebar').removeClass('open');
        $('.mobile-menu-overlay, .sidebar-overlay').hide();
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