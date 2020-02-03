"use strict"

var svg, path, time;

function runSVGAnimation() {
  var $sheep = $('.thisSheepSVG');
  var $polishOnHand = $sheep.find('.polishOnHand');
  
  // initial
  $polishOnHand.css('opacity',0);
  
  // step 1
  time.step1 = 300
  path.leftEye.model.animate({ 'path':path.leftEye.db }, time.step1);
  path.rightEye.model.animate({ 'path':path.rightEye.db }, time.step1);
  path.rightEyeBall.model.animate({ 'path':path.rightEyeBall.db }, time.step1);
  path.leftEyeBall.model.animate({ 'path':path.leftEyeBall.db }, time.step1);
  
  // step 2
  time.step2 = 300
  setTimeout(function(){
    path.brushPart1.model.animate({ 'path':path.brushPart1.db }, time.step2);
    path.brushPart2.model.animate({ 'path':path.brushPart2.db }, time.step2);
    path.brushPart3.model.animate({ 'path':path.brushPart3.db }, time.step2);
    path.rightHand.model.animate({ 'path':path.rightHand.db }, time.step2);
  }, time.step1 + time.x);
  
  // step 3
  time.step3 = 1000
  setTimeout(function(){
    $polishOnHand.css('opacity',1);
    path.brushPart1.model.animate({ 'path':path.brushPart1.dc }, time.step3);
    path.brushPart2.model.animate({ 'path':path.brushPart2.dc }, time.step3);
    path.brushPart3.model.animate({ 'path':path.brushPart3.dc }, time.step3);
    path.rightHand.model.animate({ 'path':path.rightHand.dc }, time.step3);
    path.polish.model.animate({ 'path':path.polish.db }, time.step3);
    path.rightEyeBall.model.animate({ 'path':path.rightEyeBall.dc }, time.step3);
    path.leftEyeBall.model.animate({ 'path':path.leftEyeBall.dc }, time.step3);    
  }, time.step1 + time.x + time.step2 + time.x );
  
  // step 3
  time.step4 = 300
  setTimeout(function(){
    path.brushPart1.model.animate({ 'path':path.brushPart1.da }, time.step4);
    path.brushPart2.model.animate({ 'path':path.brushPart2.da }, time.step4);
    path.brushPart3.model.animate({ 'path':path.brushPart3.da }, time.step4);
    path.rightHand.model.animate({ 'path':path.rightHand.da }, time.step4);
    path.leftEye.model.animate({ 'path':path.leftEye.da }, time.step4);
    path.rightEye.model.animate({ 'path':path.rightEye.da }, time.step4);
    path.rightEyeBall.model.animate({ 'path':path.rightEyeBall.da }, time.step4);
    path.leftEyeBall.model.animate({ 'path':path.leftEyeBall.da }, time.step4);    
  }, time.step1 + time.x + time.step2 + time.x + time.step3 + time.x );  
  
  // ready
  setTimeout(function(){
    $('.animationDoButton').addClass('isReady');
  }, time.step1 + time.x + time.step2 + time.x + time.step3 + time.x + time.step4 );  
  
  
}

function runSVGClickReaction() {
  var $sheep = $('.thisSheepSVG');
  var $polishOnHand = $sheep.find('.polishOnHand');
  
  // step 0.1
  time.klikstep1 = 300
  path.polish.model.animate({ 'path':path.polish.dc }, time.klikstep1);
  $polishOnHand.css('opacity',0);
  
  // step 0.2
  time.klikstep2 = 400
  setTimeout(function(){    
    path.polish.model.animate({ 'path':path.polish.da }, time.klikstep2);
  }, time.klikstep1 + time.x );  
  
  // step 0.3
  time.klikstep3 = 300
  setTimeout(function(){
    path.rightEyeBall.model.animate({ 'path':path.rightEyeBall.db }, time.klikstep3);
    path.leftEyeBall.model.animate({ 'path':path.leftEyeBall.db }, time.klikstep3);    
  }, time.klikstep1 + time.x + time.klikstep2 + time.x );
  
  // step 0.4
  time.klikstep4 = 300
  setTimeout(function(){
    path.rightEyeBall.model.animate({ 'path':path.rightEyeBall.da }, time.klikstep4);
    path.leftEyeBall.model.animate({ 'path':path.leftEyeBall.da }, time.klikstep4);    
  }, time.klikstep1 + time.x + time.klikstep2 + time.x + time.klikstep3 );  
  
  // step 0.5
  time.klikstepDelay = 500
  setTimeout(function(){
    runSVGAnimation();
  }, time.klikstep1 + time.x + time.klikstep2 + time.x + time.klikstep3 + time.klikstep4 + time.klikstepDelay );    

}



$(function(){
  $('.animationDoButton').on('click',function(e){
    var notReady = !$(this).hasClass('isReady');
    if( notReady ) return false;
    $(this).removeClass('isReady');
    runSVGClickReaction();
  });
});












// loaded
$(function(){
  appData.pageIsLoaded = true;
  $('body').removeClass('hasLoading');

  initSVGAnimation();
  runSVGAnimation();
});

function initSVGAnimation() {
  var $sheep = $('.thisSheepSVG');
  var $polishOnHand = $sheep.find('.polishOnHand');
  
  svg = Snap( '#' + $sheep.attr('id') );
  path = {};
  time = {
    'x':100
  }
  
  // eyes
  
  path.leftEye = {};
  path.leftEye.model = svg.select('path.sheepEyeLeft');
  path.leftEye.da = path.leftEye.model.attr('da');
  path.leftEye.db = path.leftEye.model.attr('db');  
  path.rightEye = {};
  path.rightEye.model = svg.select('path.sheepEyeRight');
  path.rightEye.da = path.rightEye.model.attr('da');
  path.rightEye.db = path.rightEye.model.attr('db');
  path.leftEyeBall = {};
  path.leftEyeBall.model = svg.select('path.sheepEyeballLeft');
  path.leftEyeBall.da = path.leftEyeBall.model.attr('da');
  path.leftEyeBall.db = path.leftEyeBall.model.attr('db');      
  path.leftEyeBall.dc = path.leftEyeBall.model.attr('dc');
  path.rightEyeBall = {};
  path.rightEyeBall.model = svg.select('path.sheepEyeballRight');
  path.rightEyeBall.da = path.rightEyeBall.model.attr('da');
  path.rightEyeBall.db = path.rightEyeBall.model.attr('db');
  path.rightEyeBall.dc = path.rightEyeBall.model.attr('dc');
  
  // hands
  path.brushPart1 = {};
  path.brushPart1.model = svg.select('path.itemBrushPart1');
  path.brushPart1.da = path.brushPart1.model.attr('da');
  path.brushPart1.db = path.brushPart1.model.attr('db');  
  path.brushPart1.dc = path.brushPart1.model.attr('dc');
  path.brushPart2 = {};
  path.brushPart2.model = svg.select('path.itemBrushPart2');
  path.brushPart2.da = path.brushPart2.model.attr('da');
  path.brushPart2.db = path.brushPart2.model.attr('db');    
  path.brushPart2.dc = path.brushPart2.model.attr('dc');
  path.brushPart3 = {};
  path.brushPart3.model = svg.select('path.itemBrushPart3');
  path.brushPart3.da = path.brushPart3.model.attr('da');
  path.brushPart3.db = path.brushPart3.model.attr('db'); 
  path.brushPart3.dc = path.brushPart3.model.attr('dc');
  path.rightHand = {};
  path.rightHand.model = svg.select('path.sheepRightHand');
  path.rightHand.da = path.rightHand.model.attr('da');
  path.rightHand.db = path.rightHand.model.attr('db');
  path.rightHand.dc = path.rightHand.model.attr('dc');
  path.polish = {};
  path.polish.model = svg.select('path.polishOnHand');
  path.polish.da = path.polish.model.attr('da');
  path.polish.db = path.polish.model.attr('db');  
  path.polish.dc = path.polish.model.attr('dc');  
}