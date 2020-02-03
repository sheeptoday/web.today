"use strict"

// init app

$(function(){
  appData.pageIsLoaded = true;
});























// remove loading

$(function(){
    setTimeout(function(){ // enjoy the sheep
      $('#Loading').css('opacity','0');
      setTimeout(function(){ $('body').removeClass('hasLoading'); },500)
    },100);
});