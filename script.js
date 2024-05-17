$(document).ready(function() {
    function showSection(section) {
        $(section).addClass('visible');
    }

    function checkVisibility() {
        $('.section').each(function() {
            var top = $(this).offset().top - $(window).scrollTop();
            if (top <= $(window).height() / 1.5 && top >= 0) {
                showSection(this);
            }
        });
    }

    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        showSection(target);
        $('html, body').animate({
            scrollTop: $(target).offset().top - $('.navbar').outerHeight()
        }, 500);

        // Collapse the navbar after clicking a menu item
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    $(window).on('scroll', function() {
        checkVisibility();
        toggleScrollToTop();
    });

    // Show home section by default
    showSection('#home');
    checkVisibility(); // Check visibility on page load

    // Scroll-to-top button functionality
    function scrollToTop() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    }

    function toggleScrollToTop() {
        var scrollTop = $(window).scrollTop();
        var scrollThreshold = 200; // Adjust as needed
        var scrollToTopBtn = $('.scroll-to-top');

        if (scrollTop > scrollThreshold) {
            scrollToTopBtn.fadeIn();
        } else {
            scrollToTopBtn.fadeOut();
        }
    }

    // Bind click event to scroll-to-top button
    $('.scroll-to-top').on('click', function() {
        scrollToTop();
    });
});
