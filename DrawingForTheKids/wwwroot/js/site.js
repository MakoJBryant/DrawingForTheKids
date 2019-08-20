// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$('#carousel-example-generic').carousel({
    interval: 3000,
    pause: null
})

/* Mobile touch support for carousel. */
var touchSensitivity = 5;
$(".carousel").on("touchstart", function (event) {
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
        var xMove = event.originalEvent.touches[0].pageX;
        if (Math.floor(xClick - xMove) > touchSensitivity) {
            $(this).carousel('next');
        } else if (Math.floor(xClick - xMove) < -(touchSensitivity)) {
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function () {
        $(this).off("touchmove");
    });
});

