//Overlay Properties
var overlay = {};
//When shift+tab is pressed prevent the default action
document.addEventListener('keydown', function(e) {
    if (e.shiftKey && e.keyCode == 9) {
        e.preventDefault();
    }
}
);

//when shift+tab is pressed, the overlay is toggled
$(document).on('keydown', function(e) {
    if (e.shiftKey && e.keyCode == 9) {
        $('#overlay').toggle();
    }
}
); 
