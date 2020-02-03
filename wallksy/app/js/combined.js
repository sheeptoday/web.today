"use strict"
// Combined LIGO 2017


// global app


// o o o o o o o o o o
var appData = 
    {
      //
      pageIsLoaded: false,
      isSet: true
    }

// o o o o o o o o o o





// events
$(function(){
  $('.jsToggleSheepTodayMenu').on('click', function(){
    $('.SheepTodayHeadermenu').slideToggle('fast');
  });
});















// loaded
$(function(){
  appData.pageIsLoaded = true;
});