$(window).keypress(function (e) {
    if (e.which == 103) {
        $("body").css({
            "background-image": "none", // Remove background image
            "background-color": "#c4e1ff" // Set background color to blue
        });
    }
});

function checkWindowSize() {
    if ($(window).width() < 950) {
        $('body').addClass('small');
    } else {
        $('body').removeClass('small');
    }
}

$(window).resize(checkWindowSize);
$(window).load(checkWindowSize);
