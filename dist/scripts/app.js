// Global Variables
var node;
var rotation = 0;
var gestureStartRotation = 0;
var gestureStartScale = 0;
var scale = 1;
var posX = 0;
var posY = 0;
var startX;
var startY;
var con = "on";
var funcHold01 = window.moveUp;
var funcHold02 = window.moveLeft;
var funcHold03 = window.moveRight;
var funcHold04 = window.moveDown;
var funcHold05 = window.zoomIn;
var node = document.querySelector(".frame");
var win = window,
  doc = document;

// Global Functions

function hasClass(el, cls) {
  return el.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

function addClass(el, cls) {
  if (!this.hasClass(el, cls)) {
    el.className += " " + cls;
  }
}

function removeClass(el, cls) {
  if (this.hasClass(el, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
}

// Declare Global Variables
var site = doc.getElementsByClassName("site-wrap")[0];
var wrap = doc.getElementsByClassName("panel-wrap")[0];
var panel = doc.getElementsByClassName("panel");
var zoom = doc.getElementsByClassName("js-zoom");
var nav_up = doc.getElementsByClassName("js-up"),
  nav_left = doc.getElementsByClassName("js-left"),
  nav_right = doc.getElementsByClassName("js-right"),
  nav_down = doc.getElementsByClassName("js-down");
var animation = doc.getElementsByClassName("js-animation");

// Position Tracking [X, Y]
var pos_x = 0, pos_y = 0;

// setPos Function - Sets the position of the panel-wrap
function setPos() {
  wrap.style.transform =
    "translateX(" + pos_x + "00%) translateY(" + pos_y + "00%)";
  setTimeout(function () {
    removeClass(wrap, "animate");
  }, 600);
}
//Set active position
setPos();

// move[Up, Left, Right, Down] Function - Moves the panel-wrap
function moveUp() {
  addClass(wrap, "animate");
  pos_y++;
  setPos();
}
function moveLeft() {
  addClass(wrap, "animate");
  pos_x++;
  setPos();
}
function moveRight() {
  addClass(wrap, "animate");
  pos_x--;
  setPos();
}
function moveDown() {
  addClass(wrap, "animate");
  pos_y--;
  setPos();
}
//Set Event Listeners if pannel is clicked, if panel is clicked, set panel pos to that panel
for (var x = 0; x < nav_up.length; x++) {
  nav_up[x].addEventListener("click", moveUp);
}
for (var x = 0; x < nav_left.length; x++) {
  nav_left[x].addEventListener("click", moveLeft);
}
for (var x = 0; x < nav_right.length; x++) {
  nav_right[x].addEventListener("click", moveRight);
}
for (var x = 0; x < nav_down.length; x++) {
  nav_down[x].addEventListener("click", moveDown);
}

// Setup Animations to be used in toggleAnimation
for (var x = 0; x < animation.length; x++) {
  (function (_x) {
    animation[_x].addEventListener("click", function () {
      toggleAnimation(_x);
    });
  })(x);
}

// toggleAnimation Function - Enables animation on Zoom
function toggleAnimation(i) {
  for (var x = 0; x < animation.length; x++) {
    if (i === x) {
      addClass(animation[x], "active");
      addClass(wrap, animation[x].getAttribute("data-animation"));
    } else {
      removeClass(animation[x], "active");
      removeClass(wrap, animation[x].getAttribute("data-animation"));
    }
  }
}
for (var x = 0; x < zoom.length; x++) {
  zoom[x].addEventListener("click", zoomOut);
}

// zoomOut Function - Zooms out and adds the class 'show-all' to the site-wrap
function zoomOut(e) {
  e.stopPropagation();
  addClass(site, "show-all");
  for (var x = 0; x < panel.length; x++) {
    (function (_x) {
      panel[_x].addEventListener("click", setPanelAndZoom);
    })(x);
  }
}

// setPanelAndZoom Function - Gets the panel that was input and sets the panel to that panel
function setPanelAndZoom(e) {
  (pos_x = -e.target.getAttribute("data-x-pos")),
    (pos_y = e.target.getAttribute("data-y-pos"));
  setPos();
  zoomIn();
}

// ZoomIn Function - Removes the class 'show-all' to the site-wrap
function zoomIn() {
  for (var x = 0; x < panel.length; x++) {
    panel[x].removeEventListener("click", setPanelAndZoom);
  }
  removeClass(site, "show-all");
  //edit site class and remove spaces
  site.className = site.className.replace(/\s+/g, " ");
}

//Set Toggle Functionality
function conON() {con = "off";}
function conOFF() {con = "on";}
//create an event listener for the key esc (~)
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 192) {
    if (con == "on") {
      conON();
      //display block #terminal
      $("#terminal").show();
      window.moveUp = function () {};
      window.moveLeft = function () {};
      window.moveRight = function () {};
      window.moveDown = function () {};
      window.zoomIn = function () {};
      //Remove html from .print and .prompt
      $(".print").html("");
      $(".prompt").html("");
      //<span class="prompt"><span class="cursor">&nbsp;</span></span>
      $(".prompt").append(
        "<span class='cursor'>&nbsp;</span>"
      );
    } else if (con == "off") {
      conOFF();
      //unload function enterCommandLine
      //jquery hide #terminal
      $("#terminal").hide();
      window.zoomIn = funcHold05;
      window.moveUp = funcHold01;
      window.moveLeft = funcHold02;
      window.moveRight = funcHold03;
      window.moveDown = funcHold04;
      //Remove html from .print and .prompt
      $(".print").html("");
      $(".prompt").html("");
      $(".prompt").append(
        "<span class='cursor'>&nbsp;</span>"
      );
    }
  }
});

//if [enter] is pressed run the function zoomIn
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    if (con == "on") {
      zoomIn();
    }
  }
});

//by default, hide div #terminal
$("#terminal").hide();