var tgl = "on"
    function ToggleON() {tgl = "off"}
    function ToggleOFF() {tgl = "on"}

    //create an event listener for the key esc (27) 
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) {
            if (tgl == "on") {
                ToggleON();
                conOFF();
                $('.js-zoom').trigger('click');
                //console.log("Zoomed Out");
            } else if (tgl == "off") {
                ToggleOFF();
                conON();
                zoomIn();
                //console.log("Zoomed In");
            }
        }
    });
    //If enter is pressed while tgl == "off" run the function zoomIn
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 13) {
            if (tgl == "off") {
                ToggleOFF();
                zoomIn();
                console.log("Zoomed In");
            }
        }
    }
    );

    //When ctrl+shift+l is pressed run the function 
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.keyCode == 76) {
            localStorage.clear();
            location.reload();
        }
    }
    );
      
    //if ctrl+shift+k is pressed move to the center of the screen
    win.addEventListener("keydown", function (e) {
        if (e.ctrlKey && e.shiftKey && e.which == 75) {
        pos_x = 0;
        pos_y = 0;
        setPos();
        console.clear();
        }
    });

    //if an arrow key is pressed run the function that corresponds to the arrow key
    win.addEventListener("keydown", function (e) {
        if (e.which == 38) {
        moveUp();
        } else if (e.which == 40) {
        moveDown();
        } else if (e.which == 37) {
        moveLeft();
        } else if (e.which == 39) {
        moveRight();
        }
    });

    //When conButton1 is clicked open a new tab with the url "https://www.google.com" in a new window
    document.getElementById("conButton1").addEventListener("click", function() {
        window.open("https://www.dndbeyond.com/campaigns/2447466", "_blank");
    }
    );
    //When conButton1 is clicked open a new tab with the url "https://www.google.com" in a new window
    document.getElementById("conButton2").addEventListener("click", function() {
        window.open("https://tabletopy.com/", "_blank");
    }
    );
    //When conButton1 is clicked open a new tab with the url "https://www.google.com" in a new window
    document.getElementById("conButton2").addEventListener("click", function() {
        alert("Function Not Added Yet");

    }
    );