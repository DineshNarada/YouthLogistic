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
});

/**
            <script type="speculationrules">
                {
                    "prefetch": [
                        {
                            "source": "document",
                            "where": {
                                "and": [
                                    {
                                        "href_matches": "\/*"
                                    },
                                    {
                                        "not": {
                                            "href_matches": [
                                                "\/wp-*.php",
                                                "\/wp-admin\/*",
                                                "\/wp-content\/uploads\/*",
                                                "\/wp-content\/*",
                                                "\/wp-content\/plugins\/*",
                                                "\/wp-content\/themes\/YuthLogistics\/*",
                                                "\/*\\?(.+)"
                                            ]
                                        }
                                    },
                                    {
                                        "not": {
                                            "selector_matches": "a[rel~=\"nofollow\"]"
                                        }
                                    },
                                    {
                                        "not": {
                                            "selector_matches": ".no-prefetch, .no-prefetch a"
                                        }
                                    }
                                ]
                            },
                            "eagerness": "conservative"
                        }
                    ]
                }</script>

                */