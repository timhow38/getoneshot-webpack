//Log pos_x and pos_y to console when setPos is changed
wrap.addEventListener("transitionend", function (e) {
    if (tgl == "on") {
      console.group("posLocation");
      console.log(pos_x, pos_y);
      console.groupEnd("posLocation");
    } else {
    }
  });