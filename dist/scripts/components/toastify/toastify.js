//https://github.com/apvarun/toastify-js/blob/master/README.md

//Toastify Variables
var text = null;
var gravity = null; // `top` or `bottom`
var position = null; // `left`, `center` or `right`
var duration = null; // '3000', `6000

// Style Variables
var fontFamily = null;
var border = null;
var borderRadius = null;
var padding = null;
var backgroundColor = null;
var position = null;
var zIndex = 2;

//create a function style01 - Key Commands / Debug
function style01() {
  //text = 'Notification'; // Disable if fed from DB
  gravity = "bottom"; // `top` or `bottom`
  position = "right"; // `left`, `center` or `right`
  duration = 3000; // '3000', `6000

  fontFamily = "nunito";
  border = "1px solid yellow"; // border color
  borderRadius = "5px"; // rounded corner style
  padding = "3px"; // toast padding
  backgroundColor = "#333"; // background color
  position = "fixed";
  zIndex = 2;
}

//create a function style02 - Action Chat - Player
function style02() {
  text = "Action Chat - Player"; // Disable if fed from DB
  gravity = "bottom"; // `top` or `bottom`
  position = "right"; // `left`, `center` or `right`
  duration = 3000; // '3000', `6000

  fontFamily = "nunito";
  border = "1px solid green"; // border color
  borderRadius = "5px"; // rounded corner style
  padding = "3px"; // toast padding
  backgroundColor = "#333"; // background color
  position = "fixed";
  zIndex = 2;
}

//create a function style03 - Action Chat - DM
function style03() {
  text = "Action Chat - DM"; // Disable if fed from DB
  gravity = "bottom"; // `top` or `bottom`
  position = "right"; // `left`, `center` or `right`
  duration = 3000; // '3000', `6000

  fontFamily = "nunito";
  border = "1px solid red"; // border color
  borderRadius = "5px"; // rounded corner style
  padding = "3px"; // toast padding
  backgroundColor = "#333"; // background color
  position = "fixed";
  zIndex = 2;
}

//create a function - Must pass through text/gravity/position
function createToast() {
  Toastify({
    text: text,
    duration: duration,
    newWindow: true,
    close: true,
    gravity: gravity, // `top` or `bottom`
    position: position, // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    offset: {
      x: 20, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: 20, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    style: {
      //fontFamily equals the fontFamily variable
      fontFamily: fontFamily,
      border: border, // border color
      borderRadius: borderRadius, // rounded corner style
      padding: padding, // toast padding
      backgroundColor: backgroundColor, // background color
      position: position,
      zIndex: zIndex,
    },
  }).showToast();
}

function testToast() {
    text = "Centered"; // Disable if fed from DB
    //run the function createToast and feed it the variables from function style01
    createToast(style01());
  }
//if key press ctrl + shift + k run function
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.keyCode == 75) {
    //run the function testToast
    testToast();

  }
});

//trigger the toast if ctrl shift k is pressed
//$(document).keydown(function(e){
//    if(e.ctrlKey && e.shiftKey && e.keyCode == 75){
//     Toastify({
//    text: "Screen Centered",
//    duration: 3000,
//    newWindow: true,
//   close: true,
//   gravity: "bottom", // `top` or `bottom`
//   position: "left", // `left`, `center` or `right`
//    stopOnFocus: true, // Prevents dismissing of toast on hover
//    offset: {
//     x: 20, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
//      y: 20 // vertical axis - can be a number or a string indicating unity. eg: '2em'
//    },
//    style: {
//      fontFamily: 'nunito',
//      border: "1px solid #fff", // border color
//      borderRadius: "5px", // rounded corner style
//     padding: "3px", // toast padding
//      backgroundColor: "#333", // background color
//      position: "fixed",
//      zIndex: 2,
//    }
//  }).showToast();
//    }
//  }
//  );
