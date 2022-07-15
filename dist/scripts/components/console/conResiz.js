var startingHeight;
var other;
$(".resiz").resizable({
  handles:'s',   /* try using "n" to see what happens... */
  start:function(e,ui){
     if ($(this).next('.resiz').length>0){
     	other= $(this).next('.resiz');
     }else{
        other = $(this).prev('.resiz');
     }
     startingHeight= other.height();
  },
  resize:function(e,ui){
     var dh = ui.size.height-ui.originalSize.height;
      if (dh>startingHeight){// can't resize the box more then it's neighbour
         dh =  startingHeight;
         ui.size.height = ui.originalSize.height+dh;
     }
     other.height(startingHeight-dh);
  }
});