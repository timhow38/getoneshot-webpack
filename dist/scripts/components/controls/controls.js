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
      

