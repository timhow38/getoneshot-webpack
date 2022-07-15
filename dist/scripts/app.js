var node;
var rotation = 0;
var gestureStartRotation = 0;
var gestureStartScale = 0;
var scale = 1;
var posX = 0;
var posY = 0;
var startX;
var startY;


var con = "on"
var funcHold01 = window.moveUp;
var funcHold02 = window.moveLeft;
var funcHold03 = window.moveRight;
var funcHold04 = window.moveDown;
var funcHold05 = window.zoomIn;
//var funcHold06 = window.conTerm;


var node = document.querySelector('.frame')


window.addEventListener('wheel', (e) => {
  e.preventDefault();

  if (e.ctrlKey) {
    scale -= e.deltaY * 0.01;
  } else {
    posX -= e.deltaX * 2;
    posY -= e.deltaY * 2;
  }

});









// Global
var win = window,
    doc = document;

// Global Functions

function hasClass(el, cls) {
  return el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
};

function addClass(el, cls) {
  if (!this.hasClass(el, cls)) {
    el.className += " " + cls;
  }
};

function removeClass(el, cls) {
  if (this.hasClass(el, cls)) {

    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    el.className = el.className.replace(reg,' ');
  }
};

// Elements

var site = doc.getElementsByClassName('site-wrap')[0];
var wrap = doc.getElementsByClassName('panel-wrap')[0];

var panel = doc.getElementsByClassName('panel');

var zoom = doc.getElementsByClassName('js-zoom');

var nav_up = doc.getElementsByClassName('js-up'),
    nav_left = doc.getElementsByClassName('js-left'),
    nav_right = doc.getElementsByClassName('js-right'),
    nav_down = doc.getElementsByClassName('js-down');

var animation = doc.getElementsByClassName('js-animation');

// Tracking
var pos_x = 0,
    pos_y = 0;

function setPos(){
  wrap.style.transform = 'translateX(' + pos_x + '00%) translateY(' + pos_y + '00%)';
  setTimeout( function(){
    removeClass(wrap, 'animate');
  }, 600);
}

setPos();

function moveUp(){
  addClass(wrap, 'animate');
  pos_y++;
  setPos();
}

function moveLeft(){
  addClass(wrap, 'animate');
  pos_x++;
  setPos();
}

function moveRight(){
  addClass(wrap, 'animate');
  pos_x--;
  setPos();
}

function moveDown(){
  addClass(wrap, 'animate');
  pos_y--;
  setPos();
}

for (var x = 0; x < nav_up.length; x++){
  nav_up[x].addEventListener('click', moveUp);
}

for (var x = 0; x < nav_left.length; x++){
  nav_left[x].addEventListener('click', moveLeft);
}

for (var x = 0; x < nav_right.length; x++){
  nav_right[x].addEventListener('click', moveRight);
}

for (var x = 0; x < nav_down.length; x++){
  nav_down[x].addEventListener('click', moveDown);
}



//if an arrow key is pressed run the function that corresponds to the arrow key
win.addEventListener('keydown', function(e){
  if (e.which == 38) {
    moveUp();
  } else if (e.which == 40) {
    moveDown();
  } else if (e.which == 37) {
    moveLeft();
  } else if (e.which == 39) {
    moveRight();
  }
}
);

//if ctrl+shift+k is pressed move to the center of the screen
win.addEventListener('keydown', function(e){
  if (e.ctrlKey && e.shiftKey && e.which == 75) {
    pos_x = 0;
    pos_y = 0;
    setPos();
    console.clear();
  }
}
);

//log pos_x and pos_y to console when setPos is changed
wrap.addEventListener('transitionend', function(e){
  if (tgl == "on") {
    console.group("posLocation");
    console.log(pos_x, pos_y);
    console.groupEnd("posLocation");
  } else {
  }
}
);







  //var doScroll = function(e) {
   // const deltaX = Math.max(-1, Math.min(1, e.deltaX));
   // const deltaY = Math.max(-1, Math.min(1, e.deltaY));
    
    //only log
  //  console.log(deltaX, deltaY);
   // e.preventDefault();  
  //}
  //if (window.addEventListener) {
  //  window.addEventListener("wheel", doScroll, false);
  //}

  //only allow a change to var doScroll every 100ms



// Animations
for (var x = 0; x < animation.length; x++){
  ( function(_x){
    animation[_x].addEventListener('click', function(){
      toggleAnimation(_x);
    });
  })(x);
}

function toggleAnimation(i){
  for (var x = 0; x < animation.length; x++){
    if (i === x){
      addClass(animation[x], 'active');
      addClass(wrap, animation[x].getAttribute('data-animation'));
    } else {
      removeClass(animation[x], 'active');
      removeClass(wrap, animation[x].getAttribute('data-animation'));
    }
  }
  
}

for (var x = 0; x < zoom.length; x++){
  zoom[x].addEventListener('click', zoomOut);
}

function zoomOut(e){
  e.stopPropagation();
  addClass(site, 'show-all');
  for (var x = 0; x < panel.length; x++){
    ( function(_x){
      panel[_x].addEventListener('click', setPanelAndZoom);
    })(x);
  }
  //$(".prompt").html("");
  //display div #LoginScreen 
  //document.getElementById("navmenu").style.display = "block";
}

function setPanelAndZoom(e){
  pos_x = -e.target.getAttribute('data-x-pos'),
  pos_y = e.target.getAttribute('data-y-pos');
  setPos();
  zoomIn();
}


function zoomIn(){
  for (var x = 0; x < panel.length; x++){
    panel[x].removeEventListener('click', setPanelAndZoom);
  }
  removeClass(site, 'show-all');
  //edit site class and remove spaces
  site.className = site.className.replace(/\s+/g, ' ');
  // hide div #LoginScreen
  //document.getElementById("navmenu").style.display = "none";

}





function conON() {con = "off"}
function conOFF() {con = "on"}

////stop conTerm function
//window.conTerm = function() {};
//window.conTerm = funcHold06;

//create an event listener for the key esc (192) 
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 192) {
        if (con == "on") {
            conON();
            //if tgl == "off"
            if (tgl == "off") {
            //display block #terminal
            $("#terminal").show();
            window.moveUp = function() {};
            window.moveLeft = function() {};
            window.moveRight = function() {};
            window.moveDown = function() {};
            window.zoomIn = function() {};
            //Remove html
            $(".prompt").html("");
            
            
            }
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

            //Remove html
            $(".prompt").html("");
           
        }
    }
});

//if the key enter is pressed after the key ` is pressed run the function zoomIn
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        if (con == "on") {
            zoomIn();
        }
    }
}
);

//by default, hide div #terminal
$("#terminal").hide();




//