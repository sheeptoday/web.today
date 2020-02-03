"use strict"

var AnimatedParts = {};
var AnimatedDetails = {};

function loadAnimatedParts(){
  AnimatedDetails.$SVG = $('#JumpingSheep');
  AnimatedDetails.$svgMaster = AnimatedDetails.$SVG.find('.characterMaster');
  AnimatedDetails.maxSlide = 3;
  AnimatedDetails.itemsCount = 0;
  var path = {};
  var j;
  
  
  AnimatedDetails.$svgMaster.find('path').each(function(i,el){    
    var className = $(this).attr("class");
    path = {};
    path.name = className;
    path.d = [];
    for( j=0; j <= AnimatedDetails.maxSlide; j++) {
      path.d[j] = AnimatedDetails.$SVG.children('.characterSlice.slice'+j).find('.'+path.name).attr('d');
    }
    AnimatedParts[className] = path;
    AnimatedDetails.itemsCount++;
  });
  
}



// loaded
$(function(){

  loadAnimatedParts();

  appData.pageIsLoaded = true;
  $('body').removeClass('hasLoading');
  
  
  launchSVGAnimation();
  
  $('.animationDoButton').on('click',function(e){
    var notReady = !$(this).hasClass('isReady');
    if( notReady ) return false;
    $(this).removeClass('isReady');
    launchSVGAnimation();
  });  
  
});


function launchSVGAnimation() {

  AnimatedDetails.snapMaster = Snap( '#JumpingSheep' );
  var name;
  for( var j in AnimatedParts ){
    name = AnimatedParts[j].name;
    AnimatedParts[j].snapPath = AnimatedDetails.snapMaster.select('.characterMaster .'+name);
  }

  for( var item in AnimatedParts ){
    AnimatedParts[item].snapPath.animate(
      { 'path' : AnimatedParts[item].d[1] },
      450
    );    
  }
  setTimeout(function(){
    for( var item in AnimatedParts ){
      AnimatedParts[item].snapPath.animate(
        { 'path' : AnimatedParts[item].d[2] },
        450
      );    
    }  
  },500);
  setTimeout(function(){
    for( var item in AnimatedParts ){
      AnimatedParts[item].snapPath.animate(
        { 'path' : AnimatedParts[item].d[3] },
        250
      );    
    }  
  },1000);  
  setTimeout(function(){
    for( var item in AnimatedParts ){
      AnimatedParts[item].snapPath.animate(
        { 'path' : AnimatedParts[item].d[1] },
        450
      );    
    }  
  },1300);    
  setTimeout(function(){
    for( var item in AnimatedParts ){
      AnimatedParts[item].snapPath.animate(
        { 'path' : AnimatedParts[item].d[0] },
        450,
        mina.linear,
        function(){
          $('.animationDoButton').addClass('isReady');
        }
      );    
    } 
    
  },1800);    
}
