 // find span with text up/right and replace it with <i class="fa-solid fa-circle-up-right"></i>
 $(document).ready(function(){
    
});


    //            <span class="panel__nav panel__nav--right-top js-up js-right">up/right</span>
//<span class="panel__nav panel__nav--left-top js-up js-left">up/left</span>
 //       <span class="panel__nav panel__nav--right-down js-down js-right">down/right</span>
 //       <span class="panel__nav panel__nav--left-down js-down js-left">down/left</span>

 $(document).ready(function(){
  $('span:contains("up/right")').each(function(){
    $(this).html($(this).html().replace('up/right','<i class="fa-solid fa-circle-up fa-lg"></i>'));
    //rotate the icon 90 degrees
    $(this).find('i').css('transform','rotate(45deg)');
  });
  $('span:contains("up/left")').each(function(){
    $(this).html($(this).html().replace('up/left','<i class="fa-solid fa-circle-up fa-lg"></i>'));
    //rotate the icon -90 degrees
    $(this).find('i').css('transform','rotate(-45deg)');
  });
  $('span:contains("down/right")').each(function(){
    $(this).html($(this).html().replace('down/right','<i class="fa-solid fa-circle-down fa-lg"></i>'));
    //rotate the icon -90 degrees
    $(this).find('i').css('transform','rotate(-45deg)');
  });
  $('span:contains("down/left")').each(function(){
    $(this).html($(this).html().replace('down/left','<i class="fa-solid fa-circle-down fa-lg"></i>'));
    //rotate the icon 90 degrees
    $(this).find('i').css('transform','rotate(45deg)');
  });
  $('span:contains("up/left")').each(function(){
    $(this).html($(this).html().replace('up/left','<i class="fa-solid fa-circle-up-left"></i>'));
  });
  $('.panel__nav--left').each(function(){
    $(this).html($(this).text().replace('left','<i class="fa-solid fa-circle-left fa-lg"></i>'))
  });
  $('.panel__nav--right').each(function(){
    $(this).html($(this).text().replace('right','<i class="fa-solid fa-circle-right fa-lg"></i>'))
  });
  $('.panel__nav--up').each(function(){
    $(this).html($(this).text().replace('up','<i class="fa-solid fa-circle-up fa-lg"></i>'))
  });
  $('.panel__nav--down').each(function(){
    $(this).html($(this).text().replace('down','<i class="fa-solid fa-circle-down fa-lg"></i>'))
  });
});





















  //if right click on prevent context menu, then log the panel to the console
  $(document).ready(function(){
    $('.panel').mousedown(function(e){
      if(e.button == 2){
        console.log($(this).attr('class'))
      }
    });
  });

  //when mouse hovers over a panel display the panel's second class name on a tooltip and remove "pos" from the class name and then capitalize the first letter
  $(document).ready(function(){
    $('.panel').hover(function(){
      if (tgl == "off") {
        $(this).attr('title',$(this).attr('class').split(' ')[1].replace('pos','').replace(/\b\w/g, l => l.toUpperCase()));
      } else if (tgl == "on") {
        //
      }
      
    });
  });











  

      //onload add an empty iframe to each panel except for the panel with the class posMiddle and append the parent class to each panel
      $(document).ready(function(){
        $('.panel').each(function(){
          if(!$(this).hasClass('posMiddle')){
            $(this).append('<iframe name="map" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" allowfullscreen></iframe>');
            $(this).find('iframe').attr('id',$(this).attr('class') + '-if');
            //give each iframe a class number from 1 to the number of panels
            $(this).find('iframe').addClass('if-' + $(this).attr('class').split(' ')[1]);
          }
        });
      });

    //find all iframes
    
//https://www.owlbear.rodeo






//window.addEventListener("wheel", (e) => {
//  e.preventDefault();

//  if (e.ctrlKey) {
//    scale -= e.deltaY * 0.01;
//  } else {
//    posX -= e.deltaX * 2;
//    posY -= e.deltaY * 2;
//  }
//});