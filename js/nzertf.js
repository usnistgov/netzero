// when menu item clicked
$('.collapse').click(function () {
    // close navbar if open
    //$(".navbar-toggle:not(.collapsed)").click();
    //$(this).removeClass("in").addClass("collapse");
    $(".navbar-default .in").removeClass("in").addClass("collapse");
});
// when menu item clicked
$('.navbar-toggle').click(function () {
    // close navbar if open
    //$(".navbar-toggle:not(.collapsed)").click();
    //$(this).removeClass("in").addClass("collapse");
    $(".childMenu.in").removeClass("in").addClass("collapse");
});


// Scroll Spy for Side Navbar
$(document).ready(function() {
    $('body').scrollspy({ 
    target: '#side-nav'
    });
});

// Add Smooth Scrolling
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 70
        }, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#sidebar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#sidebar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
