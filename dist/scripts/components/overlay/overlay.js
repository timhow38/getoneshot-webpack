//when shift+tab is pressed, show the overlay, if pressed again, hide the overlay
document.addEventListener("keydown", function (e) {
    if (e.shiftKey && e.keyCode == 9) {
        e.preventDefault();
        if (overlay.style.display == "none") {
        overlay.style.display = "block";
        window.moveUp = function () {};
        window.moveLeft = function () {};
        window.moveRight = function () {};
        window.moveDown = function () {};
        window.zoomIn = function () {};
        } else {
        overlay.style.display = "none";
        window.zoomIn = funcHold05;
      window.moveUp = funcHold01;
      window.moveLeft = funcHold02;
      window.moveRight = funcHold03;
      window.moveDown = funcHold04;
        }
    }
    }
    );