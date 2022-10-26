// Menu Responsive
$('.navbar-toggler').click(function() {
    $('.navbar-toggler-icon').toggleClass('rm');
    $('.navbar-nav').toggleClass('rm');
});

// Menu Close
$('.navbar-nav').click(function() {
    $('.navbar-toggler-icon').removeClass('rm');
    $('.navbar-nav').removeClass('rm');
});

// Navlink Active
function navlink_active() {
    let position = $(window).scrollTop();

    $('section').each(function() {
        let target = $(this).offset().top;
        let id = $(this).attr('id');

        if (position >= (target - 200)) {
            $('.nav-item a').removeClass('active');
            $('.nav-item a[href="#' + id + '"]').addClass('active');
        }
    });
}

// Header Fixed
let header = $('header');
let headerHeight = header.outerHeight();

$('a[href*="#"]:not([href="#"])').click(function(event) {
    let href = $(this).attr('href');
    let targetPos = $(href).offset().top - headerHeight;

    $('html, body').animate({
        scrollTop: targetPos
    }, 400);

    event.preventDefault();
});

// Header Sticky
function header_sticky() {
    if ($(window).scrollTop() > 100) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
}

// Portfolio Filter
$('#portfolio .content-filter').click(function(event) {
    let et = $(event.target);

    if (et.hasClass('filter-item')) {
        $('.content-filter .active').removeClass('active');
        et.addClass('active');

        let filterValue = et.attr('data-filter');

        $('#portfolio .content-box').each(function(index) {
            let item = $('#portfolio .content-box').eq(index);

            if (item.hasClass(filterValue) || filterValue === 'all') {
                item.removeClass('hide').addClass('show');
            } else {
                item.removeClass('show').addClass('hide');
            }
        });
    }
});

// ===== Initial Load =====
navlink_active();
header_sticky();

// ===== Window Scroll Event =====
$(window).scroll(function() {
    navlink_active();
    header_sticky();
});