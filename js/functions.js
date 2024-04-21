var gridToggled = false;

$(window).keypress(function (e) {
    if (e.which == 103) {
        if (!gridToggled) {
            $("body").css("background-color", "#c4e1ff"); // Change background color to blue
            gridToggled = true;
        } else {
            $("body").css("background-color", ""); // Reset to default background color
            gridToggled = false;
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
