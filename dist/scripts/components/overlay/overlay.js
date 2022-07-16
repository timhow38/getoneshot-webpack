//Overlay Properties
var overlay = {};

//when shift+tab is pressed, the overlay is toggled
$(document).on('keydown', function(e) {
    if (e.shiftKey && e.keyCode == 9) {
        $('#overlay').toggle();
    }
}
); 
