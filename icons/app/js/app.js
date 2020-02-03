"use strict"
// appName 123.0002

var domBody = $('body');
var domGrid = $('#zlIconGrid-root');

// create icon grid
$(function(){
  
  /* *
  var tmplItemLayer0 = '<div class="zlIconGridItem"></div>';
  var itemData, itemDOM, itemDOMlayer, itemDOMel;
  
  domGrid.empty();
  // each array item  
  for ( var i in dataIcons ) {
    itemDOMel = $('<img>');
    itemDOMel
      .addClass('zlIcon')
      .attr('src', dataIconsMd.path + dataIcons[i].name + '.svg')
      .attr('alt', dataIcons[i].name);
    itemDOMlayer = $('<figure class="zoomTarget">');
    itemDOMlayer.append(itemDOMel)
    itemDOM = $(tmplItemLayer0);
    itemDOM
      .addClass('zlIconGridItem-'+dataIcons[i].name)
      .append(itemDOMlayer);
    if (dataIcons[i].tag) itemDOM.addClass(dataIcons[i].tag);
    domGrid.append(itemDOM);
  }
  
  var img = document.querySelector('img');
  if (img.complete) {
    loaded();
  } else {
    img.addEventListener('load', loaded)
    img.addEventListener('error', function() {
        alert('error. refresh page')
    })
  }
//* */
  
  $('.jsGridView').on('click',function(e){
    var TARGET = $(e.currentTarget);
    var mode = TARGET.data('gridview');
    $('.jsGridView').removeClass('isActive');
    TARGET.addClass('isActive');
    setTimeout(function(){
        $('.zlIconGrid').removeClass('zlIconGrid-mode-rows');
        $('.zlIconGrid').removeClass('zlIconGrid-mode-grid');
        $('.zlIconGrid').addClass('zlIconGrid-mode-'+mode);
        domGrid.isotope('layout');
    },10);
  });
  
  $('.jsGridFilter').on('click',gridFilterAction);

  
});
function gridFilterAction(e){
    var TARGET = $(e.currentTarget);
    var filter = TARGET.data('gridfilter');
    $('.jsGridFilter').removeClass('isActive');
    $('.jsGridFilter[data-gridfilter="'+filter+'"]').addClass('isActive');
    setTimeout(function(){
        if (filter=='all') domGrid.isotope({ filter: '*' });
        else domGrid.isotope({ filter: '.o-'+ filter });
    },10);
}

// loaded
function loaded() {
    /*domGrid.isotope({
        itemSelector: '.zlIconGridItem',
        layoutMode: 'masonry',
        filter: '.o-home'
    });
    $(".zoomTarget").zoomTarget({
        closeclick: true,
        duration: 200
    });*/
    //$(".zoomButton").zoomButton();
}



// ---------------------------------------------------------------- el interface events
$(function(){
    

    //elModal
    elModalInit('[data-modal="href"]');
    function elModalInit(triggerSelector) {
        vex.defaultOptions.className = 'elModalVex';
        $(triggerSelector).on('click',elModalTriggerActivation);
    }
    function elModalTriggerActivation(e){
        var trigger = $(e.currentTarget);
        var targetSelector = trigger.attr('href');
        elModalOpen(targetSelector);
    }
    function elModalOpen(targetSelector) {
        var target = $(targetSelector);
        var sidebar = target.hasClass('withSidebar');
        var fullscreen = target.hasClass('withFullscreen');
        var vexOptions = {
            unsafeMessage: target.html(),
            showCloseButton: true,
            buttons: false,
            className: 'elModalVex' + (fullscreen ? ' withFullscreen':'') + (sidebar ? ' withSidebar':''),
            afterOpen: function (data) {
                var toOpen = $(this.rootEl);
                setTimeout( function(){ toOpen.addClass('isOpen'); }, 10);
                toOpen.find('.jsGridFilter').on('click',function(e){ gridFilterAction(e); vex.closeAll(); });
            },
            beforeClose: function (data) {
                $('.elModalVex.isOpen').removeClass('isOpen');
            },
            callback: function (data) {
                //console.log('callback data:', data);
            }
        };
        vex.dialog.open(vexOptions);
    }

});


// ------------------------------------------------------- templates

$(document).ready(function(){
    //* */
    domGrid.isotope({
        itemSelector: '.zlIconGridItem',
        layoutMode: 'masonry',
        filter: '.o-home'
    });    
    $(".zoomTarget").zoomTarget({
        closeclick: true,
        duration: 200,
        targetsize: .92
    });    
    $(".zoomContainer").zoomContainer();
    $(".zoomButton").zoomButton();
    //* */
});

/*
    // make all elements with the zoomButton class activate
    $(document).ready(function() {
        // this needs to be after the "$.fn.zoomButton" has been initialized
        $(".zoomButton").zoomButton();
    });
    // make all elements with the zoomContainer class zooming containers
    $(document).ready(function() {
        // this needs to be after the "$.fn.zoomContainer" has been initialized
        $(".zoomContainer").zoomContainer();
    });
    // make all elements with the zoomTarget class zooming
    $(document).ready(function() {
        // this needs to be after the "$.fn.zoomTarget" has been initialized
        $(".zoomTarget").zoomTarget();
    });
    
*/    

$(function(){

    /* // event 
    $('.element').on( 'click', klikerAction );
    function klikerAction(e){
        var kliker = $(e.currentTarget);
    }*/

});

$(function(){
});


/* ----------------------------------------------
// console functions

console.time('zlTimer');
console.timeEnd('zlTimer');

console.group();
console.log( 'ooo', ooo );
console.groupEnd();

console.log('%c zl', 'background: #222; color: #bada55');

// console commands

$0
getEventListeners($0)
document.body.contentEditable=true
*/
