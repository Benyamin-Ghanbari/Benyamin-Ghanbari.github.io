var grid_animating;

$(window).keypress(function (e) {
    if (e.which == 103) {
        if (!grid_animating) {
            grid_animating = true;
            $("body").toggleClass("grid");
            if ($("body").hasClass("grid")) {
                $("body").css("background-color", "#007bff"); // or any other shade of blue you prefer
            } else {
                $("body").css("background-color", ""); // Reset to default background color if needed
            }
        }
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
