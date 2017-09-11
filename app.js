$(document).ready(function(){
  console.log('ready');
  var sideOpen = false;

  $('.open-slide').click(function(){
    toggleSideNav();
  })

  function toggleSideNav(){
    console.log('toggle side nav');
    if(!sideOpen){
      document.getElementById('side-menu').style.width= '250px';
      sideOpen = true;
    } else{
      document.getElementById('side-menu').style.width= '0px';
      sideOpen=false;
    }
  }




});
