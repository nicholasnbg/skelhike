$(document).ready(function(){
  console.log('ready');
  var sideOpen = false;


  $('.menuToggle').click(function(){
    $('.menuToggle').toggleClass('open');
    toggleSideNav();
  });

  function toggleSideNav(){
    console.log('toggle side nav');
    if(!sideOpen){
      document.getElementById('side-menu').style.width= '33vw';
      sideOpen = true;
    } else{
      document.getElementById('side-menu').style.width= '0px';
      sideOpen=false;
    }
  }




});
