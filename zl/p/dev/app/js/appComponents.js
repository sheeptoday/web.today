"use strict"


// interface components


// o o o o o o o o o o


function elModalInit(triggerSelector) {                    
  vex.defaultOptions.className = 'vex-theme-plain';
  $(triggerSelector).on('click',elModalTriggerActivation);
}                
function elModalTriggerActivation(e){
  var trigger = $(e.currentTarget);
  var targetSelector = trigger.attr('href');
  elModalOpen(targetSelector);                         
}
function elModalOpen(targetSelector) {
  var target = $(targetSelector);                    
  var fullscreen = target.hasClass('withFullscreen');                    
  var vexOptions = {
      unsafeMessage: target.html(),
      showCloseButton: true,
      buttons: false,
      className: 'vex-theme-plain elModalVex',
      afterOpen: function (data) {
          var triggerSelector = $('.elModalVex [data-modal="href"]');
          $(triggerSelector).on('click',elModalTriggerActivation);                          
      },
      callback: function (data) {
          //console.log('callback data:', data);
      }
  };
  if (fullscreen) vexOptions.contentClassName = 'withFullscreen';
  if (fullscreen) $('body').addClass('withFullscreen'); 
  else $('body').removeClass('withFullscreen');
  vex.dialog.open(vexOptions);                          
}
$(function(){  
  $('.cArticleStepList:not(.withGoalSteps) .artStepIcon').attr(
    {
      'data-modal' : 'href',
      'href' : '#HelpfullPartAboutStepIcons'
    }
  );
  elModalInit('[data-modal="href"]');
});


// o o o o o o o o o o
// MenuChapters

$(function(){
  $('.cjsPageMenuChapters').on('click',cjsPageMenuOpening);
  $('.artChaptersList').on('click', function(e){
    if($('body').hasClass('showMenuChapters')) cjsPageMenuOpening();
  });
});
function cjsPageMenuOpening(e)
{
  var area = $('body');
  var svg = $('.cPageMenuChapters .jsSVGtransformer');
  area.toggleClass('showMenuChapters');
  svgAnimatePath({ 'currentTarget' : svg });
}


// o o o o o o o o o o
// SVG transfroms


$(function(){
  $('.jsSVGtransformerOnClick').on('click', svgAnimatePath);
});
function svgAnimatePath(e) {
  var kliker = $(e.currentTarget);
  var klikerIsActive = kliker.hasClass('isActive');
  var svg = Snap(kliker.data('svgid'));
  var path, path_default, path_active;
  var time = 200;
  
  // path 1
  path = svg.select('path:nth-child(1)');
  path_default = path.attr('ddefault');
  path_active = path.attr('dactive');
  path.animate({'path':klikerIsActive ? path_default : path_active}, time);
  
  // path 2
  path = svg.select('path:nth-child(2)');
  path_default = path.attr('ddefault');
  path_active = path.attr('dactive');
  path.animate({'path':klikerIsActive ? path_default : path_active}, time);  
  
  // path 3
  path = svg.select('path:nth-child(3)');
  path_default = path.attr('ddefault');
  path_active = path.attr('dactive');
  path.animate({'path':klikerIsActive ? path_default : path_active}, time);              
  
  // state
  kliker.toggleClass('isActive');
}
