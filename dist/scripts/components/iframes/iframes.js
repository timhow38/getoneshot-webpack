

    function newSiteUp() {
        var site01 = $('#Up').val();
        var iframe01 = document.getElementById('if-Up');
        iframe01.src = site01;
        iframe01.src = iframe01.src;
        //save the value in the local storage
        localStorage.setItem('site01', site01);
      }
      function newSiteUpLeft() {
        var site02 = $('#UpLeft').val();
        var iframe02 = document.getElementById('if-UpLeft');
        iframe02.src = site02;
        iframe02.src = iframe02.src;
        //save the value in the local storage
        localStorage.setItem('site02', site02);
      }   
      function newSiteUpRight() {
        var site03 = $('#UpRight').val();
        var iframe03 = document.getElementById('if-UpRight');
        iframe03.src = site03;
        iframe03.src = iframe03.src;
        //save the value in the local storage
        localStorage.setItem('site03', site03);
      }
      function newSiteLeft() {
        var site04 = $('#Left').val();
        var iframe04 = document.getElementById('if-Left');
        iframe04.src = site04;
        iframe04.src = iframe04.src;
        //save the value in the local storage
        localStorage.setItem('site04', site04);
      }
      function newSiteDownLeft() {
        var site05 = $('#DownLeft').val();
        var iframe05 = document.getElementById('if-DownLeft');
        iframe05.src = site05;
        iframe05.src = iframe05.src;
        //save the value in the local storage
        localStorage.setItem('site05', site05);
      }
      function newSiteRight() {
        var site06 = $('#Right').val();
        var iframe06 = document.getElementById('if-Right');
        iframe06.src = site06;
        iframe06.src = iframe06.src;
        //save the value in the local storage
        localStorage.setItem('site06', site06);
      }
      function newSiteDown() {
        var site07 = $('#Down').val();
        var iframe07 = document.getElementById('if-Down');
        iframe07.src = site07;
        iframe07.src = iframe07.src;
        //save the value in the local storage
        localStorage.setItem('site07', site07);
      }
      function newSiteDownRight() {
        var site08 = $('#DownRight').val();
        var iframe08 = document.getElementById('if-DownRight');
        iframe08.src = site08;
        iframe08.src = iframe08.src;
        //save the value in the local storage
        localStorage.setItem('site08', site08);
      }
  
      // on page load, if there is a value in the local storage, load the map with the value
      if (localStorage.getItem('site01')) {
        var iframe01 = document.getElementById('if-Up');
        iframe01.src = localStorage.getItem('site01');
        iframe01.src = iframe01.src;
      }
        // on page load, if there is a value in the local storage, load the map with the value
        if (localStorage.getItem('site02')) {
        var iframe02 = document.getElementById('if-UpLeft');
        iframe02.src = localStorage.getItem('site02');
        iframe02.src = iframe02.src;
      }
        // on page load, if there is a value in the local storage, load the map with the value
        if (localStorage.getItem('site03')) {
        var iframe03 = document.getElementById('if-UpRight');
        iframe03.src = localStorage.getItem('site03');
        iframe03.src = iframe03.src;
      }
        // on page load, if there is a value in the local storage, load the map with the value
        if (localStorage.getItem('site04')) {
        var iframe04 = document.getElementById('if-Left');
        iframe04.src = localStorage.getItem('site04');
        iframe04.src = iframe04.src;
      }
        // on page load, if there is a value in the local storage, load the map with the value
        if (localStorage.getItem('site05')) {
        var iframe05 = document.getElementById('if-DownLeft');
        iframe05.src = localStorage.getItem('site05');
        iframe05.src = iframe05.src;
      }
        // on page load, if there is a value in the local storage, load the map with the value
        if (localStorage.getItem('site06')) {
        var iframe06 = document.getElementById('if-Right');
        iframe06.src = localStorage.getItem('site06');
        iframe06.src = iframe06.src;
      }
        // on page load, if there is a value in the local storage, load the map with the value
        if (localStorage.getItem('site07')) {
        var iframe07 = document.getElementById('if-Down');
        iframe07.src = localStorage.getItem('site07');
        iframe07.src = iframe07.src;
      }
        // on page load, if there is a value in the local storage, load the map with the value
        if (localStorage.getItem('site08')) {
        var iframe08 = document.getElementById('if-DownRight');
        iframe08.src = localStorage.getItem('site08');
        iframe08.src = iframe08.src;
      }
  
  
  
      function newSiteDown() {
        var site04 = $('#Down').val();
        var iframe04 = document.getElementById('if-Down');
        iframe04.src = site04;
        iframe04.src = iframe04.src;
        //save the value in the local storage
        localStorage.setItem('site04', site04);
      }
  
        // on page load, if there is a value in the local storage, load the map with the value
        if (localStorage.getItem('site04')) {
        var iframe04 = document.getElementById('if-Down');
        iframe04.src = localStorage.getItem('site04');
        iframe04.src = iframe04.src;
      }
  
    
  
  
  
  
  
  
  
  
  
  
    //if no url has been input into the input field, disable the iframe
    function disableIframe() {
        var iframe01 = document.getElementById('if-Up');
        iframe01.src = "";
      }
      function disableIframe02() {
        var iframe02 = document.getElementById('if-UpLeft');
        iframe02.src = "";
      }
      function disableIframe03() {
        var iframe03 = document.getElementById('if-UpRight');
        iframe03.src = "";
      }
      function disableIframe04() {
        var iframe04 = document.getElementById('if-Left');
        iframe04.src = "";
      }
      function disableIframe05() {
        var iframe05 = document.getElementById('if-DownLeft');
        iframe05.src = "";
      }
      function disableIframe06() {
        var iframe06 = document.getElementById('if-Right');
        iframe06.src = "";
      }
      function disableIframe07() {
        var iframe07 = document.getElementById('if-Down');
        iframe07.src = "";
      }
      function disableIframe08() {
        var iframe08 = document.getElementById('if-DownRight');
        iframe08.src = "";
      }
  
  